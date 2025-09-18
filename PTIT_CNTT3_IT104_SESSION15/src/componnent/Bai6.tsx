import {Component } from 'react'
import Children from './Children'

type Doc ={
    id:number,
    tiltle:string,
    content:string,
    author:string
}
type State ={
    listDocs : Doc[];
}
export default class Bai6 extends Component<object,State> {
    constructor (props:object) {
        super(props);
        this.state ={
            listDocs : [{
                id:1,
                tiltle:'react',
                content:"react.js",
                author:"Hoang Son"
            },{
                id:2,
                tiltle:'react',
                content:"hoc props react.js",
                author:"Boizi"
            }]
        }
    }
  render() {
    return (
      <div>
        <h1>danh sách bài viết</h1>
        <Children listDocs={this.state.listDocs}/>
      </div>
    )
  }
}
