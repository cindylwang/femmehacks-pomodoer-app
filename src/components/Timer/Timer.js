import React, {Component} from 'react';
import './Timer.css'
import Button from 'react-bootstrap/Button';


class OurTimer extends Component {
    constructor(props) {
      super(props);
      this.state ={
        started: false,
        work: true,
        count: 1500,
        // minutes: 24,
        // seconds: 59,
        over: false,
      }
    }
  
  //   //handling if work/rest or start/stop button is pushed, alters states so we can change state-reliant displays later
    handleClick() {
      this.setState({
        started: (!this.state.started),
        work: (!this.state.work),
      })
    }
  
  //   componentDidMount(){
  //     const {startCount} = this.props
  //     this.setState({
  //         count: startCount
  //     })
  //     if (this.state.started === true) {
  //       this.interval = setInterval(()=>{
  //         this.setState(prevState =>({
  //             count: prevState.count - 1
  //             }))
  //         }, 1000)
  //     }

  // }



 


  // componentWillUnmount(){
  //     clearInterval(this.interval)
  // }
    
    render () {
      let startStatus = (this.state.started ? 'STOP' : 'START');
      let workStatus = (this.state.work ? 'REST' : 'WORK');
      // const {count} = this.state

      return (
        <section className="timer-container">
          <row>
            <p>hello please work</p>
          {/* hopefully renders buttons in a row on top of the timer. added custom css for the buttons too!*/}
          <Button variant="secondary" onClick={this.handleClick()}>{startStatus}</Button>{' '}
          <Button variant="secondary" onClick={this.handleClick()}>{workStatus}</Button>{' '}
          </row>
          <section className="timer">
            <div>
                {/* <h1>{count}</h1> */}
            </div>
          </section>
        </section> 
      )
    }
    
    
  }

  // exporting component
  export default OurTimer





//     const tick = () => {
//       if (this.state.work === false || this.state.over === false)
//       if (this.state.minutes === 0 && this.state.seconds === 0) this.setState({over: true});
//       else if (this.state.rest === true) rest();
//       else if (this.state.seconds === 0) {
//          this.setState({minutes: this.state.minutes - 1})
//          this.setState({seconds: 59})
//       } else {
//          this.setState({seconds: this.state.seconds - 1})
//       }

//     const rest = () => {
          // if (this.state.work === true) return;
          // else{
          //   this.setState({minutes: 4})
          //   this.setState({seconds: 59})
          // if (this.state.seconds === 0) {
            //  this.setState({minutes: this.state.minutes - 1})
            //  this.setState({seconds: 59})
            //} else {
            //  this.setState({seconds: this.state.seconds - 1})
          // } 
//      }
  
  
