import React from "react";
import "../../App.css";

export default function Services() {
  return (
    <>
      <div className="services_container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <div class="section">
          <h1> We provide the following services</h1>
          <ul>
            <div className="scale-in-center">
              <li>PRECONSTRUCTURAL PLANNING </li>
              <li> GENERAL CONTRACTING</li>
              <li>VIRTUAL DESIGN </li>
              <li>SUSTAINABLE DESIGN </li>
              <li>GENERAL CONTRACTING </li>
              <li> MATERIAL SUPPLY</li>
              <li> RENOVATION</li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
