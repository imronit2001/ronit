import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Home = () => {
    const typingStyle = {
        color: '#000046'
    };
    return (
        <>
            <section id="home" className="home">
                <div className="home1">
                    <img src="image/image_01.svg" alt="" />
                </div>
                <div className="home2">
                    <p className="hello">Hello ,</p>
                    <h1 className="blockquote">I am <span className="typing" style={typingStyle}>Ronit Singh</span></h1>
                    <p className="intro">
                        Web Developer and Competitive Coder</p>
                    <div className="social-link">
                        <Link to="https://en-gb.facebook.com/ronitsinghrajput.11/" target="_blank"><i
                            className="fa-brands fa-facebook"></i></Link>
                        <Link to="https://twitter.com/imronit1703" target="_blank"><i className="fa-brands fa-twitter"></i></Link>
                        <Link to="https://www.instagram.com/ronitsinghrajput7/" target="_blank"><i
                            className="fa-brands fa-instagram"></i></Link>
                        <Link to="https://www.linkedin.com/in/imronit/" target="_blank"><i className="fa-brands fa-linkedin"></i></Link>
                        <Link to="https://github.com/imronit2001" target="_blank"><i className="fa-brands fa-github"></i></Link>
                        <Link to="https://wa.me/7003622801" target="_blank"><i className="fa-brands fa-whatsapp"></i></Link>
                        <Link to="https://telegram.me/imRonit" target="_blank"><i className="fa-brands fa-telegram"></i></Link>
                        <Link to="mailto:ronitsingh7003@gmail.com" target="_blank"><i className="fa-brands fa-google"></i></Link>
                    </div>

                    {/* <button className="btn btn-primary m-3" onclick="window.location.replace('index.html#contact');">Get in
                        Touch &#8594;</button> */}

                    <Button className="m-3" variant="contained" disableElevation>
                        Get in Touch &#8594;
                    </Button>

                </div>
            </section>
        </>
    );
}

export default Home;