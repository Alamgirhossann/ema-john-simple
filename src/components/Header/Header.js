import React, { useContext, useRef, useEffect } from 'react';
import logo from "../../images/logo.png";
import './Header.css';
import { useAuth } from '../LogIn/useAuth';
// import { UserContext } from '../../App';

const usePrev = value =>{
  const useref = useRef();
  useEffect(()=>{
    useref.current = value;
  },[value]);
  return useref.current;
}

const Header = () => {
 const auth = useAuth();
 console.log(auth.user);
    return (
        <div className="header">
          <img src={logo} alt=""/>
          <nav>
          <a href="/shop">Shop</a>
          <a href="/review">Order review</a>
          <a href="/inventory">Manage Inventory</a>
          {
           auth.user &&
           <span style ={{color:'yellow'}}>Welcome {auth.user.name}</span>
          
          }
          {
            auth.user ?    <a href = '/Login'>Sing Out</a>
            : <a href = '/Login'>Sing in</a>
          }
        </nav>
        </div>
      
    );
    

};

export default Header;
