import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.rawg.io/api";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/games", {
        params: {
          key: "8768630ce9a24dd286494efc0a46c443",
          page_size: 20,
          page: 1,
        },
      });
      console.log(response.data);
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addGames = createAsyncThunk(
  "games/addGames",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/games", {
        params: {
          key: "8768630ce9a24dd286494efc0a46c443",
          page_size: 20,
          page: page,
        },
      });
      console.log(response.data);
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
