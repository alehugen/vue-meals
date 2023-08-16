import { createRouter, createWebHistory} from 'vue-router'
import Home from '../Views/Home.vue'
import MealsByIngredients from '../Views/MealsByIngredients.vue'
import MealsByLetter from '../Views/MealsByLetter.vue'
import MealsByName from '../Views/MealsByName.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import GuestLayout from '../components/GuestLayout.vue'
import MealDetails from '../Views/MealDetails.vue'
import Ingredients from '../Views/Ingredients.vue'


const routes = [
  {
   path: '/',
   component: DefaultLayout,
   children: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/by-name/:name?',
      name: 'byName',
      component: MealsByName,
    },
    {
      path: '/letter/:letter?',
      name: 'byLetter',
      component: MealsByLetter,
    }, 
    {
      path: '/ingredients',
      name: 'ingredients',
      component: Ingredients,
    },
    {
      path: '/by-ingredients/:ingredients',
      name: 'byIngredients',
      component: MealsByIngredients,
    },
    {
      path: '/meal/:id',
      name: 'mealDetails',
      component: MealDetails,
    }
   ]
  },
  {
    path: '/guest',
    component: GuestLayout,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router