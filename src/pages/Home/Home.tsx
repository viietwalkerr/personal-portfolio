import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Page from "../../components/Navbar/Page/Page";
import NeonButton from "../../components/NeonButton/NeonButton";
import "./Home.scss";

const Home: React.FC = () => {


    const navigate = useNavigate();

    return (
        <Page>
            <div className="home">
                <div className="main">
                    <div className="main__content">
                        <h1>HELLO,</h1>
                        <div className="description">
                            <p>
                                I am a Software Engineer from Brisbane, Australia.
                                I have professional experience in developing Web Applications
                                and Mobile Applications.
                            </p>
                            
                        </div>
                        {/* <div><Link to={"/wordle"}>Play Wordle!</Link></div> */}
                        <NeonButton onClick={() => navigate('/wordle')} label={"Play Wordle!"}/>
                    </div>
                </div>
                
            </div>
        </Page>
        
    )
}

export default Home;