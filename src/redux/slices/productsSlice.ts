import { RootState } from '../store';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductItem } from '../../@types/custom';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (limit: number, thunkAPI) => {
    const { sort } = thunkAPI.getState() as RootState;
    const response = await fetch(
      `https://6367b246edc85dbc84d9ba5d.mockapi.io/products?${
        sort.query ? `title=${sort.query}&` : ''
      }${sort.category ? `category=${sort.category}&` : ''}sortBy=${
        sort.sortBy.key
      }&order=${sort.sortBy.order}&l=${limit}&p=${sort.currentPage}`
    );
    return await response.json();
  }
);

interface ProductsSliceState {
  products: IProductItem[];
  status: 'loading' | 'success' | 'error';
}

const initialState: ProductsSliceState = {
  products: [],
  status: 'loading',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<IProductItem[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
      state.status = 'loading';
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.products = [];
      state.status = 'error';
    });
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
