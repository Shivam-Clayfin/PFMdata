import React from 'react';
import FormButton from '../components/FormButton';
import './Style.css';
import axios from "axios"
import Img1 from "../components/Images/Img1.jpeg"

export default function Fifth({ page, setPage, formData, setFormData }) {

    const handleSubmit = async() => {
        var userData = {
            AccountTransactionID: formData.AccountTransactionID,
            TransactionID: formData.TransactionID,
            TransactionAmount: formData.TransactionAmount,
            LinkedAccountID: formData.LinkedAccountID,
            MCCCodeID: formData.MCCCodeID,
            ActiveFlag: formData.ActiveFlag,
            TransactionCurrencyCodeID: formData.TransactionCurrencyCodeID,
            TransactionModeID: formData.TransactionModeID,
            CategoryID: formData.CategoryID,
            MerchantID: formData.MerchantID,
            TransactionType: formData.TransactionType,
            NotAExpense: formData.NotAExpense,
            BalanceAmount: formData.BalanceAmount,
            DestinationCurrency: formData.DestinationCurrency,
            CurrencyCodeID: formData.CurrencyCodeID,
            AccountNumber: formData.AccountNumber,
            BankID: formData.BankID,
            Narration: formData.Narration,
            TransactionReferenceNumber: formData.TransactionReferenceNumber,
            CategorizedFlag: formData.CategorizedFlag,
        };
        // axios.post("https://pfmfake.herokuapp.com/transcation", userData).then((response) => {
        //     console.log(response.status);
        //     console.log("asasas",userData)
        // });

        var data = new FormData();
        data.append("json", JSON.stringify(userData));
        const out = await fetch('https://pfmfake.herokuapp.com/transcation',
        {
            method: 'POST',
            body: data,
        });
        console.log(out)
        
    };
    return (
        <>
            <div className='main'>
                <div className='contr'>
                    <div>  <form >
                        <div className='centerr'><img className='log' src={Img1} alt="description" /></div>
                        <p className='start' style={{ paddingTop: "10px" }}>Categorized_Flag:</p>
                        <div className='start'>

                            <input
                                type='radio'
                                id='1'
                                name='1'
                                value='true'
                                checked={formData.CategorizedFlag === 'true'}
                                onChange={(e) => setFormData({ ...formData, CategorizedFlag: e.target.value })}
                            />
                            <label style={{ marginLeft: 7 }}
                                htmlFor='1'
                            >
                                Yes
                            </label>

                            <input
                                style={{ marginLeft: 40 }}
                                type='radio'
                                id='0'
                                name='0'
                                value='false'
                                checked={formData.CategorizedFlag === 'false'}
                                onChange={(e) => setFormData({ ...formData, CategorizedFlag: e.target.value })}
                            />
                            <label style={{ marginLeft: 7 }}
                                htmlFor='0'
                            >
                                No
                            </label>
                        </div>
                        <div className='centerr'>
                            <div><FormButton

                                className='btn btn-primary'
                                buttonText={'Previous'}
                                onClick={() => {
                                    return setPage(page - 1);

                                }}
                            />

                                <FormButton

                                    className='btn btn-success'
                                    buttonText={'Submit'}
                                    onClick={() => handleSubmit()}
                                />
                            </div>
                        </div>


                    </form></div>
                </div>
            </div>


        </>
    )
}
