import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { StockSymbol, StockData } from '../../api/types';

const mockStockData: { [key in StockSymbol]: StockData } = {
  AAPL: {
    x: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
    y: [226, 228, 225, 229, 230],
  },
  MSFT: {
    x: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
    y: [467, 444, 466, 451, 453],
  },
  GOOG: {
    x: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
    y: [191, 190, 192, 184, 186],
  },
  AMZN: {
    x: ['2024-07-01', '2024-07-02', '2024-07-03', '2024-07-04', '2024-07-05'],
    y: [200, 199, 190, 191, 194],
  },
};

// Define the thunk with explicit types
export const fetchStockData = createAsyncThunk<
  StockData, // Return type of the thunk
  StockSymbol, // Argument type of the thunk
  {
    state: RootState
  }
>(
  'stock/fetchStockData',
  async (symbol: StockSymbol) => {
    // Simulate API call
    return new Promise<StockData>((resolve) => {
      setTimeout(() => resolve(mockStockData[symbol]), 500);
    });
  }
);

export interface StockState {
  data: { [key in StockSymbol]?: StockData };
  loading: boolean;
}

const initialState: StockState = {
  data: {},
  loading: false,
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStockData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStockData.fulfilled, (state, action: PayloadAction<StockData, string, { arg: StockSymbol }>) => {
      const symbol = action.meta.arg;
      state.data[symbol] = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchStockData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const selectStockData = (state: RootState) => state.stock.data;
export const selectLoading = (state: RootState) => state.stock.loading;

export default stockSlice.reducer;
