import React from 'react';
import FormButton from '../components/FormButton';
import './Style.css';
import Img1 from "../components/Images/Img1.jpeg"
import axios from 'axios';

export default function Fifth({ page, setPage, formData, setFormData }) {

    const submitbtn = async () => {
        const userData = {
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
        }
        await axios.post('http://pfmfake.herokuapp.com/transcation', userData).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <>


            <div className='main'>
                <div className='contr'>
                    <div>  <form >
                        <div className='centerr'><img className='log' src={Img1} alt="description" /></div>

                        <div className="container">
                        CategorizedFlag
                            <div className="toggle-switch">
                                <input type="checkbox" className="checkbox"
                                    name='CategorizedFlag' id='CategorizedFlag'
                                    onChange={() => setFormData({ ...formData, CategorizedFlag: !formData.CategorizedFlag})} />
                                <label className="label" htmlFor='CategorizedFlag'>
                                    <span className="inner" />
                                    <span className="switch" />
                                </label>
                            </div>
                        </div>


                        <div className='centerr'>
                            <div><FormButton

                                className='btn btn-primary'
                                buttonText={'Previous'}
                                onClick={() => {
                                    setPage(page - 1);

                                }}
                            />

                                <FormButton

                                    className='btn btn-success'
                                    buttonText={'Submit'}
                                    onClick={() => {
                                        submitbtn();
                                        alert('Submit Successfully');
                                        console.log(formData);
                                    }}
                                />
                            </div>
                        </div>


                    </form></div>
                </div>
            </div>


        </>
    )
}
