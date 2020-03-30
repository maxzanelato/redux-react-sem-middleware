import React from "react";
import { connect } from "react-redux";

const Counter = props => <h2>Você tem {props.todos.length} todos</h2>;

/*
  Variáveis que queremos ouvir do nosso estado
*/
const mapStateToProps = state => ({
  todos: state.todos
});

/* É o cara que liga a view com o estado */
export default connect(mapStateToProps, null)(Counter);
