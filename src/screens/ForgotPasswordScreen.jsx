import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9fafb",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 5,
          width: "90%",
          maxWidth: 380,
          borderRadius: 3,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold", color: "text.primary", mb: 1 }}
        >
          Forgot Password
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{ mb: 1, pt: 1, color: "text.secondary" }}
        >
          Enter your email address and we’ll send you a link to reset your
          password.
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2 }}
          >
            Send Reset Link
          </Button>

          <Box mt={2} textAlign="center">
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                color: "#388e3c",
                fontWeight: 500,
              }}
            >
              Back to Login
            </Link>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ForgotPasswordScreen;
