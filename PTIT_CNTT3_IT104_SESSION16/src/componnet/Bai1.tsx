import  { Component } from 'react';

type State = {
    subjects: string[];
};

export default class SubjectList extends Component<object, State> {
    constructor(props: object) {
        super(props);
        // Khai báo mảng môn học
        this.state = {
            subjects: ["Toán", "Văn", "Anh", "Hóa", "Sinh"]
        };
    }

    render() {
        return (
            <div style={{
                backgroundColor: "#222",
                color: "white",
                width: "400px",
                margin: "20px auto",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center"
            }}>
                <h2>📚 Danh sách môn học</h2>
                {this.state.subjects.map((subject, index) => (
                    <div key={index} style={{
                        backgroundColor: "#ccf5ff",
                        margin: "10px 0",
                        padding: "10px",
                        borderRadius: "8px"
                    }}>
                        {subject}
                    </div>
                ))}
            </div>
        );
    }
}
