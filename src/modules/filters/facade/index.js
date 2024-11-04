import { useEffect } from "react";
import { useFiltersStore } from "../store";

export const useFiltersFacade = () => {
  const categories = useFiltersStore((state) => state.categories);

  const fetchCategoriesSync = useFiltersStore(
    (state) => state.fetchCategoriesSync
  );

  useEffect(() => {
    const fetchData = async () => {
      await fetchCategoriesSync();
    };

    fetchData();
  }, []);

  return {
    categories,
  };
};
