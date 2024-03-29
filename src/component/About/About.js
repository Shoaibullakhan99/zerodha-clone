import React, { Profiler, useState } from "react";
import styles from "./about.module.css";
import Profile from "./Profile";

const jsondata = require("./executive.json");

export default function About() {
  const [data, setData] = useState(jsondata);
  return (
    <div className={`container ${styles.marginTop}`}>
      <div className="m-1 m-lg-5 text-center">
        <h1 className="m-1 m-lg-5 h2">
          We pioneered the discount broking model in India <br />
          Now, we are breaking ground with our technology
        </h1>
      </div>
      <hr />
      <div className="row m-5">
        <div className="col-12 col-lg-6">
          <p>
            We Kick-started operations on the 15th of August, 2010 with the goal
            of breaking all the barriers that traders and investor face in India
            in terms of cost, support and technology
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India interms of active retail
            clients.
          </p>
        </div>
        <div className="col-12 col-lg-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#">Rainmatter</a>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
        </div>
        <p>
          And yet, we are always up to something new every day. Catch up on the
          latest updates on our <a href="#">blog</a> or see what the media is{" "}
          <a href="#">saying about us</a>
        </p>
      </div>

      <div className="my-5 container">
        <h1 className="text-center my-5">People</h1>
        <div className="row my-5">
          <div className="col-12 col-lg-6 text-center">
            <img
              src="https://zerodha.com/static/images/nithin-kamath.jpg"
              className={`${styles.images} rounded-circle my-2`}
            ></img>
            <h5>Nithin Kamath</h5>
            <p>Founder, CEO</p>
          </div>
          <div className="col-12 col-lg-6">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking Industry.
            </p>
            <p>
              He was named one of the "Top 10 businessmen to Watch Out for in
              2016 in India" by The Economic times for pioneering and scaling
              broking in India.
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on <a href="#">TradingQnA</a> / <a href="#">Twitter</a>
            </p>
          </div>
        </div>
        <Profile data={data} />
      </div>
    </div>
  );
}
