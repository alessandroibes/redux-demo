import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => (
    props.todos.length > 0 && 
    <h2>Você tem {props.todos.length} {props.todos.length > 1 ? "todos" : "todo"}</h2>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

export default connect(mapStateToProps)(Counter);