import React from 'react';
import FormButton from '../components/FormButton';
import './Style.css';
import Img1 from "../components/Images/Img1.jpeg"

export default function Fifth({ page, setPage, formData, setFormData }) {
    return (
        <>

            {/* <form style={{ marginRight: 270, marginLeft: 270,  }}>
                <div style={{ margin: 17 }}>
                    <p>Categorized_Flag:</p>
                    <input
                        type='radio'
                        id='1'
                        name='1'
                        value = 'true'
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

                <FormButton
                    style={{ marginLeft: 70 }}
                    className='btn btn-primary'
                    buttonText={'Previous'}
                    onClick={() => {
                        return setPage(page - 1);

                    }}
                />

                <FormButton
                    style={{ marginLeft: 241 }}
                    className='btn btn-success'
                    buttonText={'Submit'}
                    onClick={() => {
                        alert('Submit Successfully');
                        console.log(formData);
                        //console.log(typeof(formData.AccountTransactionID))

                    }}
                />

            </form>
             */}
            <div className='main'>
                <div className='contr'>
                    <div>  <form >
                        <div className='centerr'><img className='log' src={Img1} alt="description"/></div>
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
                                    onClick={() => {
                                        alert('Submit Successfully');
                                        console.log(formData);
                                        //console.log(typeof(formData.AccountTransactionID))

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
