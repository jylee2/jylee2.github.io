const App = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark classNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="#home">
                            <i className="fa fa-home" aria-hidden="true"></i> Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* <div className="classBgText">
                Tasmania <i class="fa fa-copyright" aria-hidden="true"></i> 2016 Jun
            </div> */}
        
            <section id="home" className="container classDivCenter classHomeSection">
                <h1 id="home-title" className="classHomeHeader">Hello, I am a Web Developer.</h1>
                <p id="home-description" className="classHomeText">Jun Yi Lee</p>
            </section>
        
            <section id="projects" className="classDivCenter classProjectsSection">
               {/*<h1 id="work" className="classSectionHeader">Work</h1>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card-deck classCardDeck classProjectContainer">
                            <a className="card text-center classCardShadow classCardSize" href="https://jylee2.github.io/login-page/" target="_blank">
                                <img className="card-img-top classCardImgHover" src="images/agmo-studio-01-square.png" alt="login-page"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">Responsive Login Page</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>*/}
                <h1 id="personal-projects" className="classSectionHeader classPersonalProjects">Personal Projects</h1>
                <div className="row">
                    {/* .col-xl- ≥1200px */}
                    <div className="col-xl-2"></div>
                    <div className="col-xl-8">
                        <div className="card-deck classCardDeck">
                            <a className="card text-center classCardShadow" href="https://whac-a-mole.jylee3.repl.co/" target="_blank">
                                <img className="card-img-top" src="images/whac-a-mole-01-square.png" alt="whac-a-mole"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; React.js /&#62;
                                        <br/>
                                        &#60; Node.js /&#62;
                                        <br/>
                                        &#60; Express /&#62;
                                        <br/>
                                        &#60; MongoDB /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">Whac-A-Mole Game</p>
                                </div>
                            </a>
                            <a className="card text-center classCardShadow" href="https://exercise-tracker-project.jylee3.repl.co/" target="_blank">
                                <img className="card-img-top" src="images/exercise-tracker-01-square.png" alt="exercise-tracker"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; Node.js /&#62;
                                        <br/>
                                        &#60; Express /&#62;
                                        <br/>
                                        &#60; MongoDB /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">Exercise Tracker</p>
                                </div>
                            </a>
                            <a className="card text-center classCardShadow" href="https://file-metadata.jylee3.repl.co/" target="_blank">
                                <img className="card-img-top" src="images/file-metadata-01-square.png" alt="file-metadata-microservice"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; Node.js /&#62;
                                        <br/>
                                        &#60; Express /&#62;
                                        <br/>
                                        &#60; Multer /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">File Metadata Microservice</p>
                                </div>
                            </a>
                        </div>
                        <br/>
                        <div className="card-deck classCardDeck">
                            <a className="card text-center classCardShadow" href="https://jylee2.github.io/javascript-calculator/" target="_blank">
                                <img className="card-img-top" src="images/js-calculator-01-square.png" alt="calculator"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; React.js /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">JavaScript Calculator</p>
                                </div>
                            </a>
                            <a className="card text-center classCardShadow" href="https://jylee2.github.io/25-5-clock/" target="_blank">
                                <img className="card-img-top" src="images/pomodoro-clock-square.png" alt="pomodoro-clock"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; React.js /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">Pomodoro Clock</p>
                                </div>
                            </a>
                            <a className="card text-center classCardShadow" href="https://jylee2.github.io/choropleth-map/" target="_blank">
                                <img className="card-img-top" src="images/Choropleth-Map-01-square.png" alt="choropleth-map"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; D3.js /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">Choropleth Map</p>
                                </div>
                            </a>
                        </div>
                        <br/>
                        <div className="card-deck classCardDeck">
                            <a className="card text-center classCardShadow" href="https://jylee2.github.io/fcc-random-quote-machine/" target="_blank">
                                <img className="card-img-top" src="images/random-quote-machine-01-square.png" alt="random-quote-generator"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; React.js /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">Random Quote Machine</p>
                                </div>
                            </a>
                            <a className="card text-center classCardShadow" href="https://jylee2.github.io/drum-machine/" target="_blank">
                                <img className="card-img-top" src="images/drum-machine-01-square.png" alt="drum-machine"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; React.js /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">Drum Machine</p>
                                </div>
                            </a>
                            <a className="card text-center classCardShadow" href="https://jylee2.github.io/scatterplot-graph/" target="_blank">
                                <img className="card-img-top" src="images/scatterplot-01-square.png" alt="scatterplot"/>
                                <div className="classCardImgHoverDiv">
                                    <div className="classCardImgHoverText">
                                        &#60; Bootstrap /&#62;
                                        <br/>
                                        &#60; D3.js /&#62;
                                    </div>
                                </div>
                                <div className="card-body classDivCenter classCardText">
                                    <p className="card-title">Scatterplot Graph</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-2"></div>
                </div>
            </section>

            <section id="skills" className="classDivCenter classSkillsSection">
                <div className="classBgSkillsImg"></div>
                <div className="classSkillsContent">
                    <h1 className="classSkillsHeader">Skills</h1>
                    <div className="classSkillsText">
                        HTML &middot; CSS &middot; JavaScript &middot; Bootstrap &middot; React.js &middot; D3.js &middot; GraphQL &middot; Node.js &middot; Express &middot; MongoDB
                    </div>
                    <div className="classSkillsText">
                        Research &middot; Computational Fluid Dynamics &middot; MATLAB
                    </div>
                </div>
            </section>
        
            <section id="contact" className="classDivCenter classContactSection">
                <h1 className="classSectionHeader">Profiles and Contact</h1>
                <div className="row classContactItems">
                    <a href="https://linkedin.com/in/leejunyi" target="_blank" >
                            <button className="btn btn-lg btn-block classContactBtn"><i class="fab fa-linkedin" aria-hidden="true"></i> LinkedIn</button>
                    </a>
                    <a href="mailto:jylee.blog@gmail.com" target="_blank" >
                        <button className="btn btn-lg btn-block classContactBtn"><i class="fa fa-envelope" aria-hidden="true"></i> Email</button>
                    </a>
                    <a href="https://github.com/jylee2" target="_blank" >
                        <button className="btn btn-lg btn-block classContactBtn"><i class="fab fa-github" aria-hidden="true"></i> GitHub</button>
                    </a>
                    {/*<a href="https://www.freecodecamp.org/jylee" target="_blank" >
                        <button className="btn btn-lg btn-block classContactBtn"><i class="fab fa-free-code-camp"></i> freeCodeCamp</button>
                    </a>*/}
                </div>
                <div className="row classContactItems">
                    <a href="https://scholar.google.com/citations?user=k6YhcbUAAAAJ&hl=en" target="_blank" >
                        <button className="btn btn-lg btn-block classContactBtn"><i class="fa fa-book" aria-hidden="true"></i> Google Scholar</button>
                    </a>
                    {/*<a href="https://www.youtube.com/channel/UCgZgJ73743xLn5ZzijlM6_g" target="_blank" >
                        <button className="btn btn-lg btn-block classContactBtn"><i class="fab fa-youtube" aria-hidden="true"></i> YouTube</button>
                    </a>*/}
                    <a href="https://jyleeblogging.wordpress.com/" target="_blank" >
                        <button className="btn btn-lg btn-block classContactBtn"><i class="fa fa-bold" aria-hidden="true"></i> Blog</button>
                    </a>
                </div>
            </section>
        
            <footer className="bg-dark classDivCenter classFooterSection">
                <p><i class="fa fa-copyright" aria-hidden="true"></i> <span id="footer-date"></span> Jun</p>
            </footer>
        </div>
    );

};
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement)

// Use current year at footer
const setFooterDate = () => {
    const currentYear = new Date().getFullYear();
    //console.log(`The year is ${currentYear}`);
    const footerDate = document.getElementById("footer-date");
    footerDate.innerHTML = currentYear;
};
setFooterDate();
