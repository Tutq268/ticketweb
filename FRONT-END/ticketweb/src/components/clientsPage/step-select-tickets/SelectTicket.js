import React,{useState,useEffect} from 'react'
import Header from './../Header'
import Footer from './../Footer'
import StepOrder from './../step-order/StepOrder'
import BodyCart from './BodyCart'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Redirect} from 'react-router'
import {showLoading} from './../../Alert/SwalAlert'
const SelectTicket = () => {
   const {ticketCurrent} = useSelector(state => ({...state.clientBookReducer}))
   const [checkUrl,setCheckUrl] = useState(true)
   const [loading,setLoading] = useState(true)
   const currentHref = window.location.href
   useEffect(() => {
    const fetchData = async () => {
        let currentProductCode = ticketCurrent.productCode
        try {
            let result = await axios.get(currentHref)
            if(result.data.result === "ok"){
                setLoading(false)
                if(result.data.data === currentProductCode){
                    return
                }
                setCheckUrl(false)
            }
        } catch (error) {
        }
    }
    fetchData()
   },[currentHref,ticketCurrent])
   
   const showSelectTicket = () => (
            <div>
                <Header />
                <StepOrder color1="green" />
                <BodyCart/>
                <Footer />
            </div>
   )
        return (
            <>
            {loading ? showLoading(true) : (checkUrl ? showSelectTicket() : <Redirect to="/" />)}
            </>
        )
    }
export default SelectTicket
