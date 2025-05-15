import React from 'react';
// If you want to use Next.js Image optimization, uncomment the next line and update image imports accordingly
// import Image from 'next/image';

const HomePage = () => {
    return (
        <main>
            <section id="header">
                <div className="container">
                    <nav>
                        <ul id="sidemenu">
                            <li><a href="#header">HOME</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#projects">PROJECT</a></li>
                            <li><a href="#contact">CONTACT</a></li>
                        </ul>
                        {/* Menu icon functionality can be added later */}
                        <i className="fas fa-bars"></i>
                    </nav>
                    <div className="header-text">
                        <p>Software Engineering Student</p>
                        <h1>
                            Hi, I'm <span>Gour</span> <br /> Gupal Talukder Shawon
                        </h1>
                    </div>
                    <div className="box">
                        <div className="content">
                            {/* Use next/image if configured, else use img */}
                            <img src="/Images/profile2.jpg" alt="Profile" />
                            {/* Example with next/image:
                            <Image src="/Images/profile2.jpg" alt="Profile" width={200} height={200} />
                            */}
                        </div>
                    </div>
                </div>
            </section>

            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="about-col-1">
                            <img src="/Images/user1.png" alt="About Me" />
                            {/* Example with next/image:
                            <Image src="/Images/user1.png" alt="About Me" width={200} height={200} />
                            */}
                        </div>
                        <div className="about-col-2">
                            <h1 className="sub-title">About Me</h1>
                            <p>
                                I'm a third-year Software Engineering student with a passion for Flutter app development.
                                Optimistic and enthusiastic, I thrive on solving problems and embrace teamwork.
                                Continuously learning through university courses, I also enjoy playing guitar, creating music,
                                and occasionally indulging in football. With a commitment to innovation and collaboration,
                                I'm dedicated to pushing boundaries and shaping a brighter future through technology.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional sections for projects and contact can be added here */}
        </main>
    );
};

export default HomePage;