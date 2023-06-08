import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TransactionsTable } from "./TransactionsTable";

export const TransactionsList = () => {
    const transactions = useSelector((state: RootState) => state.transactions);
    console.log(transactions);

    return (
        <div>
            <p>Lista de transações:</p>
            <TransactionsTable transactions={transactions} />
        </div>
    );
};
