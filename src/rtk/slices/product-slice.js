import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);

export const productsSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

// export const {} = productsSlice.actions;
export default productsSlice.reducer;
