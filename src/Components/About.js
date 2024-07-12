import React from "react";
import njg from "../Images/njg.png";

const About = () => {
  return (
    <>
   
    <div className="container" style={{ padding: "64px 109px" }}>
    <h1 style={{margin:"0 371px 38px"}}>About Me</h1>
      <div class="row featurette">
        
        <div class="col-md-7 order-md-2">
          <p class="lead">
            Computer Science and Engineering student experienced in C, Java,
            HTML, CSS, and JavaScript, with practical skills in ReactJS, NodeJS,
            and MongoDB. Developed projects like a note-taking app, news
            aggregator, and text utility tool. Knowledgeable in object-oriented
            programming and databases. Seeking software development
            opportunities to apply programming skills.
          </p>
          <div style={{padding:"9px 247px"}}><button type="button" class="btn btn-outline-primary">Download Resume</button></div>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"'
            src={njg}
            alt=""
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
