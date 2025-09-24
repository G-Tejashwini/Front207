import { useState } from "react";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>React Management Result</h2>
      <p>Count = {count}</p>

      <button onClick={() => setCount(count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
      <button onClick={() => setCount(0)}>⟳</button>
    </div>
  );
};

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2> Count = {count} </h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h2>Welcome to Home component</h2>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>Welcome to About component</h2>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h2>Welcome to Contact component</h2>
    </div>
  );
};

const Hello = (props) => {
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

const Hello2 = (props) => {
  return (
    <div>
      <h3>
        Hello {props.name}, your age is {props.age}
      </h3>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;

  console.log("console welcome");

  return (
    <div>
      <h1>Welcome to React Application</h1>
      <p>{a} plus {b} = {a + b}</p>

      <Home />
      <About />
      <Contact />

      <Hello name="G.Tejashwini" />
      <Hello2 name="G.Tejashwini" age={18} />

      <Counter />
      <Counter2 />
      <p>Current time: {now.toString()}</p>
    </div>
  );
};

export default App;