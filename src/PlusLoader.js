import React, { Component } from 'react';
import './App.css'; 

class PulsLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true, // Loader is visible initially
    };
  }

  componentDidMount() {
    // Simulate a delay (e.g., fetching data or rendering time)
    setTimeout(() => {
      this.setState({ isLoading: false }); // Hide loader after 3 seconds
    }, 3000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <div className="loader_start">
        {isLoading ? (
          <div className="loader">
            <div className="road">
              {/* The truck icon moves across the road */}   
              <i class="fa-solid fa-truck-medical moving-truck"></i> 
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
