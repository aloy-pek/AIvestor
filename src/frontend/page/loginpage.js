import "../pagecss/common.css";
import "../pagecss/loginpage.css";
import LoginSideBar from "../sidebar/loginsidebar.js";
import LoginForm from "../components/loginform.js";
import { Link, useLocation } from "react-router-dom";

function LoginPage() {
    const location = useLocation();
    const successfulRegistration = location.state?.successfulRegistration;
    return (
        <div className="login-page">
            <div><LoginSideBar /></div>

            <div className="login-container">
                {successfulRegistration && (<div id="successfulregistration">Successful Registration. Please Login.</div>) }

                <div className="login-form">
                    <h1 id="login-text">Login</h1>
                    <div><LoginForm /></div>
                    <p id="register">Don't have an account? <Link to="/registerpage">Register here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
