import { useState } from "react";
import { Typography } from "@mui/material";
import AddFab from "../components/AddFab";
import CategoryDialog from "./CategoryDialog.jsx";

const ViewCategory = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const handleSave = (categoryData) => {
    console.log("Saved category:", categoryData);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Category
      </Typography>

      <AddFab onClick={handleOpenDialog} />

      <CategoryDialog
        open={open}
        onClose={handleCloseDialog}
        onSave={handleSave}
      />
    </>
  );
};

export default ViewCategory;
