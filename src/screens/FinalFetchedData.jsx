import React, { useEffect, useRef, useState } from 'react'
import { DownloadTableExcel } from 'react-export-table-to-excel';
import './tableStyle.css'
export default function FinalFetchedData() {
    const [data, setData] = useState([]);
    const tableRef = useRef(null);
    const [refresh,setRefresh] = useState(true)
    const DeleteRow = (id)=>{
        console.log("id" ,id)
         fetch("http://localhost:3000/Tdelete",{
            method: 'DELETE', // Method itself
            headers: {
             'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body: JSON.stringify({
                "_id":id
            }) // We send data in JSON format
           }).then(()=>{
            console.log("Done Fetching")
            setRefresh(!refresh)
           }).catch((e)=>{
            console.log("error",e)
           })
       

    }

    const fetchData = async () => {
        const res = await fetch('https://pfmfake.herokuapp.com/transcation')
        const d = await res.json();
        setData(d)
    }
    useEffect(() => {
        fetchData()

    }, [refresh])
    useEffect(()=>{},[refresh])
    return (
        <div>
            <DownloadTableExcel
                filename="usersDatatableinXLS"
                sheet="users"
                currentTableRef={tableRef.current}
            >

                <button> Export excel </button>

            </DownloadTableExcel>
            {
                data.length === 0 ?
                    <>Loading...</> :
                    <table className='tablehead' ref={tableRef}>
                        <thead>
                                
                            <tr >
                                <th>AccountTransactionID</th>
                                <th>TransactionID</th>
                                <th>TransactionAmount</th>
                                <th>LinkedAccountID</th>
                                <th>MCCCodeID</th>
                                <th>ActiveFlag</th>
                                <th>TransactionCurrencyCodeID</th>
                                <th>TransactionModeID</th>
                                <th>CategoryID</th>
                                <th>MerchantID</th>
                                <th>TransactionType</th>
                                <th>NotAExpense</th>
                                <th>BalanceAmount:</th>
                                <th>DestinationCurrency</th>
                                <th>CurrencyCodeID:</th>
                                <th>AccountNumber:</th>
                                <th>BankID:</th>
                                <th>Narration:</th>
                                <th>TransactionReferenceNumber</th>
                                <th>CategorizedFlag</th>

                            </tr>
                        </thead>
                        {
                            data.map((item) =>
                                <React.Fragment key={item._id}>

                                    <tbody>
                                           
                                        <tr>
                                            <td>{item.AccountTransactionID}</td>
                                            <td>{item.TransactionID}</td>
                                            <td>{item.TransactionAmount}</td>
                                            <td>{item.LinkedAccountID}</td>
                                            <td>{item.MCCCodeID}</td>
                                            <td>{item.ActiveFlag}</td>
                                            <td>{item.TransactionCurrencyCodeID}</td>
                                            <td>{item.TransactionModeID ? <>Yes</> : <>No</>}</td>
                                            <td>{item.CategoryID}</td>
                                            <td>{item.MerchantID}</td>
                                            <td>{item.TransactionType}</td>
                                            <td>{item.NotAExpense}</td>
                                            <td>{item.BalanceAmount}</td>
                                            <td>{item.DestinationCurrency}</td>
                                            <td>{item.CurrencyCodeID}</td>
                                            <td>{item.AccountNumber}</td>
                                            <td>{item.BankID}</td>
                                            <td>{item.Narration}</td>
                                            <td>{item.TransactionReferenceNumber}</td>
                                            <td>{item.CategorizedFlag ? <>Given</> : <>Not Given</>}</td>
                                        </tr>
                                        <button onClick={()=>DeleteRow(item._id)}>Delete Row</button>
                                    </tbody>

                                    

                                </React.Fragment>
                            )
                        }

                    </table>
            }

        </div>
    )
}
