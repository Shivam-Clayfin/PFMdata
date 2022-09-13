import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';

export default function Fourth({ page, setPage, formData, setFormData }) {
  return (
    <>
      <form style={{ marginRight: 270, marginLeft: 270, }}>

        <div style={{ margin: 17 }}>Currency_Code_ID:
          <FormInput
            placeholderText={'Currency_Code_ID'}
            value={formData.CurrencyCodeID}
            onChange={(e) => setFormData({ ...formData, CurrencyCodeID: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>Account_Number:
          <FormInput
            placeholderText={'Account_Number'}
            value={formData.AccountNumber}
            onChange={(e) => setFormData({ ...formData, AccountNumber: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>Bank_ID:
          <FormInput
            placeholderText={'Bank_ID'}
            value={formData.BankID}
            onChange={(e) => setFormData({ ...formData, BankID: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>Narration:
          <FormInput
            placeholderText={'Narration'}
            value={formData.Narration}
            onChange={(e) => setFormData({ ...formData, Narration: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>Transaction_Reference_Number:
          <FormInput
            placeholderText={'Transaction_Reference_Number'}
            value={formData.TransactionReferenceNumber}
            onChange={(e) => setFormData({ ...formData, TransactionReferenceNumber: e.target.value })}
          />
        </div>

        <FormButton
          style={{ marginLeft: 70 }}
          className='btn btn-primary'
          buttonText={'Previous'}
          onClick={() => {
            return setPage(page - 1);

          }}
        />

        <FormButton
          style={{ marginLeft: 400 }}
          className='btn btn-primary'
          buttonText={'Next'}
          onClick={() => {
            setFormData({ ...formData, CurrencyCodeID: Number(formData.CurrencyCodeID), AccountNumber: Number(formData.AccountNumber), BankID: Number(formData.BankID)});
            setPage(page + 1);
          }}
        />
      </form>


    </>
  )
}
