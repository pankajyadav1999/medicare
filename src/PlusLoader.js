import React, { Component } from 'react';
import './App.css'; 

class PulsLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, 
    };
  }

  componentDidMount() { 
    setTimeout(() => {
      this.setState({ isLoading: false }); 
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="loader_start">
        {isLoading ? (
          <div className="loader">
            <div className="road">
               
              <i class="fa-solid fa-truck-medical"></i> 
            </div>
          </div>
        ) : (
          <div className="content text-center">
            <h1 className="fw-bolder">
              <span id='w'>W</span><span id='e'>E</span><span id='l'>L</span><span id='c'>C</span>
              <span id='o'>O</span><span id='m'>M</span><span id='e'>E</span><span id='dot'>.<span className='text-danger'>.</span>.</span>  </h1>
             <span> <i className="fa-solid fa-heart-pulse" id='heart'></i> </span> 
          
          </div>
        )}
      </div>
    );
  }
}

export default PulsLoader;
