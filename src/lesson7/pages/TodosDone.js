import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class TodosDone extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Todo Name</th>
              <th>Interval Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todosDone.map((todo, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{todo.todo}</td>
                <td>{todo.time}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.props.deleteTodo(todo)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TodosDone;
