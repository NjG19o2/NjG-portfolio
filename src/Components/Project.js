import React from "react";
import image1 from "../Images/image1.jpeg";
const Project = () => {
  return (
    <>
    
      <div className="container">
      <h2 style={{margin:"80px 550px 0"}}>My Projects</h2>
        <div className="row" style={{margin:"105px 0"}}>
          <div className="col-md-4" style={{padding:"0 76px 80px"}}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={image1} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-4" style={{padding:"0 76px 80px"}}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={image1} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-4" style={{padding:"0 76px 80px"}}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={image1} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-4" style={{padding:"0 76px 80px"}}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={image1} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-4" style={{padding:"0 76px 80px"}}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={image1} class="card-img-top" alt="..." />
            </div>
          </div>
          <div className="col-md-4" style={{padding:"0 76px 80px"}}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={image1} class="card-img-top" alt="..." />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Project;
