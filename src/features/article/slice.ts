import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Article } from 'types/article';

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
  async (filter) => {
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
        // 일단 임시조치
        state.articles.push(action.payload as Article);
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