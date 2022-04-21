import React, { useState } from 'react'
import { connect } from 'react-redux';
import ToDo from '../component/ToDo';
import { actionCreators } from '../store';

const Home = ({state, addTodo}) => {

  const [text , setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    addTodo(text);
    setText("");
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>ADD</button>
      </form>
      <ul>
        {state.map( todo => (<ToDo {...todo} key={todo.id} />)) }
      </ul>
    </div>
    )
}

const mapStateToProps = (state) => {
  console.log(state);
  
  return {state};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);