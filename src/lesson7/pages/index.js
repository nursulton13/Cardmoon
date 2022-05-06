import React, { Component } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import HomeP from "./HomeP";
import LoginP from "./LoginP";
import { TOKEN } from "./../const";
import TodosDone from "./TodosDone";
import TodosDeleted from "./TodosDelete";
import Layout from "../comps/Layout";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      todos: [],
      todosDone: [],
      todosDelete: [],
      deleteTodos: [],
      value: "",
    };
  }
  render() {
    const state = this.state;
    const openModal = () => {
      this.setState({ isOpen: true });
    };
    const openModalEdit = (el) => {
      this.setState({
        isOpen: true,
        // todos: this.state.todos.filter((item) => item.todo !== el.todo),
      });
    };
    const closeModal = () => {
      this.setState({ isOpen: false });
    };
    const getValues = (values) => {
      this.setState({ todos: [...this.state.todos, values] });
    };
    const doneTodo = (todo) => {
      this.setState({
        todos: this.state.todos.filter((item) => item.todo !== todo.todo),
        todosDone: [...this.state.todosDone, todo], 
      });
    };
    const deleteTodos = (todo) => {
      this.setState({
        todosDelete: this.state.todosDelete.filter(
          (item) => item.todo !== todo.todo
        ),
        deleteTodos: [...this.state.deleteTodos, todo],
      });
    };
    const deleteTodo = (deletetodo) => {
      this.setState({
        todosDone: this.state.todosDone.filter(
          (item) => item.todo !== deletetodo.todo
        ),
        todos: this.state.todos.filter((item) => item.todo !== deletetodo.todo),
        todosDelete: [...this.state.todosDelete, deletetodo],
      });
    };
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginP />}></Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route
              path=""
              element={
                <Layout
                  todosNumber={state.todos.length}
                  todosDoneNumber={state.todosDone.length}
                  todosDeleteNumber={state.todosDelete.length}
                >
                  <HomeP
                    isOpen={state.isOpen}
                    closeModal={closeModal}
                    openModal={openModal}
                    openModalEdit={openModalEdit}
                    getValues={getValues}
                    todos={state.todos}
                    value={state.value}
                    doneTodo={doneTodo}
                    deleteTodo={deleteTodo}
                  />
                </Layout>
              }
            />
            <Route
              path="done"
              element={
                <Layout
                  todosNumber={state.todos.length}
                  todosDoneNumber={state.todosDone.length}
                  todosDeleteNumber={state.todosDelete.length}
                >
                  <TodosDone
                    todosDone={state.todosDone}
                    deleteTodo={deleteTodo}
                  />
                </Layout>
              }
            />
            <Route
              path="deleted"
              element={
                <Layout
                  todosNumber={state.todos.length}
                  todosDeleteNumber={state.todosDelete.length}
                >
                  <TodosDeleted
                    todosDelete={state.todosDelete}
                    deleteTodos={deleteTodos}
                  />
                </Layout>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default index;

const PrivateRoute = () => {
  const auth = localStorage.getItem(TOKEN);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
