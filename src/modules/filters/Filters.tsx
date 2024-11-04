import Typography from "@mui/material/Typography";
import { Categories } from "./components/Categories";
import { useFiltersFacade } from "./facade";

import * as S from "./Filters.styled";

const Filters = () => {
  const { categories } = useFiltersFacade();

  return (
    <S.Wrapper>
      <Typography variant="h5">Filters</Typography>
      <Categories categories={categories} />
    </S.Wrapper>
  );
};

export default Filters;
