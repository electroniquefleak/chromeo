import { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import setToken from "../actions/setToken";

const LoggedIn = ({setToken}) => {
    let navigate = useNavigate();
    const params = useParams();
    const hash =  window.location.hash.split("=");
    const token = hash[1].split("&")[0];
    setToken(token)
    window.localStorage.setItem("token", token)
    useEffect(() => {
        navigate("/dashboard");
    }, [navigate, params])

    return null;
}

export default connect(null,{setToken})(LoggedIn);