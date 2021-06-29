import React, { useState, useEffect } from "react";
import './style.css'
import { lightTheme, darkTheme,GlobalStyles } from './theme'
import styled,{ ThemeProvider } from "styled-components"
import { NavBar } from './components/NavBar/NavBar'
import { SignIn } from './pages/AuthPage/SignIn'
import { AuthProvider } from  './context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRouter/PrivateRouter"
import { Dashboard } from './pages/Dashboard/Dashboard'
import { UpdateProfile } from './pages/Dashboard/UpdateProfile'
import { Login } from './pages/AuthPage/Login'
import { ForgotPassword } from './pages/Dashboard/ForgetPassword'


const StyledApp = styled.div``;

export function App() {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
    return (
        <>
        <Router>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
             <StyledApp>
             
              
             <AuthProvider>
                  <NavBar themeToggler={themeToggler} themeColor={theme} />
                  <Switch>
                    <PrivateRoute exact path ="/" component={Dashboard} />
                    <Route path="/signup" component={SignIn} />
                    <Route path="/login" component={Login} />
                    <Route path='/update-profile' component={UpdateProfile} />
                    <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
            </AuthProvider>
             </StyledApp>
        </ThemeProvider>
        </Router>
        </>
    )
}
