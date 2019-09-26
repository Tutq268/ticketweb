import React,{useState,useEffect} from 'react';
import Header from './../Header'
import Footer from './../Footer'
import StepOrder from './../step-order/StepOrder'
import BodyQuestionForm from './BodyQuestionForm';
import {showLoading} from './../../Alert/SwalAlert'
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router'
import axios from 'axios'
const QuestionTicket = () => {
   const currentUrl = window.location.href
   const [loading,setLoading] = useState(true)
   const [checkUrl,setCheckUrl] = useState(true)
   const {ticketCurrent} = useSelector(state =>({...state.clientBookReducer}))
   useEffect(() => {
      const fetchData = async () =>{
          try {
            let result = await axios.get(currentUrl)
            setLoading(false)
            if(result.data.data === ticketCurrent.productCode){
                setCheckUrl(true)
                return
            }
            setCheckUrl(false)
          } catch (error) {
              setLoading(false)
              setCheckUrl(false)
          }
      }  
      fetchData()
   },[currentUrl,ticketCurrent])

   const showBodyQuestionForm =() =>(
    <div>
    <Header />
    <StepOrder color1="green" color2="green" />
     <BodyQuestionForm />
    <Footer />
    </div>
   )
        return (
           <>
           {loading ? showLoading(true): (checkUrl ? showBodyQuestionForm() : <Redirect to="/" />)}
           </>
        );
    }


export default QuestionTicket ;