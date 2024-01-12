import React from "react";
import Twitter from "../images/twitter.svg";
import Facebook from "../images/facebook.svg"
import Instagram from "../images/instagram.svg"
import Github from "../images/github.svg"

export default function Footer() {
    return (
        <footer>
            <div className="social-icons">
                <img src={Twitter} alt="twitter logo"/>
                <img src={Facebook} alt="facebook logo"/>
                <img src={Instagram} alt="instagram logo"/>
                <img src={Github} alt="github logo"/>
            </div>
        </footer>
    )
}