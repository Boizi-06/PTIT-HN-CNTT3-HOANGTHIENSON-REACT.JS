import { Component } from "react";

type listInforstate = {
  id: number;
  fullName: string;
  age: number;
};

type listStudent = {
  students: listInforstate[];
};

export default class Bai3 extends Component<object, listStudent> {
  constructor(props: object) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          fullName: "boizi",
          age: 19,
        },
        {
          id: 2,
          fullName: "zitj",
          age: 20,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách sinh viên</h2>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {this.state.students.map((student) => (
            <tr key={student.id}>
              <td>ID: {student.id}</td>
              <td>Họ và Tên: {student.fullName}</td>
              <td>Tuổi: {student.age}</td>
              <hr />
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
