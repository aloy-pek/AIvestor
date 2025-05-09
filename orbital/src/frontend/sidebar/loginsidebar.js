import "../pagecss/common.css";
import "../sidebarcss/loginsidebar.css";
import { HomeButton, AboutButton, LoginButton } from "../components/buttons.js";

function LoginSideBar() {
    return (
        <aside id="loginbar">
            <div className="loginsidebar-header">
                <div id="loginsidebar-title-container" className="loginsidebar-header-containers">
                    <div><HomeButton/></div>
                </div>
        
                <div id="loginsidebar-button-container" className="loginsidebar-header-containers">
                    <div><AboutButton/></div>
                    <div><LoginButton/></div>
                </div>
            </div>
        </aside>
    );
}

export default LoginSideBar;