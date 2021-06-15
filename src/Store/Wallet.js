import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getNewData} from "./utils";

export const fetchData = createAsyncThunk('wallets/fetchData', getNewData)

export const walletsSlice = createSlice({
    name: 'wallets',
    initialState: {
        wallets: [],
        balance: 0,
        totalProfit: 0
    },
    reducers: {
        calculateTotalBalance(state) {
            let balance = 0, profit = 0;
            state.wallets.forEach(wallet => {
                balance += wallet.balance * wallet.price
                profit += wallet.price * wallet.balance - wallet.price * wallet.balance / (1 + wallet.changePCT24Hour)
            })
            state.balance = balance;
            state.totalProfit = profit;
        },

    },
    extraReducers: {
        [fetchData.fulfilled]: (state, action) => {
            state.wallets = action.payload
            walletsSlice.caseReducers.calculateTotalBalance(state)
        }
    }
});

export const selectAllWallets = state => state.wallets.wallets
export const selectBalance = state => state.wallets.balance
export const selectTotalProfit = state => state.wallets.totalProfit

export const {calculateTotalBalance} = walletsSlice.actions;

export default walletsSlice.reducer;
