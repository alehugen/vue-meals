import { createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/Home.vue'
import MealList from '../Views/MealList.vue'
import MealsByIngredients from '../Views/MealsByIngredients.vue'
import MealsByLetter from '../Views/MealsByLetter.vue'
import MealsByName from '../Views/MealsByName.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/by-name/:name',
    name: 'byName',
    component: MealsByName,
  },
  {
    path: '/letter/:letter',
    name: 'byLetter',
    component: MealsByLetter,
  }, 
  {
    path: '/by-ingredients/:ingredients',
    name: 'byIngredients',
    component: MealsByIngredients,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router