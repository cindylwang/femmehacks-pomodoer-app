import React, {Component} from 'react';
import './Timer.css'
import Button from 'react-bootstrap/Button';
import './ToDoList.css';


class OurTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: true,
      work: true,
      minutes: 24,
      seconds: 59,
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

componentDidMount(){
  const startCount = this.state.seconds
  this.setState({
      seconds: startCount
  })
  if (this.state.started === true) {
    this.interval = setInterval(()=>{
      this.setState(prevState =>({
          seconds: prevState.seconds - 1
          }))
      }, 1000)
  }
}




componentWillUnmount(){
    clearInterval(this.interval)
}
  
  render () {
    let startStatus = (this.state.started ? 'STOP' : 'START');
    let workStatus = (this.state.work ? 'REST' : 'WORK');
    const seconds = this.state.seconds;
    const time = this.state.minutes + ":" + this.state.seconds

    return (
      <section className="timer-container">
        {/* <div className = 'buttons'>
          {/* <Button variant="secondary" >{startStatus}</Button>{' '}
          <Button variant="secondary" >{workStatus}</Button>{' '} */}
        {/* </div>  */}
        <section className="timerTimer">
          <div>
              <h1>{time}</h1>
          </div>
        </section>
      </section> 
    )
  }
  
  
}

  // exporting component
  export default OurTimer


  {/* hopefully renders buttons in a row on top of the timer. added custom css for the buttons too!*/}
          



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