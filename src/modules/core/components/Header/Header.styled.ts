import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";

export const Wrapper = styled(AppBar)(({ theme }) => ({
  height: "70px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 24px",
  top: 0,
  left: 0,
  backgroundColor: `${theme.palette.background.default}`,
  zIndex: "1300",
  flexDirection: "row",
  position: "sticky",
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
}));
