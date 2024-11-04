import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

export const Wrapper = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "background.default",
  color: "text.primary",
  borderRadius: 1,
  p: 3,
  minHeight: "56px",
}));

export const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    color: theme.palette.grey[700],
  },
}));
