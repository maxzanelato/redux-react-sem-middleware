import React, { Component } from "react";

/* Engloba a aplicação para utilizar redux, ou seja, ficar escutando os eventos */
import { Provider } from "react-redux";
/* A inicialização da store do redux que armazenará o estado */
import store from "./store/index";

import TodoList from "./components/TodoList";
import Counter from "./components/Counter";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoList />
        <Counter />
      </Provider>
    );
  }
}
