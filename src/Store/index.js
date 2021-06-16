import {configureStore} from '@reduxjs/toolkit';
import walletsSlice from "./Wallet";

export default configureStore({
    reducer: {
        wallets: walletsSlice
    },
});
