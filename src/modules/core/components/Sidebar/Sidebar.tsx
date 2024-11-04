import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import * as S from "./Sidebar.styled";
import Button from "@mui/material/Button";

interface SidebarProps {
  children?: ReactNode;
  buttonText: string;
  onButtonClick: () => void;
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({
  children,
  buttonText,
  onButtonClick,
  open,
  onClose,
}: SidebarProps) => {
  const theme = useTheme();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {mediumScreen && (
        <Button
          onClick={onButtonClick}
          color="primary"
          variant="outlined"
          sx={{ width: "100px", margin: "8px" }}
        >
          {buttonText}
        </Button>
      )}
      <S.Sidebar
        variant={mediumScreen ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        onClose={onClose}
      >
        {children}
      </S.Sidebar>
    </>
  );
};

export default Sidebar;
