import  { Component } from 'react'


type infor = {
    fullName :string
}

export default class Lifecyle extends Component<object,infor>{
    constructor(props: object) {
        super(props) ;
        this.state = {
            fullName : "Hoang Son"
        }
    }
    componentDidMount(): void {
        console.log("componentDidMount duoc goi \n");
        // thuong dung de goi API lay du lieu gan vao DOM
        
    }
    changeName = () => {
        this.setState({fullName:"Boizi"});
    }
    shouldComponentUpdate(nextProps: object, nextState: Readonly<infor>, nextContext: any): boolean {
        return true
    }
    componentDidUpdate(prevProps: object, prevState: Readonly<infor>, snapshot?: any): void {
        console.log("quay ve didupdate");
        
    }
    componentWillUnmount(): void {
          
    }
  render() {
    console.log("component re render\n");
    
    return (
      <div>
        lifecyle
        {/* vòng đời của một class component trải qua 3 giai đoạn 
        1. mounting (khoi tao constructer,state,hien thi DOM ra giao dien)
            * componentDidMount()
        2. updating (khi props hoac state thay doi)
        3 unmount(gwo bo khoi DOM)  */}
        <p>Ho va Ten: {this.state.fullName}</p>
        <button onClick={this.changeName}>CLick me</button>
        </div>
    )
  }
}
