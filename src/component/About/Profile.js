import React, { useState } from "react";
import styles from "./about.module.css";

export default function Profile({ data }) {
  const [toggledIndexes, setToggledIndexes] = useState(
    Array(data.data.length).fill(false)
  );

  function handleclick(index) {
    setToggledIndexes((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  }
  return (
    <div className="row my-5">
      {data.data.map((ele, index) => {
        return (
          <div className="col-12 col-lg-4 text-center my-4">
            <img
              src={ele["avatar_url"]}
              className={`${styles.images} rounded-circle my-2 `}
            ></img>
            <h5>{ele["name"]}</h5>
            <p>{ele["position"]}</p>
            Bio
            <button
              style={{
                border: "none",
                marginLeft: "5px",
                backgroundColor: "white",
              }}
              onClick={() => handleclick(index)}
            >
              &#8964;
            </button>
            {toggledIndexes[index] && (
              <p className="mt-3">{ele["biography"]}</p>
            )}{" "}
          </div>
        );
      })}
    </div>
  );
}
