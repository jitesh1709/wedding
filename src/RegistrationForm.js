import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    mobile: '',
    password: '',
    email: '',
    address: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      if (response.status === 201) {
        setSuccess('Registration successful!');
        setError('');
        setFormData({
          username: '',
          name: '',
          mobile: '',
          password: '',
          email: '',
          address: '',
        });
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Register
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        
        <TextField
          label="Mobile"
          name="mobile"
          type="tel"
          value={formData.mobile}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />
        
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Box>
  );
};

export default RegistrationForm;
