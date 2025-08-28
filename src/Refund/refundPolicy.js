import React from "react";
import "./RefundPolicy.css";
import Header from "../Header/Header";

const RefundPolicy = () => {
  return (
    <div>
      <Header />
      <div className="refund-policy-container">
        <h1 className="refund-title">Refund Policy</h1>
        <p>
          At <strong>Bhimavaram Delicious Biryanis</strong>, we strive to ensure
          that every customer enjoys a satisfying dining experience, whether
          ordering online, dining in, or taking away. Our refund policy is
          designed to be fair and transparent.
        </p>

        <h2>1. Online Orders & Takeaway</h2>
        <p>
          If your order is incorrect, incomplete, or unsatisfactory, please
          contact us immediately at <strong>+91 9959788999</strong> or email us
          at <strong>delicious50biryanis@gmail.com</strong> within{" "}
          <strong>30 minutes</strong> of delivery or pickup. Refunds or
          replacements will be provided after verifying the issue.
        </p>

        <h2>2. Dine-In</h2>
        <p>
          For dine-in orders, if you find any problem with the food served,
          please inform our staff on the spot so we can address it immediately.
          Refunds are processed only if the concern is raised before consuming a
          major portion of the order.
        </p>

        <h2>3. Eligibility for Refunds</h2>
        <ul>
          <li>
            Order not delivered within the promised time (unless due to force
            majeure).
          </li>
          <li>Wrong item delivered.</li>
          <li>Food found to be spoiled or not meeting quality standards.</li>
        </ul>

        <h2>4. Non-Refundable Cases</h2>
        <ul>
          <li>Change of mind after placing the order.</li>
          <li>Delayed delivery due to customer unavailability.</li>
          <li>Food consumed more than half before raising the complaint.</li>
        </ul>

        <h2>5. Refund Method</h2>
        <p>
          Refunds will be processed to your original payment method within{" "}
          <strong>5-7 business days</strong>. In some cases, a store credit or
          coupon code may be issued for future use.
        </p>

        <p>
          By placing an order with us, you agree to our refund policy terms. We
          appreciate your understanding and support.
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
