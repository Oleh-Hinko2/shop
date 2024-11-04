import { create } from "zustand";
import { fetchCategories } from "../api";
import { CategoryType, CategoryOptionType } from "../models";

type FiltersStore = {
  categories: CategoryType[];
  selectedCategory: CategoryOptionType | null;
  fetchCategoriesSync: () => Promise<void>;
  setSelectedCategory: (category: CategoryOptionType | null) => void;
};

export const useFiltersStore = create<FiltersStore>((set) => ({
  categories: [],
  selectedCategory: null,
  fetchCategoriesSync: async () => {
    const { data } = await fetchCategories();
    set(() => ({ categories: data.data }));
  },
  setSelectedCategory: (category: CategoryOptionType | null) => {
    set(() => ({ selectedCategory: category }));
  },
}));
