import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Data collection</p>
          <p>Data privacy</p>
          <p>Data security</p>
          <p>Data management</p>
          <p> privacy policy</p>
          <p> privacy</p>
          <p>cookies</p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;