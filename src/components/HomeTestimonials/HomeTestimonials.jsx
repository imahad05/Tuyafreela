import React, { useEffect, useState } from "react";
import "./HomeTestimonials.css";
import { assets } from "../../assets/assets";

const HomeTestimonials = () => {
  const [showTestimonial, setShowTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTestimonial((prevDiv) => (prevDiv + 1) % 3);
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial">
      <h1 className="testimonial-section-heading">
        Milhares de pessoas acreditam <br /> emnossos <span>FREELANCES</span>
      </h1>
      <div className="testimonial-container">
        <div className="quote">"</div>

        {showTestimonial === 0 && (
          <div className="testimonial-boxes">
            <img src={assets.profileAvatar} alt="" className="avatar" />
            <div className="testimonial-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <h3>Eduardo Lopes Realtech Produções</h3>
            </div>
          </div>
        )}
        {showTestimonial === 1 && (
          <div className="testimonial-boxes">
            <img src={assets.profileAvatar} alt="" className="avatar" />
            <div className="testimonial-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <h3>Eduardo Lopes Realtech Produções</h3>
            </div>
          </div>
        )}
        {showTestimonial === 2 && (
          <div className="testimonial-boxes">
            <img src={assets.profileAvatar} alt="" className="avatar" />
            <div className="testimonial-content">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <h3>Eduardo Lopes Realtech Produções</h3>
            </div>
          </div>
        )}

        <div className="testimonial-dots">
          <div
            className={`${showTestimonial === 0 ? "show-outline" : ""} dot`}
            onClick={() => setShowTestimonial(0)}
          ></div>
          <div
            className={`${showTestimonial === 1 ? "show-outline" : ""} dot`}
            onClick={() => setShowTestimonial(1)}
          ></div>
          <div
            className={`${showTestimonial === 2 ? "show-outline" : ""} dot`}
            onClick={() => setShowTestimonial(2)}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
