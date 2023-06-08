import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Transaction } from "../../models/transaction.model";
import { ApiService } from "../../services/api.service";

interface ListTransactionsProps {
    id: string;
}

export const listTransactionsAction = createAsyncThunk("transactions/list", async (props: ListTransactionsProps) => {
    const result = await ApiService.listTransactions(props.id);

    return result;
});

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState: [] as Transaction[],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(listTransactionsAction.pending, () => {
            console.log("listTransactions iniciou...");
        });

        builder.addCase(listTransactionsAction.fulfilled, (_, action) => {
            console.log("Finalizou");

            return action.payload.data?.transactions ?? [];
        });
    },
});

export default transactionsSlice.reducer;
