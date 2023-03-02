import "./TopicCard.css";
import ChatLine from "./ChatLine";

function TopicCard(props) {
  return (
    <div class="topic-container ">
      <div class="forum-line">
        <div class="forum-item forum-item-goal">
          <strong>{props.goal}</strong>
        </div>
        <div class="forum-item forum-item-aff">
          <strong>7 users</strong> share this goal
        </div>
        <div class="forum-item forum-item-post">
          Last post by <strong>rosa</strong> on (04.02.2023)
        </div>
      </div>
      <div class="chat-window visible">
        <ChatLine userID={props.userID}></ChatLine>
        <ChatLine userID={props.userID}></ChatLine>
        <ChatLine userID={props.userID}></ChatLine>
        <div>
          <input
            class="forum-input"
            type="text"
            placeholder="Insert your message to the community."
          />
        </div>
      </div>
    </div>
  );
}

export default TopicCard;