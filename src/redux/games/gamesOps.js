import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://api.rawg.io/api";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (search, thunkAPI) => {
    try {
      const response = await axios.get("/games", {
        params: {
          key: "8768630ce9a24dd286494efc0a46c443",
          page_size: 20,
          page: 1,
          search: search,
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
  async (params, thunkAPI) => {
    try {
      const response = await axios.get("/games", {
        params: {
          key: "8768630ce9a24dd286494efc0a46c443",
          page_size: 20,
          page: params.page,
          search: params.search,
        },
      });
      console.log(response.data);
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchGameById = createAsyncThunk(
  "games/fetchGameById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/games/${id}`, {
        params: {
          key: "8768630ce9a24dd286494efc0a46c443",
        },
      });
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getScreenshots = createAsyncThunk(
  "games/getScreenshots",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/games/${id}/screenshots`, {
        params: {
          key: "8768630ce9a24dd286494efc0a46c443",
        },
      });
      console.log(response.data);
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
