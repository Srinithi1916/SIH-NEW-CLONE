import React, { useState } from 'react';
import video from '../assests1/video.mp4';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    damName: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setErrorMessage('');
  };

  const validate = () => {
    const newErrors = {};
  
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.damName) newErrors.damName = 'Dam Name is required';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/api/login', formData);
        if (response.data === 'Login successful') {
          setIsLoggedIn(true);
          localStorage.setItem('username', formData.name); // Store username in localStorage
          navigate('/'); // Redirect to home page
        } else {
          // Ensure the error message is a string
          setErrorMessage(String(response.data)); // Convert to string if it's not already
        }
      } catch (error) {
        if (error.response) {
          // Convert the error object to a string
          setErrorMessage(String(error.response.data.message || 'An unexpected error occurred'));
        } else {
          setErrorMessage('An unexpected error occurred');
        }
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='login-container'>
      <video className='login-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='login-content'>
        <Paper elevation={10} square className="login-paper" style={{ backgroundColor: "silver", maxWidth: '300px', padding: '20px', margin: 'auto', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <center>
            <div className='id1'></div>
            <br />
          </center>

          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              style={{ marginBottom: '20px' }}
            />

            <TextField
              id="damName"
              name="damName"
              label="Dam Name"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your dam name"
              value={formData.damName}
              onChange={handleChange}
              error={!!errors.damName}
              helperText={errors.damName}
              style={{ marginBottom: '20px' }}
            />

            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
              style={{ marginBottom: '20px' }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              style={{ marginBottom: '20px' }}
            >
              Login
            </Button>
          </form>
          
          {errorMessage && (
            <Typography color="error" align="center">
              {errorMessage}
            </Typography>
          )}

          <Link to="/signup" style={{ display: 'block', textAlign: 'center', marginTop: '10px' }}>
            Need to signup?
          </Link>
        </Paper>
      </div>
    </div>
  );
};

export default Login;