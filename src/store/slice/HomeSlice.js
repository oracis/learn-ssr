import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetch = () => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: 1, title: "article title 1", content: "article content 1" },
          { id: 2, title: "article title 2", content: "article content 2" },
        ]),
      2000,
    ),
  );
};

// First, create the thunk
export const fetchArticles = createAsyncThunk(
  "home/fetchArticles",
  async () => {
    const response = await fetch();
    return response;
  },
);

const initialState = {
  articles: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
    });
  },
});

export default homeSlice.reducer;
