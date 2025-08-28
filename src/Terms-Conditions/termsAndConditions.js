import React from "react";
import Header from "../Header/Header";
import "../Refund/RefundPolicy.css"; 

const TermsAndConditions = () => {
  return (
    <div>
      <Header />
      <div className="refund-policy-container">
        <h1 className="refund-title">Terms and Conditions</h1>

        <p>
          Welcome to <strong>Bhimavaram Delicious Biryanis</strong>. These Terms and Conditions govern your use
          of our services, including dining, takeaway, and online food delivery.
          By accessing or using our services, you agree to be bound by these Terms.
        </p>

        <h2>1. Service Scope</h2>
        <ul>
          <li>
            <strong>Dine-in:</strong> Seating is subject to availability. Customers are expected to maintain decorum and hygiene inside the premises.
          </li>
          <li>
            <strong>Takeaway:</strong> Orders must be placed via our website/app or in person. Estimated preparation time will be communicated upon ordering.
          </li>
          <li>
            <strong>Online Delivery:</strong> We deliver within selected areas. Delivery time is estimated and may vary due to external conditions.
          </li>
        </ul>

        <h2>2. Orders and Payments</h2>
        <ul>
          <li>All orders are subject to availability and confirmation.</li>
          <li>Prices are inclusive of applicable taxes unless stated otherwise.</li>
          <li>Payments can be made via online methods (UPI, cards, wallets) or cash on delivery (if available).</li>
        </ul>

        <h2>3. Cancellations and Refunds</h2>
        <ul>
          <li>Orders once placed cannot be cancelled after preparation has started.</li>
          <li>Refunds will only be initiated if the order is cancelled before preparation or due to restaurant-side issues.</li>
          <li>Refunds will be processed within 5–7 business days to the original payment method.</li>
        </ul>

        <h2>4. Food Quality and Allergies</h2>
        <ul>
          <li>We strive to maintain the highest standards of food safety and hygiene.</li>
          <li>Customers must inform us about any food allergies while placing the order.</li>
          <li>We are not liable for allergic reactions due to undisclosed allergies.</li>
        </ul>

        <h2>5. Delivery Terms</h2>
        <ul>
          <li>Delivery is available within specific geographic limits only.</li>
          <li>Delays due to traffic, weather, or unforeseen circumstances will be communicated.</li>
          <li>In case of failed delivery due to customer unavailability, no refund will be processed.</li>
        </ul>

        <h2>6. User Conduct</h2>
        <ul>
          <li>Customers must provide accurate information during ordering.</li>
          <li>Abuse or misconduct toward our staff will not be tolerated.</li>
          <li>We reserve the right to refuse service at our discretion.</li>
        </ul>

        <h2>7. Modifications</h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time.
          Changes will be updated on this page and are effective immediately upon posting.
        </p>

        <h2>8. Contact</h2>
        <p>
          For questions or concerns related to these terms, please contact us at <strong>+91 9959788999</strong>.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
