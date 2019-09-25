import React, { useState, useEffect } from 'react';
import MenuDasboard from './../MenuDashboard/MenuDasboard'
import BodyListOrder from './BodyListOrder'
import { Redirect } from 'react-router';
import axios from 'axios'
import {showLoading} from './../../Alert/SwalAlert'
import {useDispatch} from 'react-redux'


const ListOrder = () => {
  const dispatch = useDispatch()
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
            if(result.data.result === "ok"){
               dispatch({type: "GET_LIST_ORDER",playload: result.data.data.ListOrder})
               dispatch({type: "GET_COUNT_ORDER",playload: result.data.data.count})
            }
          }
          }
          fetchData()
    },[dispatch])

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