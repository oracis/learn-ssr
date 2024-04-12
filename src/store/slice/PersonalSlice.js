import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetch = () => {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: 1,
          name: "Matt",
          job: "Front-End Development",
        }),
      2000,
    ),
  );
};

// First, create the thunk
export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async () => {
    const response = await fetch();
    return response;
  },
);

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export default userSlice.reducer;
