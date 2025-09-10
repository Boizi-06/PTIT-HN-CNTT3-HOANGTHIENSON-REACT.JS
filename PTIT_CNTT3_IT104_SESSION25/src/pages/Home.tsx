import { useNavigate } from "react-router-dom"


export default function Home() {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/login");                     
    }
  return (
    <div>
        <h1>Trang chủ</h1>
        <header>
            Phan dau
            <button onClick={handleClick}>dang nhap</button>
        </header>
        <main>
            phan noi dung trang
        </main>
        <footer>
            phan chan trang
        </footer>
    </div>
  )
}
