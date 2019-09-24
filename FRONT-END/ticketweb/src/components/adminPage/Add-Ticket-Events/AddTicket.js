import React, { useState, useEffect } from 'react';
import MenuDashboard from './../MenuDashboard/MenuDasboard'
import BodyAddTicket from './BodyAddTicket'
import { Redirect } from 'react-router';
import {showLoading} from './../../Alert/SwalAlert'
import axios from 'axios'

const AddTicket = () => {
    const [Login,setLogin] = useState(true)
   const [loading,setLoading] =useState(true)

    useEffect(() => {
       
        const fetchData = async () => {
            let result = await axios.get("/admin/add-ticket")
            if(!result.data){
                setLogin(false)
            }
            else {
                setLoading(false)
                setLogin(true)
                console.log(result.data)
            }
        } 
        fetchData()
    },[])


 
  const textAddTicket = () => (
    <div className="container-fluid ">
        <div className="row row-no-padding ">
        <MenuDashboard />
        <BodyAddTicket />
        </div>
     </div>
  )
  const loadData = () => (
       <>
       {loading ? showLoading(loading): textAddTicket()}
       </>
  )
        return (
            <>
          {Login ? loadData() : <Redirect to= "/admin"/>}
           
            </>
        );
}

export default AddTicket;