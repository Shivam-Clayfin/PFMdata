import React from 'react';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import './Style.css';


export default function Second({ page, setPage, formData, setFormData }) {
  return (
    <>
      <form style={{ marginRight: 270, marginLeft: 270, }}>

        <div style={{ margin: 17 }}>MCC_Code_ID:
          <FormInput
            placeholderText={'MCC_Code_ID'}
            value={formData.MCCCodeID}
            onChange={(e) => setFormData({ ...formData, MCCCodeID: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>
          <p>Active_Flag:</p>
          <input
            type='radio'
            id='1'
            name='1'
            value='1'
            checked={formData.ActiveFlag === '1'}
            onChange={(e) => setFormData({ ...formData, ActiveFlag: e.target.value })}
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
            value='0'
            checked={formData.ActiveFlag === '0'}
            onChange={(e) => setFormData({ ...formData, ActiveFlag: e.target.value })}
          />
          <label style={{ marginLeft: 7 }}
            htmlFor='0'
          >
            No
          </label>
        </div>

        <div style={{ margin: 17 }}>Transaction_Currency_Code_ID:
          <FormInput
            placeholderText={'Transaction_Currency_Code_ID'}
            value={formData.TransactionCurrencyCodeID}
            onChange={(e) => setFormData({ ...formData, TransactionCurrencyCodeID: e.target.value })}
          />
        </div>

        <div style={{ margin: 17 }}>
          <p>Transaction_Mode_ID:</p>
          <input
            type='radio'
            id='1'
            name='1'
            value='1'
            checked={formData.TransactionModeID === '1'}
            onChange={(e) => setFormData({ ...formData, TransactionModeID: e.target.value })}
          />
          <label style={{ marginLeft: 7 }}
            htmlFor='1'
          >
            1
          </label>

          <input
            style={{ marginLeft: 40 }}
            type='radio'
            id='0'
            name='0'
            value='0'
            checked={formData.TransactionModeID === '0'}
            onChange={(e) => setFormData({ ...formData, TransactionModeID: e.target.value })}
          />
          <label style={{ marginLeft: 7 }}
            htmlFor='0'
          >
            0
          </label>
        </div>

        <div style={{ margin: 17 }}>Category_ID:
          <select
            style={{ margin: 7, maxWidth: 400, padding: 10 }}
            className="form-select"
            value={formData.CategoryID}
            onChange={(e) => setFormData({ ...formData, CategoryID: e.target.value })}
          >
            <option defaultValue value='0'>Open this for select Category ID</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
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
            setFormData({ ...formData, MCCCodeID: Number(formData.MCCCodeID), TransactionCurrencyCodeID: Number(formData.TransactionCurrencyCodeID) });
            setPage(page + 1);
          }}
        />

      </form>


    </>
  )
}
