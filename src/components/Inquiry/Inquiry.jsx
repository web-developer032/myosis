import React, { useRef } from "react";

import emailIcon from "../../assets/icons/email.png";
import chatIcon from "../../assets/icons/chat.png";
import copyIcon from "../../assets/icons/copy.png";
import tickIcon from "../../assets/icons/tick.png";
import instagramQR from "../../assets/icons/ig-qr.jpg";
import lineQR from "../../assets/icons/line-qr.jpg";

import "./Inquiry.css";

function Inquiry() {
    const clipIconRef = useRef();
    const handleCopyEmail = (e) => {
        const email = "info@myosis.com";
        navigator.clipboard.writeText(email);
        if (e.target.firstChild) {
            e.target.classList.add("active");
            e.target.firstChild.textContent = "Copied!";
            clipIconRef.current.src = tickIcon;
        } else {
            e.target.parentElement.classList.add("active");
            e.target.parentElement.firstChild.textContent = "Copied!";
            clipIconRef.current.src = tickIcon;
        }
    };
    return (
        <section className="container container-small">
            <section className="contact">
                <div className="email">
                    <figure className="lg-icon">
                        <img src={emailIcon} alt="email icon" style={{ marginBottom: "1.7rem" }} />
                        <figcaption>Email</figcaption>
                    </figure>

                    <button className="copy" onClick={handleCopyEmail}>
                        Copy email address to clipboard{" "}
                        <img ref={clipIconRef} src={copyIcon} alt="copy icon" />
                    </button>

                    <form action="#">
                        <h2>Email Forum</h2>

                        <input type="text" name="name" id="c-name" placeholder="Your Name" />
                        <input type="email" name="email" id="c-email" placeholder="Your Email" />
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                        ></textarea>

                        <div className="send-copy">
                            <input type="checkbox" name="copy" id="copy" />
                            <label htmlFor="copy">Send me a copy</label>
                        </div>

                        <button className="btn">SEND</button>
                    </form>
                </div>

                <div className="chat">
                    <figure className="lg-icon">
                        <img src={chatIcon} alt="chat icon" />
                    </figure>

                    <figure className="qr-img">
                        <figcaption>Line</figcaption>
                        <img src={lineQR} alt="line QR code" />
                    </figure>

                    <figure className="qr-img">
                        <figcaption>Instagram</figcaption>
                        <img src={instagramQR} alt="instagram QR code" />
                    </figure>
                </div>
            </section>

            <footer>
                <div>
                    Our production facilities and services are located in
                    <address> Thailand, Bangkok</address> <br />
                    For studio visitations please contact us directly through email or messenger
                </div>
            </footer>
        </section>
    );
}

export default Inquiry;
