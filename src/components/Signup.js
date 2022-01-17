import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions'
import { useNavigate } from 'react-router';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';

const Signup = ({addUser}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = event => {
        event.preventDefault();
        addUser({
            email,
            password
        })
        navigate('/dashboard')
    }
    
    return (
        <>
        <h4>Sign-up for Chromeo's premier music discoverability features.</h4>
        <Form onSubmit={handleSubmit}>
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

            <Button type="submit" variant="contained" style={{ background: '#131F2B' }}>Sign-up</Button>
        </Form>
        </>
    )
}

export default connect(null, {addUser})(Signup);