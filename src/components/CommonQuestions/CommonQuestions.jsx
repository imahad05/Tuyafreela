import React from "react";
import "./CommonQuestions.css";
import { assets } from "../../assets/assets";

const CommonQuestions = () => {
  return (
    <div className="questions">
      <div className="questions-container">
        <div className="questions-sidebar">
          <img src={assets.Circle} alt="" />

          <div className="question">
            <h5 className="purple">
              How much does it cost to <span>use Enjoy Tickets?</span>
            </h5>
          </div>
          <div className="question">
            <h5>Do i pay for a free event?</h5>
          </div>
          <div className="question">
            <h5>How to contact EnjoyTickets Support?</h5>
          </div>
          <div className="question">
            <h5>How to delete an event?</h5>
          </div>
          <div className="question">
            <h5>I did not receive my payout?</h5>
          </div>
          <div className="question">
            <h5>When do I get pay?</h5>
          </div>
        </div>

        <div className="questions-answers">
          <div className="answers">
            <h2>How much does it cost to use EnjoyTickets?</h2>
            <p>all the pricing information can be found here.</p>
          </div>
          <div className="answers">
            <h2>Do I pay for a free event?</h2>
            <p>No, it's completely free for free events.</p>
          </div>
          <div className="answers">
            <h2>How to contact EnjoyTickets Support?</h2>
            <p>
              if you have questions, please contact info@enjoytickets.co.uk to
              get in touck. We're more than happy to help.
            </p>
          </div>
          <div className="answers">
            <h2>How to delete an event?</h2>
            <p>
              if there are no completed orders, go to My Events page and click
              Delete on the Event Dashboard. if there are completed orders, you
              can refund paid orders and cancel or delete free orders to be able
              to delete the event.
            </p>
          </div>
          <div className="answers">
            <h2>I did not receive my payout?</h2>
            <p>
              your event didn't finish yet, bank details missing, the payout was
              returned due to bank details issue.
            </p>
          </div>
          <div className="answers">
            <h2>When do i get pay?</h2>
            <p>
              Payouts are transferred 5 working days after the event has taken
              place. you need to make sure your bank details are correct in your
              organiser profile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonQuestions;
