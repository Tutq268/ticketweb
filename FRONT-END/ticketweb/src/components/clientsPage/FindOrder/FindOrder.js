import React from 'react'
import BodyFindOrder from './BodyFindOrder'
import SearchOrder from './SearchOrder'
import Header from './../Header'
import {useSelector} from 'react-redux'
import Footer from './../Footer'
const FindOrder = () =>{

    const {statusCheck} = useSelector(state => ({...state.clientBookReducer}))
  return (
      <div>
            <Header />
            <SearchOrder />
            {statusCheck ? <BodyFindOrder /> : null}
            <Footer />
      </div>
   
  )
}
export default FindOrder