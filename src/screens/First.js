import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';

export default function First({ page, setPage, formData, setFormData }) {

    return (
        <>
            <form 
            style={{ marginRight: 270, marginLeft: 270}}
            >
                <div  style={{ margin: 17 }}>Account_Transaction_ID:
                    <FormInput
                        
                        placeholderText={'Account_Transaction_ID'}
                        value={formData.AccountTransactionID}
                        onChange={(e) => setFormData({ ...formData, AccountTransactionID: e.target.value })}
                    />
                </div>

                <div  style={{ margin: 17 }}>Transaction_ID:
                    <FormInput
                    
                        placeholderText={'Transaction_ID'}
                        value={formData.TransactionID}
                        onChange={(e) => setFormData({ ...formData, TransactionID: e.target.value })}
                    />
                </div>

                <div  style={{ margin: 17 }}>Transaction_Amount:
                    <FormInput
                    
                        placeholderText={'Transaction_Amount'}
                        value={formData.TransactionAmount}
                        onChange={(e) => setFormData({ ...formData, TransactionAmount: e.target.value })}
                    />
                </div>

                <div  style={{ margin: 17 }}>Linked_Account_ID:
                    <FormInput
                    
                        placeholderText={'Linked_Account_ID'}
                        value={formData.LinkedAccountID}
                        onChange={(e) => setFormData({ ...formData, LinkedAccountID: e.target.value })}
                    />
                </div>

                <FormButton
                    style={{ marginLeft: 400 }}
                    className='btn btn-primary nextBtn'
                    buttonText={'Next'}
                    onClick={() => {
                        setFormData({ ...formData, AccountTransactionID: Number(formData.AccountTransactionID), TransactionAmount: Number(formData.TransactionAmount), LinkedAccountID: Number(formData.LinkedAccountID) });
                        setPage(page + 1);
                    }}
                />
            </form>


        </>
    )
}
