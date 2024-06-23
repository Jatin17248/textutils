import React from "react";

function Alert(props) {
  const capitalise = (word1) => {
    let newtextArr = word1.split(" ");
    let finalTxtArr = [""];
    newtextArr.forEach((word) => {
      if (word !== " " && word !== "") {
        let abc = word[0].toUpperCase() + word.slice(1).toLowerCase();
        finalTxtArr.push(abc);
      }
    });
    let newtext = finalTxtArr.join(" ");
    return newtext;
  };
  return (
    <div style={{ height: '5vh'}}>{props.alert && (
     
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalise(props.alert.type)}:</strong> {props.alert.msg}
        </div>
      
    )}</div>
  );
}

export default Alert;
