import React, { useState } from 'react';
import style from "../Component.module.css";
import { useCart } from '../Context/Context';
import AddDetails from '../AddDetails/AddDetails';
const address = [
    {
        Id: 1,
        name: "Suman",
        mobileNo: "+91 8210315347",
        add: "House No. 123 Sector 23 Chandigarh"
    },
    {
        Id: 2,
        name: "Prithivi",
        mobileNo: "+91 8210315347",
        add: "House No. 123 Sector 23 Chandigarh"
    },
    {
        Id: 3,
        name: "Swati",
        mobileNo: "+91 8210315347",
        add: "House No. 123 Sector 23 Chandigarh"
    }
]
function SaveAddress() {
    const {editedAddress,setEditedAddress}=useCart();
    const [editAddress,setEditAddress]=useState(false)
    const closeAddressEditPage=()=>{
        setEditAddress(null);
    }
    return <>
        <div className={style.saved_address_parent}>
            <h2><span className={style.blue_span}>Saved</span> Address</h2>
            <div className={style.saved_address_container}>
                {address?.map((val, id) => {
                    return <div className={style.saved_address_card} key={val.Id}>
                        <h3>{val.name}</h3>
                        <h4>{val.mobileNo}</h4>
                        <div className={style.address_and_button}>
                            <p>{val.add}</p>
                            <div className={style.saved_address_btn_container}>
                                <button className={style.saved_address_btn_container_delete_btn}
                                 
                                > <img src='/DeleteIcon.svg' alt='Delete' />Delete</button>
                                <button className={style.saved_address_btn_container_edit_btn}
                                onClick={()=>{setEditedAddress(val);setEditAddress(true)}}
                                > <img src='/EditIcon.svg' alt='Edit' />Edit</button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
        {editAddress && <AddDetails close={closeAddressEditPage}/>}
    </>
}

export default SaveAddress