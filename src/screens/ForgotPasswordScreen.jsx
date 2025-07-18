import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

const steps = ["Enter Email", "Verification", "New Password"];

const StepContent = ({
  step,
  email,
  setEmail,
  resetCode,
  setResetCode,
  newPassword,
  setNewPassword,
}) => {
  switch (step) {
    case 0:
      return (
        <TextField
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      );
    case 1:
      return (
        <TextField
          fullWidth
          label="Reset Code"
          variant="outlined"
          value={resetCode}
          onChange={(e) => setResetCode(e.target.value)}
          required
        />
      );
    case 2:
      return (
        <TextField
          fullWidth
          label="New Password"
          type="password"
          variant="outlined"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
      );
    default:
      return null;
  }
};

const ForgotPasswordScreen = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [email, setEmail] = useState("");
  const [resetCode, setResetCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleNext = () => {
    if (activeStep === 0 && !email) {
      alert("Please enter your email");
      return;
    }
    if (activeStep === 1 && !resetCode) {
      alert("Please enter the reset code");
      return;
    }
    if (activeStep === 2 && !newPassword) {
      alert("Please enter a new password");
      return;
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset successfully!");
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
          padding: 6,
          width: "90%",
          maxWidth: 550,
          borderRadius: 3,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(6px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={{ mb: 3 }}>
          Forgot Password
        </Typography>

        <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
          <StepContent
            step={activeStep}
            email={email}
            setEmail={setEmail}
            resetCode={resetCode}
            setResetCode={setResetCode}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
          />

          <Box sx={{ mt: 3, width: "100%" }}>
            {activeStep < steps.length - 1 ? (
              <Button
                variant="contained"
                onClick={handleNext}
                fullWidth
                size="large"
              >
                Next
              </Button>
            ) : (
              <Button variant="contained" type="submit" fullWidth size="large">
                Reset Password
              </Button>
            )}
          </Box>
        </Box>

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
      </Paper>
    </Box>
  );
};

export default ForgotPasswordScreen;
