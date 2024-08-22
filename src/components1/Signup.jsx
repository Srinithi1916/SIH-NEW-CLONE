import React, { useState } from 'react';
import axios from 'axios';
import video from '../assests2/video.mp4';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    damName: '',
    state: '',
    password: '',
    govtId: ''
  });
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  // Handle changes to form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // Validate form data
  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.damName) newErrors.damName = 'Dam Name is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.govtId) newErrors.govtId = 'Government ID Number is required';

    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.*\W).{5,15}$/;
    if (formData.password && !passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 5-15 characters long and include an uppercase letter, lowercase letter, and a special character';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post('http://localhost:8080/api/signup', formData, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });

        if (response.status === 200) {
          localStorage.setItem('username', formData.name); // Store username
          navigate('/'); // Redirect to home page
        } else {
          setResult('Signup failed: ' + response.data.message);
        }
      } catch (error) {
        console.error('Error submitting signup form', error);
        setResult('Signup failed: ' + error.message);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='signup-container'>
      <video className='signup-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <div className='signup-content'>
        <Paper elevation={10} square className="signup-paper" style={{ backgroundColor: "silver", maxWidth: '300px', padding: '20px', margin: 'auto', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Signup
          </Typography>
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
              id="state"
              name="state"
              label="State"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your state"
              value={formData.state}
              onChange={handleChange}
              error={!!errors.state}
              helperText={errors.state}
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
            <TextField
              id="govtId"
              name="govtId"
              label="Government ID Number"
              variant="outlined"
              fullWidth
              required
              placeholder="Enter your government ID number"
              value={formData.govtId}
              onChange={handleChange}
              error={!!errors.govtId}
              helperText={errors.govtId}
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
              Signup
            </Button>
          </form>
          <Typography variant="body2" color="textSecondary" align="center">
            {result}
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

export default Signup;