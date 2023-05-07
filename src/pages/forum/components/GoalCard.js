import React, { useState } from "react";

import "./TopicCard.css";

function GoalCard(props) {
  const [message, setMessage] = useState(props.chatLineTunnel);

  let newNumber = Math.random();
  let currentDate = new Date();
  let day = currentDate.getDate();
  let dayString = day.toString();
  let month = currentDate.getMonth() + 1;
  let monthString = month.toString();
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours().toString();
  let minutes = currentDate.getMinutes();
  let minutesString = minutes.toString();

  if (minutesString.length < 2) {
    minutes = "0" + minutes;
  }

  if (monthString.length < 2) {
    month = "0" + month;
  }

  if (dayString.length < 2) {
    day = "0" + day;
  }

  let formattedDate = `${hours}:${minutes}h, ${day}.${month}.${year}`;

  const [inputMessage, setInputMessage] = useState("");
  const [inputStyle, setInputStyle] = useState("forum-input");
  const [placeHolder, setPlaceHolder] = useState(
    "Insert your message to the community."
  );
  const [addBtnStyle, setAddBtnStyle] = useState("add-btn");

  function messageListener(e) {
    let inputMessage = e.target.value;
    setInputMessage(inputMessage);
    setPlaceHolder("Insert your message to the community.");
    if (inputMessage.length > 0) {
      setInputStyle("forum-input");
      setAddBtnStyle("add-btn valid");
    }
    if (inputMessage.length < 1) {
      setAddBtnStyle("add-btn");
    }
  }

  const Pusher = function () {
    if (inputMessage.length == 0) {
      setInputStyle("forum-input input-error");
      setPlaceHolder("You cannot send an empty message!");
      setAddBtnStyle("add-btn");
      return;
    }
    setMessage([
      ...message,
      {
        user: "recruiter",
        time: formattedDate,
        message: inputMessage,
        id: newNumber,
      },
    ]);
    setInputMessage("");
    setAddBtnStyle("add-btn");
  };

  const Remover = function (e) {
    let idOfCheckboxPressed = e.target.id;
    let indexOfCheckboxPressed = message.findIndex(
      (x) => x.id == idOfCheckboxPressed
    );
    message.splice(indexOfCheckboxPressed, 1);
    setMessage([...message]);
  };

  let defaultBtnClass = "button-wrapper";
  let hiddenBtnClass = "hidden";

  const removeHidder = function () {};

  const keyPusher = function (e) {
    if (e.code == "Enter") {
      console.log("enter has been pressed");
      Pusher();
    }
  };

  return (
    <div>
      <div>
        <div className="topic-header">
          <div className="topic-header-goal">
            <strong>{props.goalTunnel}</strong>
          </div>
          <div className="users">
            <strong>7 users</strong> share this goal
          </div>
          <div className="last-post">
            Last post by <strong>rosa</strong> on (04.02.2023)
          </div>
        </div>
        <div>
          <div className="thread-wrapper">
            {message.map((x) => (
              <div className="user-line-wrapper">
                <div className="chat-line">{x.user}</div>
                <div className="chat-line">{x.time}</div>
                <div className="chat-line">{x.message}</div>
                <div
                  className={
                    x.user == "recruiter" ? defaultBtnClass : hiddenBtnClass
                  }
                >
                  <button onClick={Remover} id={x.id}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="input-container">
              <input
                type="text"
                placeholder={placeHolder}
                className={inputStyle}
                value={inputMessage}
                onChange={messageListener}
                onKeyDown={keyPusher}
                required
              />
            </div>
            <div className="add-btn-wrapper" onClick={Pusher}>
              <button className={addBtnStyle}>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;
