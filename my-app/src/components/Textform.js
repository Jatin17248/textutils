import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  let countChar = 0,
    countCons = 0;

  const convToUp = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Text Converted To UpperCase", "success");
  };
  const convToLow = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Text Converted To LowerCase", "success");
  };
  const changeValue = (event) => {
    setText(event.target.value);
    setIsHidden(false);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking", "success");
  };
  const reset = () => {
    let txtarea = document.getElementById("x1");
    txtarea.value = "";
    setText("");
    window.speechSynthesis.cancel();
    let con = document.getElementById("con");
    con.style.visibility = "hidden";
    let vow = document.getElementById("vow");
    vow.style.visibility = "hidden";
    setIsHidden(true);
    props.showAlert("Reset Successful", "warning");
  };
  const handleinverseclick = () => {
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
    props.showAlert("Text Inversed", "success");
  };
  const capitalise = () => {
    let newtextArr = text.split(" ");
    let finalTxtArr = [""];
    newtextArr.forEach((word) => {
      if (word !== " " && word !== "") {
        let abc = word[0].toUpperCase() + word.slice(1).toLowerCase();
        finalTxtArr.push(abc);
      }
    });
    let newtext = finalTxtArr.join(" ");
    setText(newtext);
    props.showAlert("Text Capitalised", "success");
  };
  const handleVoClick = () => {
    for (count = 0; count <= text.length; count++) {
      if (text.charAt(count).match(/[aeiouAEIOU]/)) {
        countChar++;
        setCount(countChar);
      }
    }
    let vow = document.getElementById("vow");
    vow.style.visibility = "visible";
    props.showAlert("Vowels Counted", "success");
  };

  // Function to count Consonants:
  const handleCoClick = () => {
    for (count1 = 0; count1 <= text.length; count1++) {
      if (
        text
          .charAt(count1)
          .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
      ) {
        countCons++;
        setCount1(countCons);
      }
    }
    let con = document.getElementById("con");
    con.style.visibility = "visible";
    props.showAlert("Consonants Counted", "success");
  };

  const copy = () => {
    var textarea = document.getElementById("x1");
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    props.showAlert("Text Copied To Clipboard!", "success");
    document.getSelection().removeAllRanges();
  };
  const copy1 = () => {
    var textarea = document.getElementById("x2");
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand("copy");
    props.showAlert("Text Copied To Clipboard!", "success");
  };

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={changeValue}
            id="x1"
            rows="9"
            placeholder="Enter Text Here"
            style={props.myStyle}
          ></textarea>
        </div>
        <button disabled={text.length===0} onClick={reset} className="btn btn-warning mx-2 my-2">
          Reset
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1" onClick={copy}>
          Copy
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1" onClick={convToUp}>
          UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={convToLow}>
          LowerCase
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1" onClick={capitalise}>
          Capitalise
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1" onClick={handleinverseclick}>
          INVERSE
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1" onClick={handleVoClick}>
          Count Vowels
        </button>
        <button  disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCoClick}>
          Count Consonants
        </button>

        <button disabled={text.length===0}  onClick={speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
      </div>

      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s/).filter((element) => {return element.length!=0}).length} words & {text.length} characters <br />
        </p>
        <div style={{ display: isHidden ? "none" : "block" }}>
          <p id="vow" style={{ visibility: "hidden" }}>
            {count} No. of Vowels
          </p>
          <p id="con" style={{ visibility: "hidden" }}>
            {" "}
            {count1} No. of Consonants
          </p>

          <textarea
            className="form-control"
            value={text}
            id="x2"
            rows="9"
            style={props.myStyle}
            readOnly
          ></textarea>
          <button className="btn btn-danger mx-1" onClick={copy1}>
            Copy
          </button>
        </div>
      </div>
    </>
  );
}
