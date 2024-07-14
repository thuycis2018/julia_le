import { configureStore } from '@reduxjs/toolkit';
import stockReducer from '../components/stock/stockSlice';
import locationSearchReducer from '../components/map/locationSearchSlice';

const store = configureStore({
  reducer: {
    stock: stockReducer,
    locationSearch: locationSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
