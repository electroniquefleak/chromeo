import { useEffect } from 'react'
import { connect } from "react-redux"
import { useParams, useNavigate } from "react-router-dom";
import setToken from "../actions/setToken";

const LoggedIn = ({setToken}) => {
    let navigate = useNavigate();
    const params = useParams();
    const token = params.id
    setToken(token)
    useEffect(() => {
        // consider pointing the token in localStorage: window.localStorage.setItem('token', token)
        navigate("/dashboard");
    }, [navigate])

    return null;
}

export default connect(null,{setToken})(LoggedIn);