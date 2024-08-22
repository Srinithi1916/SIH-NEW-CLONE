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
  const [userType, setUserType] = useState('Normal User');
  const [formData, setFormData] = useState({
    name: '',
    damName: '',
    password: '',
    email: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setErrorMessage('');
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setFormData({
      name: '',
      damName: '',
      password: '',
      email: '',
      phoneNumber: ''
    });
    setErrors({});
    setErrorMessage('');
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name && userType === 'Admin') newErrors.name = 'Name is required';
    if (userType === 'Admin' && !formData.damName) newErrors.damName = 'Dam Name is required';
    if (userType === 'Normal User' && !formData.email) newErrors.email = 'Email is required';
    if (userType === 'Normal User' && !formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.password) newErrors.password = 'Password is required';

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
        try {
            const response = await axios.post('http://localhost:8080/api/login', { ...formData, userType });
            if (response.status === 200 && response.data === 'Login successful') {
                localStorage.setItem('username', formData.name); // Store username in localStorage
                navigate('/'); // Redirect to home page
            } else {
                setErrorMessage(response.data);
            }
        } catch (error) {
            setErrorMessage(error.response?.data || 'An unexpected error occurred');
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
              id="userType"
              select
              label="User Type"
              value={userType}
              onChange={handleUserTypeChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              fullWidth
              style={{ marginBottom: '20px' }}
            >
              <option value="Normal User">Normal User</option>
              <option value="Admin">Admin</option>
            </TextField>

            {userType === 'Admin' && (
              <>
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
              </>
            )}

            {userType === 'Normal User' && (
              <>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  style={{ marginBottom: '20px' }}
                />
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  style={{ marginBottom: '20px' }}
                />
              </>
            )}

            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
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

            {errorMessage && <p className='error-message'>{errorMessage}</p>}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>

            <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
              <Link to="/signup">Don't have an account? Sign Up</Link>
            </Typography>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Login;
