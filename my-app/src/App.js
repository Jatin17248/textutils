import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [myStyle, setMyStyle] = useState({
    color: "#171717",
    backgroundColor: "white",
  });
  
  document.body.style.backgroundColor = myStyle.backgroundColor;
  document.body.style.color = myStyle.color;
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleDark = () => {
    if (myStyle.color === "#171717") {
      setMyStyle({
        backgroundColor: "#171717",
        color: "white",
      });
      setMode("dark");
    } else {
      setMyStyle({ backgroundColor: "white", color: "#171717" });
      setMode("light");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="FirstReact"
          flink="Home"
          mode={mode}
          toggleDark={toggleDark}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/about"
            element={<About myStyle={myStyle} />}/>
          
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text you want to analyse"
                myStyle={myStyle}
                showAlert={showAlert} />}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
