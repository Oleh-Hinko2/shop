import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export const Card = styled(MuiCard)(() => ({
  cursor: "pointer",
  "&:hover": {
    boxShadow:
      "0px 5px 4px -1px rgba(0, 0, 0, 0.2), 0px 3px 1px 1px rgba(0, 0, 0, 0.14), 2px 1px 4px 0px rgba(0, 0, 0, 0.12)",
  },
}));

export const Description = styled(Typography)(() => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
  webkitLineClamp: 2,
  height: "40px",
}));
