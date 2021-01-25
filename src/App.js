import React, { useState } from "react";
import "./App.css";
const photoUrls = [
  "https://images.unsplash.com/photo-1606029246036-7b352c188652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
  "https://images.unsplash.com/photo-1605798880248-2c77e7d552cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  "https://images.unsplash.com/photo-1605887235807-270eeaf0162e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=855&q=80",
];
function App() {
  const [photoNumber, setPhotoNumber] = useState({ counter: 0 });
  const showPreviousPicture = () => {
    if (photoNumber.counter <= 0) {
      setPhotoNumber({
        counter: photoUrls.length - 1,
      });
    } else {
      setPhotoNumber((prevState) => ({
        counter: prevState.counter--,
      }));
    }
  };
  const showNextPicture = () => {
    if (photoNumber.counter >= photoUrls.length - 1) {
      setPhotoNumber({
        counter: 0,
      });
    } else {
      setPhotoNumber((prevState) => ({
        counter: prevState.counter++,
      }));
    }
  };
  return (
    <div className="App">
      <div className="img-holder">
        <div className="img__arrows" onClick={showPreviousPicture}>
          previous
        </div>
        <img src={photoUrls[photoNumber.counter]} alt="dupa" />
        <div className="img__arrows" onClick={showNextPicture}>
          next
        </div>
      </div>
    </div>
  );
}

export default App;
