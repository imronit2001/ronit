import React from "react";
const About = () => {
    const anchorClass = {
        textDecoration: 'none',
        color: '#black'
    };
    const anchorClass2 = {
        textDecoration: 'none',
        color: '#000046'
    };
    return (
        <>
            <section id="about" className="about bg-light">
                <div className="about1" data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
                    <div className="about1-div1">
                        <h1 className="blockquote">Hello! I am Ronit Singh.</h1>
                        <p>I'm a Full Stack Web Developer. <br/> I'm currently working as a PHP Developer at a fintech startup
                            called <a href="https://mitrafintech.com/" target="_blank"
                                style={anchorClass2}><strong>Mitra Fintech</strong>
                            </a>. <br/>
                                I am passionate about Web Development. I am a quick learner and a team worker that gets
                                the job done within the deadline. Always
                                ready to learn new technologies. I have strong command in Programming Languages with OOPS and DSA.
                            </p>
                        </div>
                            <div className="about1-div2">
                                <div className="d-flex">
                                    <div className="left">Email Id : </div>
                                    <div className="right "><a href="mailto:ronitsingh7003@gmail.com"
                                        style={{ anchorClass }}>ronitsingh7003@gmail.com</a></div>
                                </div>
                                <div className="d-flex">
                                    <div className="left">Mobile No : </div>
                                    <div className="right "><a href="tel:+917003622801" style={{ anchorClass }}>+91
                                        7003622801</a></div>
                                </div>
                                <div className="d-flex">
                                    <div className="left">Address : </div>
                                    <div className="right "><a
                                        href="https://www.google.com/maps/place/Jagaddal/@22.8594018,88.3918455,14.99z/data=!4m5!3m4!1s0x39f89129c115fff3:0x2a55321a1dfcdb03!8m2!3d22.8507577!4d88.3949067"
                                        target="_blank" style={{ anchorClass }}>Jagadal, Kolkata</a></div>
                                </div>
                                <div className="d-flex">
                                    <div className="left">Status : </div>
                                    <div className="right ">Unvailable</div>
                                </div>
                            </div>
                    </div>
                    <div className="about2">
                        <div className="about2-div" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50"
                            data-aos-duration="1000">
                            <img src="ronit/ronit_profile.jpg" alt="" data-aos="zoom-in-up" data-aos-offset="200"
                                data-aos-delay="50" data-aos-duration="1000" />
                            <h1 className="blockquote text-center m-2">Bachelor of Computer Application</h1>
                            <p className="blockquote text-center">Techno India Hooghly <br /> [2019-2022]</p>
                            <p className="blockquote text-center"><a href="Ronit_Singh_CV.pdf"
                                style={{ anchorClass }} target="_blank"><button
                                    className="btn btn-primary">View Resume</button></a></p>

                        </div>
                    </div>
            </section>
        </>
    );
}
export default About;