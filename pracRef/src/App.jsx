import  { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Waiting for the specific date...',
      targetDate: new Date('2024-07-10T12:00:00'), // Set your target date and time here
      hasDateExceeded: false,
    };
  }

  componentDidMount() {
    this.checkDateInterval = setInterval(this.checkDate, 1000); // Check every second
  }

  componentWillUnmount() {
    clearInterval(this.checkDateInterval);
  }

  checkDate = () => {
    const currentTime = new Date();
    if (currentTime >= this.state.targetDate && !this.state.hasDateExceeded) {
      this.setState({ 
        message: 'The target date has been exceeded!',
        hasDateExceeded: true 
      });
      clearInterval(this.checkDateInterval); // Stop the interval once the date is exceeded
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
