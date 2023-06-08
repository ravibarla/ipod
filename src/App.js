import "./App.css";
import Menu from "./Menu";
import Control from "./Control";
import React from "react"

class App extends React.Component {
  resetDiv=()=>{
    const parentElement=document.getElementsByClassName("menu-div")
    parentElement[0].remove()
  }
  addToDisplay=(selectedDiv)=>{
    const parentElement=document.getElementById("head")
    const newElement=document.createElement("div")
    newElement.innerHTML=`<div>${selectedDiv}</div>`
    parentElement.append(newElement)
  }
  handleDivSelection=(selectedDiv)=>{
    console.log(selectedDiv)
    this.resetDiv()
    this.addToDisplay(selectedDiv)
  }
  render(){
    return (
      <div className="App">
        <Menu handleDivSelection={this.handleDivSelection}/>
        <Control />
      </div>
    );
  }
}

export default App;
