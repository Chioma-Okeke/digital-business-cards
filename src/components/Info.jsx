import React from "react";
import Headshot from "../images/headshot2.JPEG";
import Email from "../images/email.svg";
import LinkedIn from "../images/linkedIn.svg";

export default function Info() {
    return (
        <div className="info">
            <img className="headshot" src={Headshot} alt="Professional Headshot" />
            <h1>Chioma Okeke</h1>
            <p>Frontend Developer</p>
            <small className="website">chiomaokeke.website</small>
            <div className="buttons">
                <button className="email-button">
                    <img src={Email} />
                    Email
                </button>
                <button className="linkedIn-button">
                    <img src={LinkedIn} />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}