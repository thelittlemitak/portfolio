import "./QuestionAnswer.css";
import { useState } from "react";

function QuestionAnswer(props) {
  const [questionStyle, setQuestionStyle] = useState("faq-question");
  const [answerStyle, setAnswerStyle] = useState("faq-answer");
  const [answerContStyle, setAnswerContStyle] = useState(
    "faq-answer-container"
  );
  const svg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="faq-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );

  const minus = <div className="minus-symbol">-</div>;

  const questionOpener = function (e) {
    if (questionStyle === "faq-question") {
      setQuestionStyle("faq-question open-faq-question");
      setOpenSymbol(minus);
    } else if (questionStyle === "faq-question open-faq-question") {
      setQuestionStyle("faq-question");
      setOpenSymbol(svg);
    }
    if (answerStyle === "faq-answer") {
      setAnswerStyle("faq-answer open-faq-answer");
      setOpenSymbol(minus);
    } else if (answerStyle === "faq-answer open-faq-answer") {
      setAnswerStyle("faq-answer");
      setOpenSymbol(svg);
    }
    if (answerContStyle === "faq-answer-container") {
      setAnswerContStyle("faq-answer-container open-faq-answer-container");
      setOpenSymbol(minus);
    } else if (
      answerContStyle === "faq-answer-container open-faq-answer-container"
    ) {
      setAnswerContStyle("faq-answer-container");
      setOpenSymbol(svg);
    }
  };

  const [openSymbol, setOpenSymbol] = useState(svg);

  return (
    <div>
      <div className="faq-question-container" onClick={questionOpener}>
        <div className={questionStyle}>{props.faqTunnel.question}</div>
        <div className="symbol-cont">{openSymbol}</div>
      </div>
      <div className={answerContStyle}>
        <div className={answerStyle}>{props.faqTunnel.answer}</div>
      </div>
    </div>
  );
}

export default QuestionAnswer;
