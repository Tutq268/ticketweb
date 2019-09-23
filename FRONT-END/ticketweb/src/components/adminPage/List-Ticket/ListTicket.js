import React, { useState, useEffect } from 'react'
import MenuDashboard from './../MenuDashboard/MenuDasboard'
import {Redirect} from 'react-router'
import axios from 'axios'
import BodyListTicket from './BodyListTicket'
const ListTicket = () => {
       const [Login,setLogin] = useState(true)
       useEffect(()=>{
         const fetchData = async () => {
            const result = await axios.get("/admin/list-ticket")
            console.log(result)
            if(!result.data){
                setLogin(false)
            }else{
              setLogin(true)
               console.log(result.data)
            }
         }
         fetchData()
       },[])


       const textAddTicket = () => (
        <div className="container-fluid ">
        <div className="row">
          <MenuDashboard />
          <BodyListTicket />
        </div>
         </div>
      )
        return (
            <>
            {Login ? textAddTicket() : <Redirect to="/admin" />}
  
           </>
        )
    
}
export default ListTicket
