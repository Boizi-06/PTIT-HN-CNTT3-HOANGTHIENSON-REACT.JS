import { useReducer } from "react";

type Job = {
    id:number,
    name : string,
    compledted:boolean
}

export default function Todo() {
    const initialJob = {
        jobs:[{
            id:1,
            name:'hoc react hook',
            compledted:true
        }],taskName:""
    }
    const todoReducer = (state:any,action:any)=> {
        switch(action.type) {
            case "ADD":
                return {jobs:[...state.jobs,action.payload]}
            case "DELETE" : 
                return {jobs:state.jobs.filter((u:Job)=>u.id!=action.payload)}  
            default :
                return state;
        }
        
    }
    const [state,dispatch]=useReducer(todoReducer,initialJob);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        console.log(e.target.value);
        state.taskName = e.target.value;
    }
    const addTodo =()=> {
        let newJob = {
            id:state.jobs.length+1,
            name:state.taskName,
            compledted : true
        }
        dispatch({type:"ADD",payload: newJob});
    }
    const deleteTodo = (id :number) => {
         dispatch({type:"DELETE",payload: id});
    }
    
  return (
    <div>
        <h1>Ứng dụng todo</h1>
        <input type="text" placeholder="Nhap tên công viêc" onChange={handleChange} />
        <button onClick={addTodo}>thêm công việc</button>
        <h2>danh sach cong viec</h2>
        <ul>
        {state.jobs.map((item: Job) => (
          <li key={item.id}>
            {item.name}
            <button>Sửa</button>
            <button onClick={()=>deleteTodo(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
