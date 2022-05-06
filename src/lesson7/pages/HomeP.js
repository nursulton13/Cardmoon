import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Table,
} from "reactstrap";

class HomeP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
      time: "",
      isExist: false,
    };
  }
  render() {
    const state = this.state;
    const handleInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
    const save = (e) => {
      e.preventDefault();
      if (this.props.todos.find((todo) => todo.todo === this.state.todo)) {
        this.setState({ isExist: true });
      } else {
        this.props.closeModal();
        this.props.getValues(this.state);
        this.setState({ todo: "", time: "" });
        this.setState({ isExist: false });
      }
    };
    return (
      <div>
        <div className="d-flex justify-content-between my-3">
          <h3>All Todos</h3>
          <Button onClick={() =>{
            this.props.openModal();
            state.todo = '';
            state.time = '';
          }} color="success">
            Add
          </Button>
        </div>
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
            {this.props.todos.map((todo, index) => (
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
                  <Button
                    color="primary"
                    className="mx-2"
                    onClick={() => {
                      this.props.openModalEdit(todo);
                      state.todo = todo.todo;
                      state.time = todo.time;
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="success"
                    onClick={() => {
                      this.props.doneTodo(todo);
                    }}
                  >
                    Done
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal toggle={this.props.closeModal} isOpen={this.props.isOpen}>
          <Form onSubmit={save}>
            <ModalHeader toggle={this.props.closeModal}>
              Adding ToDo
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="todo">Enter todo name</Label>
                <Input
                  value={state.todo}
                  name="todo"
                  onChange={handleInput}
                  placeholder="Enter todo"
                  id="todo"
                  invalid={state.isExist}
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="time">Enter interval of time</Label>
                <Input
                  value={state.time}
                  name="time"
                  onChange={handleInput}
                  placeholder="19:00 - 20:00"
                  id="time"
                />
                <FormFeedback>You will not be able to see this</FormFeedback>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.props.closeModal}>
                Close
              </Button>
              <Button color="success" type="submit">
                Add
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default HomeP;
