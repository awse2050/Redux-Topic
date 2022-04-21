import React, { useState } from 'react'
import { connect } from 'react-redux';

const Home = (props) => {
  console.log(props);

  const [text , setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}></input>
        <button>ADD</button>
      </form>
      <ul></ul>
    </div>
    )
}

// 첫번째 매개변수 -> 현재 Store에 존재하는 state
// 이것을 사용하는 것은 store로부터 무언가 가져오고 싶다는 것임.
const mapStateToProps = (state, props) => {
  console.log(state);
  // 반환값은 Object로 줘야한다.
  return {state};
}
// Redux store로 부터 state를 받아서 해당 컴포넌트의 Props로 전달해준다.
// 따라서 props를 받아서 state 사용해 뿌려주던가 수정하는 행위가 가능하다.
export default connect(mapStateToProps)(Home);