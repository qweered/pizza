import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface SortState {
  query: string;
  category: number;
  sortBy: SortByItem;
  currentPage: number;
}

// Define the initial state using that type
const initialState: SortState = {
  query: '',
  category: 0,
  sortBy: {
    name: 'популярности',
    key: 'rating',
    order: 'desc',
  },
  currentPage: 1,
};

export const counterSlice = createSlice({
  name: 'sort',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clear: (state) => {
      state.category = 0;
      state.query = '';
      state.sortBy = {
        name: 'популярности',
        key: 'rating',
        order: 'desc',
      };
      state.currentPage = 1;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortByItem>) => {
      state.sortBy = action.payload;
    },
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { clear, setQuery, setSortBy, setCategory, setCurrentPage } =
  counterSlice.actions;

export default counterSlice.reducer;
