import React from "react";
import '../assets/css/app.css';
import portrait from '../assets/imgs/loon.jpeg'

function AboutMe() {
  return (
    <section id="about-me" className="s">
      <div className="section-title">
        <h3>About Me</h3>
      </div>
      <div className="aboutme-image">
        <img src={portrait} alt='portrait' id="portrait-image"></img>
      </div>
      <div className="text">
        <p className="paragraph-text">
          My name is Benjamin (Ben) Gerner. I love skiing and climbing which is
          a big reason that I'm going to Boulder for school next year. I'm an
          NASM certified personal trainer and have gained a lot of experience in
          the fitness field through personal experience with different types of
          exercise including crossfit, powerlifting, bodybuilding, and
          sport-specific training. I have had cartilage damage in my right knee
          for about 4 years now, and have learned a lot about knee injuries and
          the recovery/ build up process through physical therapy and my own
          research. I am also adept at working with hurt shoulders, as I have
          had injuries to my biceps tendon and rotator cuff resulting from
          overuse with lifting, football, and water polo. I offer fully
          customized programs for any imaginable fitness goal. Furthermore, I
          have experience with several mental health/ fitness techniques
          including the Wim Hof Method and Tai Chi. Everything that a person
          does and every decision that they make stems from their mentality, and
          improving mental fitness is my number one goal with each one of my
          clients. I also like to play guitar and I code a little bit. Follow the link below to my website:
        </p>
        {/* <div id="wolf-kozlowski" className="paragraph-text">
          
Art by Blazej Kozlowski
                              __
                            .d$$b
                          .' TO$;\
                         /  : TP._;
                        / _.;  :Tb|
                       /   /   ;j$j
                   _.-"       d$$$$
                 .' ..       d$$$$;
                /  /P'      d$$$$P. |\
               /   "      .d$$$P' |\^"l
             .'           `T$P^"""""  :
         ._.'      _.'                ;
      `-.-".-'-' ._.       _.-"    .-"
    `.-" _____  ._              .-"
   -(.g$$$$$$$b.              .'
     ""^^T$$$P^)            .(:
       _/  -"  /.'         /:/;
    ._.'-'`-'  ")/         /;/;
 `-.-"..--""   " /         /  ;
.-" ..--""        -'          :
..--""--.-"         (\      .-(\
  ..--""              `-\(\/;`
    _.                      :
                            ;`-
                           :\
                           ;
          
        </div> */}
      </div>
      <a id="paragraph-link" href="https://gernerfitness.com/" target="_blank" rel="noreferrer">Gerner Fitness</a>
    </section>
  );
}

export default AboutMe
