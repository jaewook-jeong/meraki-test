import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FilterState } from 'features/filter/slice';
import { RootState } from 'store';
import { Article } from 'types/article';

type RawArticle = {
  pub_date: string;
  web_url: string;
  source: string;
  headline: {
    main: string;
  };
  byline: {
    original: string;
  };
}

type ArticleState = {
  articles: Article[];
  currentPage: number;
  isLoading: boolean;
  error: unknown;
  currentRequestId: string;
}
const initialState: ArticleState = {
  articles: [],
  currentPage: 0,
  isLoading: false,
  error: null,
  currentRequestId: '',
};

const makeLuceneQuery = ({ headline, pub_date, glocations }: FilterState) => {
  let query = ''
  if (headline) {
    query += `headline:("${headline}")`;
  }
  if (pub_date) {
    query += `pub_date:("${pub_date}")`;
  }
  if (glocations.length > 0) {
    query += `glocations:(${glocations.map((g) => `"${g}"`).join(', ')})`;
  }
  return query;
};

async function execute(filter: FilterState) {
  const query = makeLuceneQuery(filter);
  const url =
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=d5rDty04g2bUzP11iiBiceC7QZ4SoxXw${query ? `&fq=${query}` : ''}`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  try {
    const response = await fetch(url, options);
    if (response.ok) {
      return response.json();
    }
  } catch (e) {
    console.error(e);
  }
}

export const getArticles = createAsyncThunk<any, void, { state: RootState }>(
  'article/get',
  async (_, { getState }) => {
    const { filter } = getState();
    
    const response = await execute(filter['/']);
    return response
  }
)

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setInitArticlesStore: (state) => {
      state.articles = [];
      state.currentPage = 0;
      state.isLoading = false;
      state.error = null;
      state.currentRequestId = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state, action) => {
      if (!state.isLoading) {
        state.isLoading = true;
        state.currentRequestId = action.meta.requestId;
        state.currentPage += 1;
      }
    })
    .addCase(getArticles.fulfilled, (state, action) => {
      const { requestId } = action.meta;
      if (state.isLoading && state.currentRequestId === requestId) {
        state.isLoading = false;

        const rawArticles = action.payload.response.docs;
        const newArticles = rawArticles.map((article: RawArticle) => ({
          headline: article.headline.main,
          source: article.source,
          byline: article.byline.original,
          pub_date: article.pub_date,
          url: article.web_url,
        }));
        state.articles.push(...newArticles);
        state.currentRequestId = '';
      }
    })
    .addCase(getArticles.rejected, (state, action) => {
      const { requestId } = action.meta;
      if (state.isLoading && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.error = action.error;
        state.currentRequestId = '';
      }
    })
  },
})

export const { setInitArticlesStore } = articleSlice.actions

export default articleSlice.reducer