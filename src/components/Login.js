import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { loginUser } from '../actions/userActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import { Button } from '@mui/material';
import { positions } from '@mui/system';


const Login = ({ loginUser }) => {
        const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const handleSubmit = event => {
            event.preventDefault();
            loginUser({
                email,
                password
            })
            navigate('/dashboard')
        }
    
    return (
        <>
        <Form className="loginForm" onSubmit={handleSubmit}>
            <h4>Log-in to use Chromeo's premier music discoverability features.</h4>
            <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    <FormHelperText id="my-helper-text">We'll never share your password.</FormHelperText>
            </FormControl><br/>

            <Button className="formBtn1" type="submit" variant="contained" style={{ background: '#131F2B' }}>Login</Button>
        </Form>
        </>
    )
}

export default connect(null, {loginUser})(Login);