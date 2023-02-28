import "./ExpenseItem.css";

function ExpenseItem(props) {
  //Here you can put variables that go inside the jsx elements
  const someNiceThing = "what's up";
  const someOtherNiceThing = "heeeeyyyy what's up";
  const number = 534;
  console.log(props)

  return (
    <div>
      <h2 className="test">{someOtherNiceThing}</h2>
      <div>{someNiceThing}</div>
      <p>{number}</p>
      {/* you can also output info from an object that has been inserted as an argument */}
      <h3 className="test2">{props.title}</h3>
    </div>
  );
}

export default ExpenseItem;