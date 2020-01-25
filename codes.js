import { Component } from "c:/Users/basar/react-prototype/node_modules/@types/react";
import { useState } from "react";
/***********************************************************/
//Freeze object against change Object.freeze(object)
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}

/***********************************************************/
//Arrow functions
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
//or single line arrow function
const myFunc= () => "value";
const multiplier = (item, multi) => item * multi;
/***********************************************************/
//Default parameter
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
/***********************************************************/
//Reduce a=0, initial value; b next element in the args
args.reduce((a, b) => a - b, 0);
/***********************************************************/
//Args, Rest operator, Function decleration
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
/***********************************************************/
//Spread operator
var arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
//... gives in place comma seperated array elements
/***********************************************************/
//Deconstructor
const user = { name: 'John Doe', age: 34 };
const { name, age } = user;
// name = 'John Doe', age = 34
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;
//highToday = 77, highTomorrow = 80
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST
//lowToday = 64, highToday = 77
/***********************************************************/
//Rest with deconstruction
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
/***********************************************************/
//Deconstruction with rest parameter
const source = [1,2,3,4,5,6,7,8,9,10];
const [a, b,...arr] = list;
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
/***********************************************************/
//Deconstructor as function argument
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({min, max}) => (max + min);
/***********************************************************/
//String interpolation and multiline string
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;
//Use back tick `, not quote ', not double quote "
/***********************************************************/
//Concise object literal decleration
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
/***********************************************************/ 
//Define function in object
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
/***********************************************************/
//Getter, Setter
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
/***********************************************************/
//To be able to export function in HTML
//sript type="module" src="filename.js"></script>
/***********************************************************/  
//Export function
export const uppercaseString = (string) => {
  return string.toUpperCase();
}

//export function from person.js
const person = {
  name:'Max'
}
export default person
/***********************************************************/  
//export from utility.js
export const clean = () => {...}
export const baseData = 10;
/***********************************************************/                            
//import into another app.js file
import person from './person.js';
import prs from './person.js';
 /***********************************************************/                           
//named import because no default export in utility.js                            
import {baseData} from './utility.js';
import {clean} from './utility.js';
import {baseData as bd} from './utility.js';                          
/***********************************************************/
//Function
function printMyName(name){
  console.log(name);
}
printMyName('Max');
//Arrow function
const printMyName = (name) => {
  console.log(name);
}
//Single argument arrow function
const printMyName = name => {
  console.log(name);
}
//Single line  arrow function (remove return)
const multiply = (number1, number2) =>  number1*number2;
/***********************************************************/                            
//Class, inheritence
class Human {
  constructor(gender) {
    this._gender = gender;
  }
  printGender() {
    console.log(this._gender);
  }
}                            
class Male extends Human{
  constructor(name){
    super();
    this._name=name;
    this._gener='male';
  }
}
/***********************************************************/                            
//Constructor ES7
constructor(){
  this.myProperty = 'value';
}    
myMethod(){...}                 
//Constructor ES6
myProperty = 'value';
myMethod = () => {...}
/***********************************************************/                          
//Class, inheritence ES7
class Human {
  _gender = gender;
  printGender = () => {
    console.log(this._gender);
  }
}  
/***********************************************************/
//Spread
const newArray = [...oldArray, 1,2];
const newObject = {...oldObject, newProp: 5};
//Rest (args is now an array of arguments)
function sortArgs(...args){
  return args.sort();
}
 /***********************************************************/          
//Filter with arrow
args.filter(el => el === 1);
/***********************************************************/
//Destructuring
//Array destructuring (according to order)
[a,b] = ['Hello', 'Max'];
console.log(a); //Hello
console.log(b); //Max
 /***********************************************************/          
//Object destructuring (according to property name)
{name} = {name: 'Max', age: 28};
console.log(name)//Max 
console.log(age)//undefined
/***********************************************************/
//No need to pass in whole object with deconstructing
const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Max', age: 28});         
           
 /***********************************************************/          
//Destruct specific elements
const numbers = [1,2,3];
[num1, ,num3] = numbers;

