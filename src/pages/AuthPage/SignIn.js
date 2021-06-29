import React, { useRef, useState } from "react";
import "./AuthPage.css";
import { TextAnimation } from "../../components/TextAnimation/TextAnimation";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Form } from "react-bootstrap";
import { useAuth } from '../../context/AuthContext'
import Alert from '@material-ui/lab/Alert';
import { Link, useHistory } from "react-router-dom"



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 575,
  },
  pos: {
    marginLeft: 150,
    marginBottom: 10,
  },
  posbutton: {
    marginLeft: 160,
  },
}));

export function SignIn() {
  const classes = useStyles();

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()



  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    if(passwordRef.current.value.length && passwordConfirmRef.current.value.length <= 5){
      return setError("Password should be at least 6 characters")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
    }
    
      return (
    <div className="authpage">
      <div className="authpage--left">
        <div className="authpage--disc"></div>
        <div className="authpage--textanimation">
          <TextAnimation />
        </div>
      </div>
      <div className="authpage--right">
        <Card className="authpage--customCard">
          <CardContent>
          {error && <Alert variant="filled" severity="error">{error}</Alert>}
        

            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email Id"
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label></Form.Label>

                <Form.Control
                  type="password"
                  placeholder="Password Confirmation"
                  ref={passwordConfirmRef}
                  required
                />
              </Form.Group>
              <CardActions className={classes.posbutton}>
                <Button disabled={loading} variant="contained" color="secondary" type="submit">
                  Register
                </Button>
              </CardActions>
            </Form>
            <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
          </CardContent>
        </Card>

        
      </div>
    </div>
  );
}
