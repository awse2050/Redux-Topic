
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => { 
  // Redux에서는 Reducer라고 부른다.
  if(action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  }
  
  return count; 
}

const countStore = createStore(countModifier);

const onChange = () => {
  console.log(countStore.getState());
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: "ADD"});
}

const handleMinus = () => {
  countStore.dispatch({type: "MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
