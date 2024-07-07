import { createSlice } from "@reduxjs/toolkit";
import { addGames, fetchGames } from "./gamesOps";

const handlePending = () => {
  //   state.loading = true;
};

const handleRejected = () => {
  //   state.loading = false;
  //   state.error = action.payload;
};

const gamesSlice = createSlice({
  name: "games",
  initialState: {
    items: [],
    page: 1,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, handlePending)
      .addCase(fetchGames.fulfilled, (state, action) => {
        // state.loading = false;
        // state.error = false;
        state.items = action.payload;
        // state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchGames.rejected, handleRejected)
      .addCase(addGames.pending, handlePending)
      .addCase(addGames.fulfilled, (state, action) => {
        // state.loading = false;
        // state.error = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(addGames.rejected, handleRejected);
  },
  reducers: {
    setPage(state) {
      state.page += 1;
    },
  },
});

export const gamesReducer = gamesSlice.reducer;

export const { setPage } = gamesSlice.actions;

export const selectGames = (state) => state.games.items;
export const selectPage = (state) => state.games.page;
