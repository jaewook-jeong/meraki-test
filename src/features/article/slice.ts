import ROUTES from '@constants/ROUTES';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FilterState } from 'features/filter/slice';
import { RootState } from 'store';
import { Article } from 'types/article';

type RawArticle = {
  _id: string;
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

type CurrentPage = {
  currentPage: number;
};

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

export const getArticles = createAsyncThunk<any, void, { state: RootState }>(
  'article/get',
  async (_, { getState, rejectWithValue }) => {
    const { filter, article } = getState();
    try {
      const query = makeLuceneQuery(filter[ROUTES.MAIN]);
      const url =
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&api-key=d5rDty04g2bUzP11iiBiceC7QZ4SoxXw&page=${article.currentPage}${query ? `&fq=${query}` : ''}`;
      const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      };
      const response = await fetch(url, options);
      if (response.ok) {
        return response.json();
      }
      return rejectWithValue(response);
    } catch (err) {
      return rejectWithValue(err);
    }
    
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
          id: article._id,
        }));
        state.articles.push(...newArticles);
        state.currentRequestId = '';
      }
    })
    .addCase(getArticles.rejected, (state, action) => {
      const { requestId } = action.meta;
      
      if (state.isLoading && state.currentRequestId === requestId) {
        state.isLoading = false;
        state.error = "에러가 발생했습니다. 잠시후 시도해주세요!";
        state.currentRequestId = '';
      }
    })
  },
})

export const { setInitArticlesStore } = articleSlice.actions

export default articleSlice.reducer