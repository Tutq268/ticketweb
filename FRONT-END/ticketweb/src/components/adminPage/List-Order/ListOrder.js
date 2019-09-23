import React, { useState, useEffect } from 'react';
import MenuDasboard from './../MenuDashboard/MenuDasboard'
import BodyListOrder from './BodyListOrder'
import { Redirect } from 'react-router';
import axios from 'axios'
const ListOrder = () => {

    const [Login,setLogin] = useState(true)
    useEffect(()=>{
        const fetchData = async () => {
        let result = await axios.get("/admin/list-order")
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
            {Login ? textAddTicket() : <Redirect to="/admin" />}
                
            </>
        );
}

export default ListOrder;