import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addGames,
  fetchGameById,
  fetchGames,
  getScreenshots,
} from "./gamesOps";

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
    gameDetails: null,
    isLoadingData: true,
    screenshots: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, handlePending)
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.sortValue = "";
        state.page = 1;
        state.gameDetals = null;
        state.screenshots = [];
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
        state.gameDetails = action.payload;
      })
      .addCase(fetchGameById.rejected, handleRejected)
      .addCase(getScreenshots.pending, handlePending)
      .addCase(getScreenshots.fulfilled, (state, action) => {
        // state.loading = false;
        // state.error = false;
        state.screenshots = action.payload;
      })
      .addCase(getScreenshots.rejected, handleRejected);
  },
  reducers: {
    setPage(state) {
      state.isLoadingData = true;
      state.page += 1;
    },
    setSearch(state, action) {
      state.sortValue = "";
      state.page = 1;
      state.gameDetals = null;
      state.isLoadingData = true;
      state.search = action.payload;
    },
    setSortValue(state, action) {
      state.sortValue = action.payload;
    },
    setIsLoadingData(state, action) {
      state.isLoadingData = action.payload;
    },
  },
});

export const gamesReducer = gamesSlice.reducer;

export const { setPage, setSearch, setSortValue, setIsLoadingData } =
  gamesSlice.actions;

export const selectGames = (state) => state.games.items;
export const selectPage = (state) => state.games.page;
export const selectSearch = (state) => state.games.search;
export const selectSortValue = (state) => state.games.sortValue;
export const selectGameDetails = (state) => state.games.gameDetails;
export const selectIsLoadingData = (state) => state.games.isLoadingData;
export const selectScreenshots = (state) => state.games.screenshots;

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
