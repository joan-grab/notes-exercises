// ogólny zarys

// nazwa komponentu zawsze z wielkiej litery

function Hello() {
	return <div>Hello React!</div>;
    // === return React.createElement('div', null, 'Hello Asia!')
}

ReactDOM.render(
  <Hello />, 
  // === React.createElement(Hello, null,null),
  document.getElementById('mountNode'),
);

ReactDOM.render(
  // multiple elements shoud be placed in an array or in a parent element
  // [<Button />,<Display />], 
  <> 
    <Button />
    <Display />
  </>,
  // <> === <React.Fragment> instead of unnecessary div
  document.getElementById('mountNode'),
);

function Button() {
  //   const [counter, setCounter] = useState(initialStateValue); <= hook
  const [counter, setCounter] = useState(5);
  // pass pointer to the function, do not use () after
  const handleClick = () => setCounter(counter*2); 
	return (
    <button onClick={handleClick}>
      {counter}
    </button>
  );
}

// final code 

function Button(props) { 
  const handleClick = () => props.onClickFunction(props.increment);
	return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (val) => setCounter(counter+val);
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={10}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);