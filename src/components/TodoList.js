import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as todoActions from "../store/ducks/todos/actions";

class TodoList extends Component {
  state = {
    newTodoText: "Novo Café"
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: "Novo Café" });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodoText}
          onChange={e => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.addNewTodo}>Novo todo</button>
      </div>
    );
  }
}

/*
  Variáveis que queremos ouvir do nosso estado
*/
const mapStateToProps = state => ({
  todos: state.todos
});

/*
  Ações disponíveis que serão utilizadas pelo componente
*/
const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

/* É o cara que liga a view com o estado */
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
