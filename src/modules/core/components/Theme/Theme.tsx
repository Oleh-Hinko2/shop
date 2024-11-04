import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import { useColorScheme } from "@mui/material/styles";

import * as S from "./Theme.styled";
import { ChangeEvent } from "react";

const Theme = () => {
  const { mode, setMode } = useColorScheme();

  if (!mode) {
    return null;
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMode(event.target.value as "light" | "dark");
  };

  return (
    <S.Wrapper>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-theme-toggle"
          name="theme-toggle"
          row
          value={mode}
          onChange={handleChange}
        >
          <S.FormControlLabel
            value="light"
            control={<Radio size="small" />}
            label="Light"
          />
          <S.FormControlLabel
            value="dark"
            control={<Radio size="small" />}
            label="Dark"
            color="primary"
          />
        </RadioGroup>
      </FormControl>
    </S.Wrapper>
  );
};

export default Theme;
