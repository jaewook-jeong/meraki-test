import ROUTES from 'constants/ROUTES';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Nation } from 'types/nation';

type FilterState = {
  headline: string;
  pub_date: Date | null;
  glocations: Nation[];
};

type PageType = typeof ROUTES[keyof typeof ROUTES];

const initialState: { [k in PageType]: FilterState } = {
  '/': {
    headline: '',
    pub_date: null,
    glocations: [],
  },
  '/scrap': {
    headline: '',
    pub_date: null,
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