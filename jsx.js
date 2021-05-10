//ex 1: Embedding the JSX
const elements = <h2>Hello Im a JSX</h2>;
ReactDOM.render(elements, document.getElementById("root"));

//ex 2: without JSX
const element = React.createElement("h2", null, "Hello Im a JSX");
ReactDOM.render(element, document.getElementById("root"));

//ex 3: Embedding as the Expression in JSX
const technology = "React JSX";
const myTechnology = <h1>Hello Im Trained on {technology}</h1>;
ReactDOM.render(myTechnology, document.getElementById("root"));

//ex 4 : Embedding the result in javascript function using JSX
function formatName(user) {
  console.log("user data", user);
  return user.fname + " " + user.lname + " " + user.id;
}

const user = {
  fname: "charlie",
  lname: "smith",
  id: 3434,
};

const employee = <h2>Hello , {formatName(user)}</h2>;
ReactDOM.render(employee, document.getElementById("root"));

//ex 5 : JSX Elemnt creation (without JSX)
const jsxElement = React.createElement(
  "h1",
  { className: "sample", id: "test" },
  "its my jsx element"
);

ReactDOM.render(jsxElement, document.getElementById("root"));

//ex 6 : without JSX
const myjsx = React.createElement(
  "div",
  { id: "test" },
  React.createElement("h2", null, "Hello World")
);
ReactDOM.render(myjsx, document.getElementById("root"));
