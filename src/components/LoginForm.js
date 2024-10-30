import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
      const response = await axios.post('/api/login', formData); // Update API URL as needed
      if (response.status === 200) {
        setSuccess('Login successful!');
        setError('');
        setFormData({
          username: '',
          password: '',
        });
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
      setSuccess('');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4, p: 2, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Login
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
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          required
          margin="normal"
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
