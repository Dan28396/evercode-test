import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getHistoricalData, getNewData} from "../utils";

export const fetchData = createAsyncThunk('wallets/fetchData', getNewData)

export const fetchHistoricalData = createAsyncThunk('wallets/fetchHistoricalData', getHistoricalData)

export const walletsSlice = createSlice({
    name: 'wallets',
    initialState: {
        wallets: [],
        historicalData: {},
        balance: 0,
        totalProfit: 0
    },
    reducers: {
        calculateBalanceProfit(state) {
            let balance = 0, profit = 0;
            state.wallets.forEach(wallet => {
                balance += wallet.balance * wallet.price
                profit += wallet.price * wallet.balance - wallet.price * wallet.balance / (1 + wallet.changePCT24Hour / 100)
            })
            state.balance = balance;
            state.totalProfit = profit;
        },

    },
    extraReducers: {
        [fetchData.fulfilled]: (state, action) => {
            if (action.payload) {
                state.wallets = action.payload
            }
            walletsSlice.caseReducers.calculateBalanceProfit(state)
        },
        [fetchHistoricalData.fulfilled]: (state, action) => {
            if (action.payload) {
                state.historicalData[action.payload.coin] = action.payload.historicalData
            }
        }
    }
});

export const selectAllWallets = state => state.wallets.wallets
export const selectBalance = state => state.wallets.balance
export const selectTotalProfit = state => state.wallets.totalProfit
export const selectHistoricalDataByName = (state, name) => state.wallets.historicalData[name]

export const {calculateTotalBalance} = walletsSlice.actions;

export default walletsSlice.reducer;
