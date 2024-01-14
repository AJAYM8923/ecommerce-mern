import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            SELL MART is a eccomerce application which is developed by myself for purchasing products online.
            The users can create their account in the website and buy their products as their wish.our website gives complete security to the users.The website is so userfriendly as anybody can create their account and use it.we are providing 24*7 assistance to the users if they are having any doubts or problems.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;