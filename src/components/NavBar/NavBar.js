import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import FaceIcon from '@material-ui/icons/Face';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import { useAuth } from '../../context/AuthContext'
import { Link, useHistory } from "react-router-dom"
import './NavBar.css'

export function NavBar(props) {
    const [clicked, setClicked] = useState(false)
    const { themeColor, themeToggler } = props
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()
  
    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("Failed to log out")
      }
    }


    const handleClick = () => {
        console.log('Clicked')
        // if(MenuItems.length > 0){
        setClicked({clicked: !clicked})
    // }
    }
    return (

        <div>
            <div className={themeColor ==='light' ? 'navbar--items' :' navbar--items__dark' }>
                <h1 className="navbar--items__logo"><FaceIcon /></h1>
                    <div className="navbar--items__menuicon" onClick={handleClick}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        {clicked ? <CloseIcon style={{fill: "#fff"}}/> : <MenuIcon style={{fill: "#fff"}}/>}
                    </IconButton>
                    </div>
                    <ul className={clicked ? `navbar--items__menu_${themeColor} active` : `navbar--items__menu_${themeColor}`}>
                        {currentUser ? MenuItems.map((item, index)=>(
                            
                        <li key={index}>
                            <Link className= {item.cName} to={item.url}>
                                {item.title}
                            </Link>
                        </li> 
                        )): <li></li>}
                    </ul>
                    {currentUser ?  <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button> : '' }
                   
                    <label className="switch" >
                        <input type="checkbox" onClick={themeToggler} />
                        <span className="slider round"></span>
                    </label>
            </div>
        </div>
    )
}


