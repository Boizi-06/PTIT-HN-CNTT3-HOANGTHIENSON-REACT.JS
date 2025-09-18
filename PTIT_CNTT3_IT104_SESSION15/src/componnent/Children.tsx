import  { Component } from 'react'
type Doc ={
    id:number,
    tiltle:string,
    content:string,
    author:string
}
type Props ={
    listDocs : Doc[];
}
export default class chiildren extends Component<Props> {
  render() {
    return (
     <div>
        
        <ul>
          {this.props.listDocs.map((doc) => (
            <li key={doc.id}>
              <h3>{doc.tiltle}</h3>
              <p>{doc.content}</p>
              <small>Tác giả: {doc.author}</small>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
