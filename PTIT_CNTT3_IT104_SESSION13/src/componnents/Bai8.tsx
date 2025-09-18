import React, { Component } from 'react';
import './Todolist.css';

class Todolist extends Component {
  constructor(props:object) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          name: 'Thiết kế giao diện Header',
          assign: 'Nguyễn Văn A',
          status: false,
          created_at: new Date('2025-08-21T13:12:12'),
        },
        {
          id: 2,
          name: 'Thiết kế giao diện Footer',
          assign: 'Nguyễn Văn B',
          status: true,
          created_at: new Date('2025-08-21T15:10:50'),
        },
      ],
    };
  }

  // Phương thức để định dạng ngày/giờ
  formatDateTime(date) {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  render() {
    return (
      <div className="todolist-container">
        <h2>Danh sách công việc</h2>
        <table className="task-table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên công việc</th>
              <th>Người thực hiện</th>
              <th>Trạng thái</th>
              <th>Thời gian tạo</th>
              <th>Chức năng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                <td>{todo.name}</td>
                <td>{todo.assign}</td>
                <td>
                  <span className={todo.status ? 'status-completed' : 'status-pending'}>
                    {todo.status ? 'Hoàn thành' : 'Chưa hoàn thành'}
                  </span>
                </td>
                <td>{this.formatDateTime(todo.created_at)}</td>
                <td>
                  <button className="edit-btn">Sửa</button>
                  <button className="delete-btn">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Todolist;