import { useState } from "react";
import { Typography } from "@mui/material";
import AddFab from "../components/AddFab";
import BrandDialog from "./BrandDialog.jsx"

const ViewBrand = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpenDialog = () => setOpen(true);
  const handleCloseDialog = () => setOpen(false);

  const handleSave = (brandData) => {
    console.log("Saved brand:", brandData);
  };

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        Brand
      </Typography>

      <AddFab onClick={handleOpenDialog} />

      <BrandDialog
        open={open}
        onClose={handleCloseDialog}
        onSave={handleSave}
      />
    </>
  );
};

export default ViewBrand;
