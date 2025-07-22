import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // הוספת השהייה של 3 שניות
      await new Promise((res) => setTimeout(res, 3000));

      const response = await fetch('https://dummyjson.com/c/082a-be91-46ef-a3e2');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  allProducts: [],
  filteredProducts: [],
  isLoading: false,
  error: null
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProductsByCategory: (state, action) => {
      state.filteredProducts = state.allProducts.filter(
        (product) => product.category === action.payload
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProducts = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { filterProductsByCategory } = productSlice.actions;

export const selectProducts = (state) => state.products.filteredProducts;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectError = (state) => state.products.error;

export default productSlice.reducer;
