import { useState } from "react";
import {Typography,Dialog,DialogTitle,
        DialogContent,DialogActions,Button,
         TextField,Box
} from "@mui/material";
import AddFab from "../components/AddFab";

const ViewProduct = () => {
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);

  const handleCloseDialog = () => {
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setId("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log({ id });
    handleCloseDialog();
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Products
      </Typography>

      <AddFab onClick={handleOpenDialog} />

      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Add New Product</DialogTitle>
        <DialogContent dividers>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }} 
          onSubmit={handleSave}>
            <TextField
              label="Product ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              fullWidth
              autoFocus
            />
            </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewProduct;
