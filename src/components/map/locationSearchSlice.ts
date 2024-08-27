// src/store/locationSearchSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Place } from '../../api/types';
import { search } from '../../api/queries/search';

export interface LocationSearchState {
  places: Place[];
  term: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: LocationSearchState = {
  places: [],
  term: '',
  status: 'idle',
  error: null,
};

interface FetchPlacesArgs {
  term: string;
}

export const fetchPlaces = createAsyncThunk<Place[], FetchPlacesArgs, { rejectValue: string }>(
  'locationSearch/fetchPlaces',
  async ({ term }, { rejectWithValue }) => {
    try {
      const response = await search(term);
      return response;
    } catch (error) {
      return rejectWithValue('Failed to fetch places');
    }
  }
);

const locationSearchSlice = createSlice({
  name: 'locationSearch',
  initialState,
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      state.term = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaces.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlaces.fulfilled, (state, action: PayloadAction<Place[]>) => {
        state.status = 'succeeded';
        state.places = action.payload;
      })
      .addCase(fetchPlaces.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.status = 'failed';
        state.error = action.payload ?? 'Failed to fetch places';
      });
  },
});

export const { setTerm } = locationSearchSlice.actions;

export default locationSearchSlice.reducer;
