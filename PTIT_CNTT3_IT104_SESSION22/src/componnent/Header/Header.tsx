import "./Header.scss"


export default function Header() {
    return (
        <div className="container">
            <div className="header">
                <span className="head">Todo List</span><br />
                <span className="bot">Get things done , one a item at the time</span>
                <hr />
            </div>
            <div className="body">
                <div className="list-todo">
                    <div className="card-task">
                        <span>code a todo list</span>
                        <div className="button">
                            <input type="checkbox" />
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </div>    
                </div>
                <div className="confirm-todo">
                        <span>move done item at the end</span>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                </div>
            </div>
            <div className="footer">
                <p>add to the todo list</p>
                <div className="getinfor">
                    <input type="text" />
                    <button>add item</button>
                </div>
            </div>
        </div>
    )
}
