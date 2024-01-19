import React from "react";
import Layout from "./../components/Layout/Layout";
import team from "../utils/team.jpg"
import '../styles/AboutStyles.css'

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className=" about row contactus ">
        <div className="team col-md-6 ">
          <img
            src={team}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="about-text text-justify mt-2">
          Greetings! We are a dynamic team of four passionate college students, driven by a shared commitment to learning, innovation, and collaboration. Our diverse backgrounds and areas of expertise converge to create a harmonious blend of skills, allowing us to tackle challenges with a multifaceted approach. As aspiring professionals in our respective fields, we bring a wealth of fresh perspectives and an eagerness to make a positive impact. Together, we thrive on the exchange of ideas, pushing the boundaries of our knowledge to achieve collective success. Join us on our journey as we navigate the exciting landscape of academia, continually evolving and growing as a team.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
