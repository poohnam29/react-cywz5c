import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
   this.state={
     value1:0,
     value2:0,
     value3:0,
     value4:0,
     avg:0
   };
    }
 average=()=>{
  let  avg=(parseInt(this.state.value1)+parseInt(this.state.value2)+parseInt(this.state.value3)+parseInt(this.state.value4))/4
  alert("Average is"+avg)
 }
  render() {
    return (
       <form >
        <div>
          Chemistry:
          <input style={{marginLeft:"40px"}}type="number" name="value1" value={this.state.value1} onChange={(event)=>{this.setState({value1:event.target.value})}}
     />
        </div>
         <div>
          Physics 
          <input style={{marginLeft:"62px"}} type="number" name="value2" value={this.state.value2} onChange={(event)=>{this.setState({value2:event.target.value})}}
     />
        </div>
         <div>
          Biology:
          <input style={{marginLeft:"55px"}} type="number"name="value3" value={this.state.value3} onChange={(event)=>{this.setState({value3:event.target.value})}}
   />
        </div>
         <div>
          Mathematics:
          <input style={{marginLeft:"24px"}}type="number" name="value4" value={this.state.value4}onChange={(event)=>{this.setState({value4:event.target.value})}} 
    />
        </div>
        <button style={{marginTop:"20px",backgroundColor:"white"}}onClick={this.average}> Find Average </button>
      </form>
    );
  }
}

render(<App />, document.getElementById('root'));
