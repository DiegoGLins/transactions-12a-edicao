import React, { useEffect, useState } from "react";
import { TransactionsList } from "../components/TransactionsList";
import { useDispatch } from "react-redux";
import { listTransactionsAction } from "../store/modules/transactions.slice";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate();

    const [erro, setErro] = useState(undefined);

    const listApi = async () => {
        const id = "3c7f047b-53b3-4205-bbb7-678a3476d685";

        const result = await dispatch(
            listTransactionsAction({
                id,
            })
        );

        if (!result.payload.ok) {
            if (result.payload.message === "User not found.") {
                navigate("/login");
                return;
            }

            setErro(result.payload.message);
        }

        console.log(erro);
    };

    useEffect(() => {
        listApi();
    }, []);

    return (
        <React.Fragment>
            <h1>Bem vindo, Daphne</h1>
            <hr />
            <TransactionsList />
            {erro && <p style={{ color: "red" }}>Erro: {erro}</p>}
        </React.Fragment>
    );
};
