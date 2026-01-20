type GreetingProps = {
  name: string;
  age: number;
};

const Greeting = ({ name, age }: GreetingProps): JSX.Element => {
  return (
    <div>
      <h2>Hello, {name} 👋</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default Greeting;
