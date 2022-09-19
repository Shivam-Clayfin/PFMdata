import React, { useState } from 'react'
import Fifth from './Fifth';
import First from './First';
import Fourth from './Fourth';
import Second from './Second';
import Third from './Third';
import './Style.css';
import FinalFetchedData from './FinalFetchedData';


export default function MSForms() {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        AccountTransactionID: 0,
        TransactionID: '',
        TransactionAmount: 0,
        //TransactionTimeStamp : '',
        LinkedAccountID: 0,

        MCCCodeID: 0,
        ActiveFlag: '', //Yes or No 
        TransactionCurrencyCodeID: 0,
        TransactionModeID: '', //Yes or No *************** Bool
        CategoryID: 0,

        MerchantID: 0,
        TransactionType: '', //Credit or Debit
        NotAExpense: 0,
        BalanceAmount: 0,
        DestinationCurrency: 0,

        CurrencyCodeID: '',
        AccountNumber: '',
        BankID: '',
        Narration: '',
        TransactionReferenceNumber: '',

        CategorizedFlag: false,

    })

    const MSScreens = [

        <First
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

        <Second
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

        <Third
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

        <Fourth
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

        <Fifth
            page={page}
            setPage={setPage}
            formData={formData}
            setFormData={setFormData}
        />,

    ];

    const [on, Seton] = useState(true)
    return (

        <>
        <button onClick={()=>Seton(!on)}>{on?<>Show Data</>:<>Show Form</>}</button>
            {

                !on ? 
                <>
                    <FinalFetchedData/>
                </> :
                    <>

                        <div className='form-step'>

                            Page {page + 1}
                        </div>
                        <div className='form-box'>
                            {MSScreens[page]}
                        </div>

                    </>

            }

        </>
    )
}

