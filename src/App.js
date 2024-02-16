import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount = () => {
    setInterval(()=>{this.setState({timer:this.state.timer+1})},1000)
  }
  
  state={
    person:{
      fullname: "wael",
      bio:" 30 YO ",
      imgSrc: " https://images.theconversation.com/files/102848/original/image-20151123-18264-j336wc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
      profession: "Developer "
    },
    shows:false,
    timer: 0


  }
  render() {
    return (
      <div>
        <h1>timer:{this.state.timer}</h1>
        <button onClick={()=>{
          this.setState({shows:!this.state.shows,})
        }}> show</button>

        {
          this.state.shows &&  <>
          <h2>{this.state.person.fullname}</h2>
          <h2>{this.state.person.bio}</h2>
          <h2>{this.state.person.profession}</h2>
          <img src={this.state.person.imgSrc} style={{width:250,height:250}}></img>
          
          </>
        }

      </div>
    )
  }
}
