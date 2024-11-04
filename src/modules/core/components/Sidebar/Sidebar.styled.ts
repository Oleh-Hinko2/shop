import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

export const Sidebar = styled(Drawer)(({ theme }) => ({
  width: "240px",
  flexShrink: 0,
  backgroundColor: theme.palette.background.default,

  "& .MuiDrawer-paper": {
    width: "240px",
    padding: "86px 8px 16px 8px",
    boxSizing: "border-box",
  },
}));
