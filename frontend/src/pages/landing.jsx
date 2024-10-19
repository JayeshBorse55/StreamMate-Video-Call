import React from "react";
import "../App.css";
import {Link, useNavigate} from "react-router-dom";

function LandingPage() {

    const routeTo = useNavigate();

    return ( 
        <div className="LandingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2 style={{color:"white"}}>StreamMate Video Call</h2>
                </div>

                <div style={{color:"white"}} className="navlist">
                    <p onClick={()=>{
                        routeTo('/hbsdo');
                    }}>Join as Guest</p>
                    <p onClick={()=>{routeTo("/auth")}}>Register</p>
                    <div role="button" onClick={()=>{routeTo("/auth")}}>Login</div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#FF9839"}}>Connect</span> <span style={{color:"white"}}>with your<br/> Loved Ones</span></h1>
                    <p>Cover a distance by StreamMate Video Call</p>
                    <div role="button">
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>

                <div>
                    <img src="/mobile.png"/>
                </div>
            </div>
        </div>
     );
}

export default LandingPage;