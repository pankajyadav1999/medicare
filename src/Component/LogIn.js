import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
    };
  }

  componentDidMount() {
    console.log('Login component mounted');
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    const errors = {};

    // Basic validation
    if (!username) errors.username = 'Username is required';
    if (!password) errors.password = 'Password is required';

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      // Dummy login logic
      if (username === 'Pankaj' && password === 'Pankaj@123') {
        // Simulate login success
        alert('Login successful!');
        // Redirect to /home or any protected route
        window.location.href = '/home';
      } else {
        alert('Invalid credentials');
      }
    }
  };

  render() {
    const { username, password, errors } = this.state;

    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          backgroundColor: '#f4f4f4',
          margin: 0,
        }}
      >
        <div className="card" style={{ width: '400px' }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Login</h3>
            <form onSubmit={this.handleSubmit}>
              {/* Username */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  id="username"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  placeholder="Enter your username"
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