/***********************************************************/
//Create react project
//npm init react-app my-app-name
/***********************************************************/
//Create react component using React.createElement
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Does this work?")
  );
}

//Create react component using React.createElement
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", {className: 'App'}, "Does this work?")
  );
}
/***********************************************************/
//Set State
class App extends Component{
  state = {
    persons:[
      {name: 'Max', age: 28},
      {name: 'Manu', age: 30},
      {name: 'Stephanie', age: 26}
    ]
  }

  switchNameHandler = () => {
    console.log("Was clicked!");
    //Don't try to edit state directly, doesn't work, use set state method
    //this.state.persons[0].name = "Maximillian";
    this.setState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Manu", age: 30 },
        { name: "Stephanie", age: 29 }
      ]
    }); //Merges with the state, doesn't change otherState
  };

  render (){
    return (
      <div>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name}></Person>
      </div>
    )
  }
}


/***********************************************************/
//Function hooks, setting states
import {useState} from 'react'; //Most important hook

const app = props =>{
  const [personState, setPersonsState  ] = useState({  //Pass initial state into useState, it returns an array with two elements
    //First one is the initial state, second one is the function that updates the state
    persons:[
      {name: 'Max', age: 28},
      {name: 'Manu', age: 30},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'other value'
  });

  const switchNameHandler = () => { //You can have functions in functions
    console.log("Was clicked!");
    //Don't try to edit state directly, doesn't work, use set state method
    //this.state.persons[0].name = "Maximillian";
    setPersonsState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Manu", age: 30 },
        { name: "Stephanie", age: 29 }
      ]
    }); //With function hook it doesn't merge!!! otherState disappears, you need to pass the whole state
  };
    return (
      <div>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name}></Person>
      </div>
    )
};
/***********************************************************/
//Functional component slicing states
import {useState} from 'react'; //Most important hook

const app = props =>{
  const [personState, setPersonsState  ] = useState({  //Pass initial state into useState, it returns an array with two elements
    //First one is the initial state, second one is the function that updates the state
    persons:[
      {name: 'Max', age: 28},
      {name: 'Manu', age: 30},
      {name: 'Stephanie', age: 26}
    ]
  });
  const [otherState, setOtherState] = useState({otherState: 'other value'}) //You can slice state into smaller parts and update them seperately

  const switchNameHandler = () => { //You can have functions in functions
    console.log("Was clicked!");
    //Don't try to edit state directly, doesn't work, use set state method
    //this.state.persons[0].name = "Maximillian";
    setPersonsState({
      persons: [
        { name: "Maximillian", age: 28 },
        { name: "Manu", age: 30 },
        { name: "Stephanie", age: 29 }
      ]
    }); //With function hook it doesn't merge!!! otherState disappears, you need to pass the whole state
  };
    return (
      <div>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name}></Person>
      </div>
    )
};
/***********************************************************/
//Get input onChange
unction App() {
  const [states, setStates] = useState({
    username: "Basaran",
    username2: "Basaran2"
  });

  const stateHandler = event => {
    setStates({
      username: event.target.value,
      username2: event.target.value
    });
  };

  return (
    <div className="App">
      <UserInput setStates={stateHandler} />
      <UserOutput username={states.username} />
      <UserOutput username={states.username2} />
    </div>
  );
}

const UserInput = props => {
  return <input onChange={props.setStates}></input>;
};

export default UserInput;
/***********************************************************/
//Import CSS
import './CssFile.css';
render(<div className = "classFromCssFile"></div>);

/***********************************************************/
//Conditional JSX expression
state={
  showPersons = false
}
//print persons div is showPersons is true, else print nothing
return(){
<div>
<h1>Hi, I'm a React App</h1>
<p>This is really working!</p>
<button onClick={switchNameHandler}>Switch Name</button>
{this.state.showPersons === true?
  <div>
    <Person name={personState.persons[0].name}></Person>
    <Person name={personState.persons[0].name}></Person>
    <Person name={personState.persons[0].name}></Person>
  </div>:null
}
</div>
}