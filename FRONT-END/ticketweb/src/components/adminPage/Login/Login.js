import React, {useState, useEffect} from 'react';
import {SwalAlert} from './../../Alert/SwalAlert'
import { Redirect } from 'react-router';
// import { useDispatch, useSelector } from "react-redux";
// import {getLoginReducer} from './../../../reducer/index'
// import useResource from './../CheckLoginAdmi/CheckLogin'
import {showLoading} from './../../Alert/SwalAlert'
import axios from 'axios'
const Login =  () => {
   let name = React.createRef()
   let pass = React.createRef()
   const [isLogin,setLogin] = useState(false)
   const [loading,setLoading] = useState(true)
   const loginToAdmin = async (e) => {
    e.preventDefault()
 
    let username = name.value
    let password = pass.value
    let dataLogin = {
      username : username,
      password: password
    }
   
    try {
      let result =  await axios.post("/admin/login",dataLogin)
      console.log(result)
      if(!result.data.result){
        SwalAlert('error',result.data.message)
        setLogin(false)
        
      }
      else{
        SwalAlert('success',result.data.message)
        setLogin(true)
       
      }
     
    } catch (error) {
      
    }
   }
   useEffect( () => {
    const fetchData = async () => {
      const result = await axios.get("/admin")
      console.log(result.data)
      if(!result.data){
        setLogin(false)
        setLoading(false)
        return
      }else{
        setLogin(true)
        setLoading(false)
        return
      }
    }
    fetchData()
     
   },[])
  //  const dispatch = useDispatch();
  //  const { Get_Status_Login } = useSelector(state => ({
  //   ...state.getLoginReducer
  // }));

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios("/admin");
  //     dispatch({
  //       type: "GET_LOGIN",
  //       playload: result.data
  //     })
  //   };
  //   fetchData();
  // }, [dispatch]);

  const showData = () => {
    return (
      <>
         
      {isLogin ? <Redirect to="/admin/list-order" /> : null}
        <div className="wrapper bodyLogin fadeInDown">
          <div id="login">
            <div className="container">
              <div id="login-row" className="row justify-content-center align-items-center">
                <div id="login-column" className="col-md-6">
                  <div id="login-box" className="col-md-12">
                    <form id="login-form" className="form">
                      <h3 className="text-center text-info">Login Admin Dashboard</h3>
                      <div className="form-group">
                        <label htmlFor="username" className="text-info">Username:</label><br />
                        <input type="text" name="username" ref= {input => name = input} id="username" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password" className="text-info">Password:</label><br />
                        <input type="password" name="password" ref={input => pass = input} id="password" className="form-control" />
                      </div>
                      <div className="form-group">
                        <input type="submit" name="submit" onClick = {(e) => loginToAdmin(e)} className="btn btn-info btn-md" defaultValue="Đăng Nhập" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
    )
  }
        return (
         <>
         {loading ? showLoading(true) : showData()}
         </>
        );
    }

   
export default Login