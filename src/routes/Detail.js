import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'

const Detail = ({todos}) => {
    // URL 파라미터로 들어온 값을 가질수있음.

    const id = useParams();
    console.log("id  : ", id);
    
    const findTodo = todos.find(todo => todo.id === parseInt(id));

  return (
    <div>
        {findTodo?.text}
        Created at : {findTodo?.id}
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        todos : state
    }
}

export default connect(mapStateToProps) (Detail)