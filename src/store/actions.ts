import { api } from "../services/api";

export async function searchMeals({ commit }: any, keyword: string) {
  const { data } = await api.get(`/search.php?s=${keyword}`)
  commit('setSearchMeals', data.meals)
}