import {useState} from 'react'
import type { ChangeEvent } from "react";

export default function Bai2() {
    type infor ={
        name:string,
        email:string
    }
    const [nameInput,setName] = useState<string>("");
    const [emailInput,setEmail] = useState<string>("");
    const [infor,setInfor] = useState<infor>(Object);
    const handelChangeName = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handelChangeEmail = (e:ChangeEvent<HTMLInputElement>)=> {
        setEmail(e.target.value)
    }
    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInfor({name:nameInput,email:emailInput});

    }

  return (
    <div>Bai2
        <form action=""  onSubmit={submitForm}>
            <h2>thong tin nguoi dung</h2>
            <input type="text" placeholder='nhap ten' onChange={handelChangeName} value={nameInput}/>
            <input type="text"placeholder='nhap email' value={emailInput} onChange={handelChangeEmail}/>
            <button type='submit'>Gui</button>
        </form >
        <br />
        <div>
            <p>name : {infor.name}</p>
            <p>email : {infor.email}</p>
        </div>
    </div>
  )
}
