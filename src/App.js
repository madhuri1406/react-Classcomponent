import React from "react";
import "./style.css";
 function Apps() {
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <p>Start editing to see some magic happen :)</p>
//     </div>
//   );
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      status:true,
      employeeDetails:[{"name":"madhuri","salary":100000},{"name":"madhu","salary":500000},{"name":"tej","salary":123000},{"name":"harry","salary":15000}],
      index:0,
      colors:["#00ff80","#00ffff","#ff8000","#0080ff"]
    }
  }
  handleClick=(e)=>{
this.setState({
 status:!this.state.status
})
  }
  handlePrev=()=>{
    let {index,employeeDetails,colors} = this.state
    if(index>0){
      console.log(index)
      this.setState({
        index:index-1
      })

    }
  }
  handleNext=()=>{
    let {index,employeeDetails,colors} = this.state
    if(index<employeeDetails.length-1){
      console.log(index)
      this.setState({
        index:index+1
      })

    }
  }

  render(){
    let {index,employeeDetails,colors} = this.state
    return(
      <div>
        <h1>hello</h1>
        <button name="status" onClick={(e)=>{this.handlePrev()}} >onClick</button>
        <p>{this.state.status?"true":"false"}</p>
        <button  onClick = {()=>{this.handlePrev()}}>prev</button>
        <button onClick = {()=>{this.handleNext()}}>next</button>
        <div className="Card" style={{backgroundColor:colors[index]}} >
          <p>Employee Name :{employeeDetails[index].name}</p>
          <p>Salary:{employeeDetails[index].salary}</p>

        </div>
      </div>
    )
  }
}

export default App