import { useState } from "react";
import {Typography,Dialog,DialogTitle,
        DialogContent,DialogActions,Button,
         TextField,Box
} from "@mui/material";
import AddFab from "../components/AddFab";

const ViewBrand = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);

  const handleCloseDialog = () => {
    setOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setId("");
    setName("");
    setDescription("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log({ id, name, description });
    handleCloseDialog();
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Brand
      </Typography>

      <AddFab onClick={handleOpenDialog} />

      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Add New Brand</DialogTitle>
        <DialogContent dividers>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }} 
          onClick={handleSave}>
            <TextField
              label="Brand ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              fullWidth
              autoFocus
            />
            <TextField
              label="Brand Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Brand Description"
              multiline
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              margin="normal"
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

export default ViewBrand;
