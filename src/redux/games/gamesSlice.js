import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addGames, fetchGameById, fetchGames } from "./gamesOps";

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
    search: "",
    sortValue: "",
    gameDetals: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, handlePending)
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.sortValue = "";
        state.page = 1;
        state.gameDetals = null;
        // state.loading = false;
        // state.error = false;
        state.items = action.payload;
      })
      .addCase(fetchGames.rejected, handleRejected)
      .addCase(addGames.pending, handlePending)
      .addCase(addGames.fulfilled, (state, action) => {
        // state.loading = false;
        // state.error = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(addGames.rejected, handleRejected)
      .addCase(fetchGameById.pending, handlePending)
      .addCase(fetchGameById.fulfilled, (state, action) => {
        // state.loading = false;
        // state.error = false;
        state.gameDetals = action.payload;
      })
      .addCase(fetchGameById.rejected, handleRejected);
  },
  reducers: {
    setPage(state) {
      state.page += 1;
    },
    setSearch(state, action) {
      state.sortValue = "";
      state.page = 1;
      state.gameDetals = null;
      state.search = action.payload;
    },
    setSortValue(state, action) {
      state.sortValue = action.payload;
    },
  },
});

export const gamesReducer = gamesSlice.reducer;

export const { setPage, setSearch, setSortValue } = gamesSlice.actions;

export const selectGames = (state) => state.games.items;
export const selectPage = (state) => state.games.page;
export const selectSearch = (state) => state.games.search;
export const selectSortValue = (state) => state.games.sortValue;
export const selectGameDetals = (state) => state.games.gameDetals;

export const selectSortedGames = createSelector(
  [selectGames, selectSortValue],
  (games, value) => {
    switch (value) {
      case "ratingUp": {
        return games.toSorted((a, b) => a.rating - b.rating);
      }
      case "ratingDown": {
        return games.toSorted((a, b) => b.rating - a.rating);
      }
      case "dateUp": {
        return games.toSorted(
          (a, b) => Date.parse(a.released) - Date.parse(b.released)
        );
      }
      case "dateDown": {
        return games.toSorted(
          (a, b) => Date.parse(b.released) - Date.parse(a.released)
        );
      }
      default:
        return games;
    }
  }
);
