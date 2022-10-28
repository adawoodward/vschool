import React from "react"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer--icons">
                <span className="fa-stack fa-2x" id="facebook">
                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                    <i className="fa-brands fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
                <span className="fa-stack fa-2x" id="github">
                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                    <i className="fa-brands fa-github fa-stack-1x fa-inverse"></i>
                </span>
                <span className="fa-stack fa-2x" id="twitter">
                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                    <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
            </div>
            <p className="footer--copyright">Copyright © Your Website 2022</p>
        </div>
    )
}