import devcodeLogo from "../../assets/devcode-logo.png";
import "./style.css";

export const HelloWorld = () => {
  return (
    <div className="hello">
      <img data-cy="devcode-logo" src={devcodeLogo} alt="Devcode Logo" />
      <div data-cy="devcode-title">
        <h1>I'm ready for the next challenge!</h1>
        <h2>Hello World</h2>
      </div>
    </div>
  );
};
