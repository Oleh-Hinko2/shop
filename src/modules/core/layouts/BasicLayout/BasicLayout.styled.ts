import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Wrapper = styled(Box)(() => ({
  height: "100vh",
}));

export const Content = styled("main")(({ theme }) => ({
  flexGrow: 1,
  overflowY: "auto",
  padding: "20px",
  marginLeft: "240px",

  [theme.breakpoints.down("md")]: {
    padding: "16px",
    marginLeft: 0,
  },
}));

export const LoadingWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
}));
