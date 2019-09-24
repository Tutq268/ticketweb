import React, { useState, useEffect } from 'react';
import MenuDasboard from './../MenuDashboard/MenuDasboard'
import BodyListOrder from './BodyListOrder'
import { Redirect } from 'react-router';
import axios from 'axios'
import {showLoading} from './../../Alert/SwalAlert'

const ListOrder = () => {
     const [loading,setLoading] = useState(true)
    const [Login,setLogin] = useState(true)
    useEffect(()=>{
        const fetchData = async () => {
        let result = await axios.get("/admin/list-order")
        setLoading(false)
        if(!result.data){
            setLogin(false)
            
        }
        else{
          console.log(result.data)
          setLogin(true)
        }
        }
        fetchData()
    },[])

    const textAddTicket = () => (
        <div className="container-fluid ">
        <div className="row">
          <MenuDasboard />
          <BodyListOrder />
        </div>
    </div>
      )
        return (
            <>
            {loading ? showLoading(true) :  (Login ? textAddTicket() : <Redirect to="/admin" />)}    
            </>
        );
}

export default ListOrder;