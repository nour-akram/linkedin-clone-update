import { useDispatch, useSelector } from "react-redux";
import { SignInAPI } from "../../redux/actions";
import "./style.css";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";

const WelcomPage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userState.user);
    const navigate = useNavigate();

    console.log(user)
    useEffect(() => {
        if (user) {
            navigate("/home",{replace:true});
        }
    }, [user, navigate]); 

    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src="/Images/login-logo.svg" alt="not found" />
                </div>
                <div className="join">
                    <p>Join now</p>
                    <button>Sign In</button>
                </div>
            </div>
            <div className="section">
                <div className="hero">
                    <h1>Welcome to your professional community</h1>
                    <img src="/Images/login-hero.svg" alt="not found" />
                </div>
                <div className="google" onClick={() => dispatch(SignInAPI())}>
                    <img src="/Images/google.svg" alt="not found" />
                    Sign in with Google
                </div>
            </div>
        </>
    );
}

export default WelcomPage;
