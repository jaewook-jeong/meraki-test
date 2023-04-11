import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type FilterState = {
  headline?: string;
  pub_date?: string;
  glocations?: string[];
};

type PageType = 'home' | 'scrap';

const initialState: { [k in PageType]: FilterState } = {
  home: {
    headline: '',
    pub_date: '',
    glocations: [],
  },
  scrap: {
    headline: '',
    pub_date: '',
    glocations: [],
  }
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ filter: FilterState } & { pageType: PageType }>) => {
      state[action.payload.pageType] = {
        ...action.payload.filter
      }
    },
  }
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;