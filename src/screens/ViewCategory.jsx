import { useState } from "react";
import {
  Typography,
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const ViewCategory = () => {
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

  const handleSave = () => {
    console.log({ id, name, description });
    handleCloseDialog();
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Category
      </Typography>

      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: 20, right: 28 }}
        onClick={handleOpenDialog}
      >
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Add New Category</DialogTitle>
        <DialogContent dividers>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 1 }}>
            <TextField
              label="Category ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              fullWidth
              margin="normal"
              autoFocus
            />
            <TextField
              label="Category Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Category Description"
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
          <Button variant="contained" onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewCategory;
