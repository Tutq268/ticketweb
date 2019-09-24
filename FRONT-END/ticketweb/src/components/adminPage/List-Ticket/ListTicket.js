import React, { useState, useEffect } from 'react'
import MenuDashboard from './../MenuDashboard/MenuDasboard'
import {Redirect} from 'react-router'
import axios from 'axios'
import BodyListTicket from './BodyListTicket'
import {showLoading,SwalAlert} from './../../Alert/SwalAlert'
import {useDispatch} from 'react-redux'
const ListTicket = () => {
      const [loading,setLoading] = useState(true)
       const [Login,setLogin] = useState(true)
       const dispach = useDispatch()
       useEffect(()=>{
         const fetchData = async () => {
            const result = await axios.get("/admin/list-ticket")
            setLoading(false)
            if(!result.data){
                setLogin(false)
            }else{
              if(result.data.result === "false"){
                SwalAlert("error",result.data.message)
                return
              }
              else{
                 dispach({
                   type: "GET_ALL_TICKET",
                   playload: result.data.data
                 })
              }
              setLogin(true)

            }
         }
         fetchData()
       },[dispach])

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
            {loading ? showLoading(true) : (Login ? textAddTicket() : <Redirect to="/admin" />)}
  
           </>
        )
    
}
export default ListTicket
