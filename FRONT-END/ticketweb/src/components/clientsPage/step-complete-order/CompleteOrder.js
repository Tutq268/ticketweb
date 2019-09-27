import React, {useState,useEffect} from 'react';
import Header from './../Header'
import Footer from './../Footer'
import StepOrder from './../step-order/StepOrder'
import BodyComplete from './BodyComplete'
import {showLoading} from './../../Alert/SwalAlert'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router'
import axios from 'axios'
const CompleteOrder = () => {
    const [loading,setLoading] = useState(true)
    const [check,setCheck] = useState(true)
    const {ticketCurrent} = useSelector(state => ({...state.clientBookReducer}))
   const currentPath = window.location.href
   console.log(currentPath)
    useEffect(()=> {
        const fetchData = async () => {
          try {
                setLoading(false)
              let result = await axios.get(currentPath)
              if(result.data.data === ticketCurrent.productCode){
                  setCheck(true)
                  return
              }
              setCheck(false)
              return
          } catch (error) {
              console.log(error)
              setCheck(false)
              setLoading(false)
          }
        }
        fetchData()
    },[currentPath,ticketCurrent])


    const showCompleteOrder = () => (
        <div>
        <Header />
        <StepOrder color1="green" color2="green" color3="green" s/>
        <BodyComplete />
        <Footer />
        </div>
    )
        return (
           <>
           {loading ? showLoading(true) : (check ? showCompleteOrder() : <Redirect to="/"/>)}
           </>
        );
    }

export default CompleteOrder;