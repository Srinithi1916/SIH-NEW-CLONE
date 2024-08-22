import React, { useState } from 'react';
import video from '../assests1/video.mp4';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const [userType, setUserType] = useState('Normal User');
  const [formData, setFormData] = useState({
    name: '',
    damName: '',
    state: '',
    govtId: '',
    email: '',
    phoneNumber: '',
    password: ''
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
      state: '',
      govtId: '',
      email: '',
      phoneNumber: '',
      password: ''
    });
    setErrors({});
    setErrorMessage('');
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (userType === 'Admin' && !formData.damName) newErrors.damName = 'Dam Name is required';
    if (userType === 'Admin' && !formData.state) newErrors.state = 'State is required';
    if (userType === 'Admin' && !formData.govtId) newErrors.govtId = 'Government ID is required';
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
            const response = await axios.post('http://localhost:8080/api/signup', { ...formData, userType });
            if (response.status === 200 && response.data === 'Signup successful') {
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
    <div className='signup-container'>
      <video className='signup-background' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>

      <div className='signup-content'>
        <Paper elevation={10} square className="signup-paper" style={{ backgroundColor: "silver", maxWidth: '500px', padding: '20px', margin: 'auto', marginTop: '50px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Signup
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              id="userType"
              label="User Type"
              name="userType"
              value={userType}
              onChange={handleUserTypeChange}
              select
              fullWidth
              required
              SelectProps={{ native: true }}
            >
              <option value="Normal User">Normal User</option>
              <option value="Admin">Admin</option>
            </TextField>

            <TextField
              id="name"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              helperText={errors.name}
              error={Boolean(errors.name)}
            />

            {userType === 'Admin' && (
              <>
                <TextField
                  id="damName"
                  label="Dam Name"
                  name="damName"
                  value={formData.damName}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  helperText={errors.damName}
                  error={Boolean(errors.damName)}
                />
                <TextField
                  id="state"
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  helperText={errors.state}
                  error={Boolean(errors.state)}
                />
                <TextField
                  id="govtId"
                  label="Government ID"
                  name="govtId"
                  value={formData.govtId}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  helperText={errors.govtId}
                  error={Boolean(errors.govtId)}
                />
              </>
            )}

            {userType === 'Normal User' && (
              <>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  helperText={errors.email}
                  error={Boolean(errors.email)}
                />
                <TextField
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  helperText={errors.phoneNumber}
                  error={Boolean(errors.phoneNumber)}
                />
              </>
            )}

            <TextField
              id="password"
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
              helperText={errors.password}
              error={Boolean(errors.password)}
            />

            {errorMessage && (
              <Typography color="error" align="center" gutterBottom>
                {errorMessage}
              </Typography>
            )}

            <Button type="submit" variant="contained" color="primary" fullWidth>
              Signup
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default Signup;
