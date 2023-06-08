import { combineReducers } from "@reduxjs/toolkit";
import transactionsReducer from "./modules/transactions.slice";

export const combinedReducers = combineReducers({
    transactions: transactionsReducer,
});
