import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
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


async function execute() {
  const url =
    'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=d5rDty04g2bUzP11iiBiceC7QZ4SoxXw&fq=news_desk:("Sports") AND glocations:("South Korea", "NEW YORK CITY")';
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

export const getArticles = createAsyncThunk(
  'article/get',
  async () => {
    const response = await execute();
    return response
  }
)

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
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

export const {  } = articleSlice.actions

export default articleSlice.reducer