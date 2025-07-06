import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddFab = ({ onClick }) => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      sx={{ position: "fixed", bottom: 20, right: 28 }}
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
};

export default AddFab;
