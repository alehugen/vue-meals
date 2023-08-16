import { api } from "../services/api";

export async function searchMeals({ commit }: any, keyword: string) {
  const { data } = await api.get(`/search.php?s=${keyword}`)
  commit('setSearchMeals', data.meals)
}

export async function searchMealsByLetter({ commit }: any, letter: string) {
  const { data } = await api.get(`/search.php?s=${letter}`)
  commit('setMealsByLetter', data.meals)
}

export async function searchMealsByIngredient({ commit }: any, ingredient: string) {
  const { data } = await api.get(`/search.php?s=${ingredient}`)
  commit('setMealsByIngredient', data.meals)
}