import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const AddCategory = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add submission logic here
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        p: 4,
        boxSizing: "border-box",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
        sx={{
          maxWidth: 420,
          width: "100%",
          bgcolor: "background.paper",
          p: 4,
          borderRadius: 3,
          boxShadow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Typography variant="h6" fontWeight={600} color="text.primary" mb={1}>
          Add New Category
        </Typography>

        <TextField
          label="Category ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          fullWidth
        />

        <TextField
          label="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />

        <TextField
          label="Category Description"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />

        <Button type="submit" variant="contained" size="large" fullWidth>
          Add Category
        </Button>
      </Box>
    </Box>
  );
};

export default AddCategory;
