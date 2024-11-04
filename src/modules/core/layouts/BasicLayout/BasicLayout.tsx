import { ReactNode } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Header } from "../../components";
import { Filters } from "../../../filters";

import * as S from "./BasicLayout.styled";
import { Sidebar } from "../../components/Sidebar";
import { useDrawer } from "../../hooks";

interface BasicLayoutProps {
  children?: ReactNode;
  loading: boolean;
}

const BasicLayout = ({ children, loading }: BasicLayoutProps) => {
  const { open, onToggle } = useDrawer();

  return (
    <S.Wrapper display="flex" flexDirection="column">
      <Header />
      <Sidebar
        open={open}
        buttonText="Filters"
        onButtonClick={onToggle}
        onClose={onToggle}
      >
        <Filters />
      </Sidebar>
      <S.Content>
        {loading ? (
          <S.LoadingWrapper>
            <CircularProgress size={100} />
          </S.LoadingWrapper>
        ) : (
          children
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default BasicLayout;
