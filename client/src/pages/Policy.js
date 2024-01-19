import React from "react";
import Layout from "./../components/Layout/Layout";
import '../styles/PolicyStyles.css'
import privacy from "../utils/privacy-policy.jpg"

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus policy">
        <div className="col-md-6 ">
          <img
            src={privacy}
            alt="contactus"
            style={{ width: "100%", height: "24rem"}}
          />
        </div>
        <div className="col-md-4">
          <h6>1. Information We Collect</h6>
          <p>
            We collect various types of information to process your orders,
            improve your shopping experience, and communicate with you. This may
            include personal information such as name, email address, shipping
            address, and payment details.
          </p>

          <h6>2. How We Use Your Information</h6>
          <p>
            We use your information for order processing, shipping, and to
            communicate with you about your orders. We may also use it to send
            promotional offers, newsletters, and updates related to our products
            and services.
          </p>

          <h6>3. Payment Processing</h6>
          <p>
            We do not store credit card details on our servers. All payment
            transactions are processed securely through [payment gateway
            provider].
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
