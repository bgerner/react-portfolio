import React from "react";

function Portfolio() {
  return (
    <section id="work" className="s">
        <div className="section-title">
            <h3 id="work-title">Work</h3>
        </div>

        <div className="applications">
            <div>
                <figure>
                    <a href="https://www.gernerfitness.com" target="_blank"><img id="application1"
                            src="./assets/imgs/gerner-fitness.png" />
                        <figcaption>Gerner Fitness</figcaption>
                    </a>
                </figure>
            </div>
            <div>
                <figure>
                    <a href="https://github.com/costanza13/cool-california/" target="_blank"><img className="application"
                            src="./assets/imgs/cool-california.png" />
                        <figcaption>Cool California</figcaption>
                    </a>
                </figure>
                <figure>
                    <a href="https://github.com/bgerner/tech-share/" target="_blank"><img className="application"
                            src="./assets/imgs/tech-share.png" />
                        <figcaption>Tech Share</figcaption>
                    </a>
                </figure>
            </div>
            <div>
                <figure>
                    <a href="https://github.com/bgerner/work-day-scheduler/" target="_blank"><img className="application"
                            src="./assets/imgs/work-day-scheduler.png" />
                        <figcaption>Work Day Scheduler</figcaption>
                    </a>
                </figure>
                <figure>
                    <a href="https://github.com/bgerner/weather-dashboard/" target="_blank"><img className="application"
                            src="./assets/imgs/weather-dashboard.png" />
                        <figcaption>Weather Dashboard</figcaption>
                    </a>
                </figure>
            </div>
        </div>

    </section>
  );
}

export default Portfolio
