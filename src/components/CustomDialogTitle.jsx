import { DialogTitle, IconButton, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomDialogTitle = ({ title, onClose }) => {
  return (
    <DialogTitle sx={{ position: "relative", px: 2, pb: 2, pt: 1.5 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          fontWeight: 500,
        }}
      >
        {title}
      </Typography>

      {onClose && (
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </DialogTitle>
  );
};

export default CustomDialogTitle;
