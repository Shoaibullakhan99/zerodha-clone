import React from "react";
import styles from "./about.module.css";

export default function Profile({ data }) {
  return (
    <div className="row my-5">
      {data.data.map((ele) => {
        return (
          <div className="col-12 col-lg-4 text-center my-4">
            <img
              src={ele["avatar_url"]}
              className={`${styles.images} rounded-circle my-2 `}
            ></img>
            <h5>{ele["name"]}</h5>
            <p>{ele["position"]}</p>
          </div>
        );
      })}
    </div>
  );
}
