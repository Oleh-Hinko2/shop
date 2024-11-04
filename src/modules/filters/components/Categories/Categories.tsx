import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { CategoryOptionType, CategoryType } from "../../models";
import { useFiltersStore } from "../../store";
import { useProductsStore } from "../../../products";

type CategoriesProps = {
  categories: CategoryType[];
};

const Categories = ({ categories }: CategoriesProps) => {
  const fetchProductsSync = useProductsStore(
    (state) => state.fetchProductsSync
  );
  const selectedCategory = useFiltersStore((state) => state.selectedCategory);
  const setSelectedCategory = useFiltersStore(
    (state) => state.setSelectedCategory
  );

  const options: CategoryOptionType[] = categories.map((category) => ({
    id: category.id,
    label: category.name,
    value: category.id,
  }));

  const handleChange = (_: any, value: CategoryOptionType | null) => {
    if (value?.id) {
      fetchProductsSync(value.id);
      setSelectedCategory(value);
      return;
    }

    fetchProductsSync();
    setSelectedCategory(value);
  };

  return (
    <Autocomplete
      disablePortal
      options={options}
      value={selectedCategory}
      sx={{ width: "100%" }}
      onChange={handleChange}
      clearOnBlur={false}
      renderInput={(params) => <TextField {...params} label="Categories" />}
    />
  );
};

export default Categories;
