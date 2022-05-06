import { Button, Table } from 'reactstrap';
import React, { Component } from 'react'

class TodosDelete extends Component {
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
            {this.props.todosDelete.map((todo, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{todo.todo}</td>
                <td>{todo.time}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.props.deleteTodos(todo)}
                  >
                    Delete from database
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

export default TodosDelete