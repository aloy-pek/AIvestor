import "../pagecss/common.css";
import "../pagecss/landingpage.css";
import "../componentscss/buttoncontainercss/navigationbuttons.css";
import LogInsideBar from "../sidebar/loginsidebar.js";
import { CenterLoginButton } from "../components/buttons.js";

function LandingPage() {
    return (
        <div>
            <div><LogInsideBar/></div>

            <div className="content">
                <div className="lefttext-container">
                    <div id="lefttext">
                    <h1 id="welcome">Welcome to AIvestor</h1>
                    <p id="description">Your personal AI-powered financial advisor. Get personalized investment advice and insights.</p>
                    </div>
        
                    <div><CenterLoginButton/></div>
                </div>

                <div className="rightpicture-container">
                    <img src="https://picsum.photos/id/237/1000/1000" alt="" id="loginimage"/>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;