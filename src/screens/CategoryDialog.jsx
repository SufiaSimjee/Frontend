import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CustomDialogTitle from "../components/CustomDialogTitle";

const CategoryDialog = ({ open, onClose, onSave }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const resetForm = () => {
    setId("");
    setName("");
    setDescription("");
    setImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
        setImagePreview(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ id, name, description, image }); 
    resetForm();
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <CustomDialogTitle title="Add New Category" onClose={onClose} />
      <DialogContent dividers>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ mt: 1 }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Category ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            fullWidth
            autoFocus
          />
          <TextField
            label="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />

          {imagePreview && (
            <Box mt={2} textAlign="center">
              <Typography variant="subtitle2">Image Preview</Typography>
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  width: "100%",
                  maxHeight: 200,
                  objectFit: "contain",
                }}
              />
            </Box>
          )}

          <Button
            variant="outlined"
            component="label"
            fullWidth
            size="large"
            sx={{ mt: 2 }}
          >
            Upload Category Image
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>

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
        <Button variant="contained" color="primary" onClick={handleSubmit} size="large" fullWidth sx={{m : 1}}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryDialog;
