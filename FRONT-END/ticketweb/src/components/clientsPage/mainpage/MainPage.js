import React,{useEffect,useState} from 'react'
import {useDispatch} from 'react-redux'
import Header from './../Header'
import Footer from './../Footer'
import axios from 'axios'
import TicketInfoItem from './TicketInfoItem'
import {showLoading} from './../../Alert/SwalAlert'
const MainPage = () => {
    const [ticketData,setTicketData] = useState()
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()
    useEffect(() =>{
       const fetchData =async ()=>{
         try {
             let result = await axios.get("/list-ticket")
             if(result.data.result === "ok"){
                 setTicketData(result.data.data)
                 dispatch({
                     type:"GET_ALL_TICKET",
                     playload: result.data.data
                 })
                 setLoading(false)
             }
         } catch (error) {
             console.log(error)
         }
        }
        fetchData()
    },[dispatch])

    const showDataTicket = () => (
        <div>
        <Header />
        <div className="titleHead">
            <h1>Everything you need to sell tickets to your event online</h1>
        </div>
        <div className="container booktickets">
        {ticketData.map((ticketItem,key) => (<TicketInfoItem key={key} ticketData = {ticketItem} />))}
        </div>
        
        <Footer />
    </div>
    )
        return (
           <>
               {loading ? showLoading(true) : showDataTicket()}
           </>
        )
    }
export default MainPage
