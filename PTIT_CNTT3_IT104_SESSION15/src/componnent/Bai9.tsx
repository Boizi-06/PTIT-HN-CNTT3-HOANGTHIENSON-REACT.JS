import React, { Component } from "react";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  inputValue: string;
  editingId: number | null;
  deleteId: number | null;
};

export default class App extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      todos: [],
      inputValue: "",
      editingId: null,
      deleteId: null,
    };
  }

  componentDidMount() {
    const data = localStorage.getItem("todos");
    if (data) {
      this.setState({ todos: JSON.parse(data) });
    }
  }

  componentDidUpdate(_: object, prevState: State) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAdd = () => {
    const { inputValue, todos, editingId } = this.state;
    if (!inputValue.trim()) {
      alert("Tên công việc không được để trống!");
      return;
    }
    if (todos.some((t) => t.title === inputValue && t.id !== editingId)) {
      alert("Tên công việc đã tồn tại!");
      return;
    }

    if (editingId) {
      // cập nhật
      this.setState({
        todos: todos.map((t) =>
          t.id === editingId ? { ...t, title: inputValue } : t
        ),
        inputValue: "",
        editingId: null,
      });
    } else {
      // thêm mới
      const newTodo: Todo = {
        id: Date.now(),
        title: inputValue,
        completed: false,
      };
      this.setState({
        todos: [...todos, newTodo],
        inputValue: "",
      });
    }
  };

  handleToggle = (id: number) => {
    this.setState({
      todos: this.state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    });
  };

  handleEdit = (id: number) => {
    const todo = this.state.todos.find((t) => t.id === id);
    if (todo) {
      this.setState({ inputValue: todo.title, editingId: id });
    }
  };

  handleDelete = () => {
    this.setState({
      todos: this.state.todos.filter((t) => t.id !== this.state.deleteId),
      deleteId: null,
    });
  };

  render() {
    const { todos, inputValue, editingId, deleteId } = this.state;

    return (
      <div>
        <h2>Danh sách công việc</h2>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Thêm công việc mới..."
          />
          <button onClick={this.handleAdd}>
            {editingId ? "Cập nhật" : "Thêm"}
          </button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleToggle(todo.id)}
              />
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </span>
              <button onClick={() => this.handleEdit(todo.id)}>Sửa</button>
              <button onClick={() => this.setState({ deleteId: todo.id })}>
                Xóa
              </button>
            </li>
          ))}
        </ul>

        {/* Modal xác nhận xóa */}
        {deleteId && (
          <div>
            <p>Bạn có chắc chắn muốn xóa công việc này?</p>
            <button onClick={() => this.setState({ deleteId: null })}>Hủy</button>
            <button onClick={this.handleDelete}>Xóa</button>
          </div>
        )}
      </div>
    );
  }
}
