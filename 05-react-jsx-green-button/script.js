// const App = () => {
//   const [buttonText, setButtonText] = React.useState("Click me");
//   const [buttonClicked, setButtonClicked] = React.useState(false);
//   const onButtonClick = () => {
//     setButtonText(!buttonClicked ? "Hello from React" : "Click me");
//     setButtonClicked(!buttonClicked);
//   };

//   return (
//     <div className="app">
//       <button onClick={onButtonClick} className={buttonClicked && "green-btn"}>
//         {buttonText}
//       </button>
//     </div>
//   );
// };
// const container = document.getElementById("app");
// const root = ReactDOM.createRoot(container);
// root.render(<App />);

const App = ({ initialButtonText, initialClassesList }) => {
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClassesList);

  const onButtonClick = () => {
    setButtonText("Hello from React");
    setClassesList("green-btn");
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};
const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassesList="" />);


