import React, { useState } from "react";

import "./TopicCard.css";

function GoalCard(props) {
  const [message, setMessage] = useState(props.chatLineTunnel);

  let newNumber = Math.random();
  let currentDate = new Date();
  let day = currentDate.getDate();
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

  let formattedDate = `${hours}:${minutes}h, ${day}.${month}.${year}`;

  const [inputMessage, setInputMessage] = useState("");

  function messageListener(e) {
    let inputMessage = e.target.value;
    setInputMessage(inputMessage);
  }

  const Pusher = function () {
    setMessage([
      ...message,
      {
        user: "new user",
        time: formattedDate,
        message: inputMessage,
        id: newNumber,
      },
    ]);
    console.log(message);
    setInputMessage("");
  };

  return (
    <div>
      <div>
        <div class="topic-header">
          <div class="topic-header-goal">
            <strong>{props.goalTunnel}</strong>
          </div>
          <div>
            <strong>7 users</strong> share this goal
          </div>
          <div>
            Last post by <strong>rosa</strong> on (04.02.2023)
          </div>
        </div>
        <div>
          <div class="thread-wrapper">
            {message.map((x) => (
              <div class="user-line-wrapper">
                <div class="chat-line">{x.user}</div>
                <div class="chat-line">{x.time}</div>
                <div class="chat-line">{x.message}</div>
              </div>
            ))}
            <div class="input-container">
              <input
                type="text"
                placeholder="Insert your message to the community."
                class="forum-input"
                value={inputMessage}
                onChange={messageListener}
              />
            </div>
            <div className="test-wrapper" onClick={Pusher}>
              <div className="test">i am a button</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;
