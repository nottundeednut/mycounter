import { useReducer } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import  "./notFound";

const initialState = { count: 0, customInput: "" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return initialState;

    case "customIncrement":
      return { ...state, count: state.count + parseInt(state.customInput, 10) };

    case "customDecrement":
      return { ...state, count: state.count - parseInt(state.customInput, 10) };

    case "setcustomInput":
      return { ...state, customInput: action.payload };

    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function increment() {
    dispatch({ type: "increment" });
  }

  function decrement() {
    dispatch({ type: "decrement" });
  }

  function reset() {
    dispatch({ type: "reset" });
  }

  function setValue(e) {
    dispatch({ type: "setcustomInput", payload: e.target.value });
  }

  function customIncrement() {
    if (state.customInput) dispatch({ type: "customIncrement" });
  }

  function customDecrement() {
    if (state.customInput) dispatch({ type: "customDecrement" });
  }

  return (
    <Router>
      <nav className="navbar">
        <h1>ALTSCHOOL OF ENGINEERING</h1>
        <div className="links">
          <Link to="/">Home</Link>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <div className="wrapper">
            <h2>COUNTER PROJECT</h2>
            <h1>{state.count}</h1>
            <h3>Default Interval</h3>
            <button onClick={increment}> Default Increment </button>
            <button onClick={decrement}> Default Decrement </button>

            <h3>Custom Interval</h3>
            <input
              type="text"
              placeholder="Enter Interval Value"
              onChange={setValue}
              value={state.customInput}
            />
            <br />
            <button onClick={customIncrement}> Custom Increment </button>
            <button onClick={customDecrement}> Custom Decrement </button>
            <br />

            <button onClick={reset}>Reset All</button>
          </div>
        </Route>
        <Route path="*">
          <notFound />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
