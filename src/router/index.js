import Vue from 'vue';
import VueRouter from 'vue-router';

import Homepage from '@/Pages/Homepage.vue';
import SuccessPage from '@/Pages/SuccessPage.vue';

import DocumentationsIndexPage from '@/Pages/Documentations/Index.vue';

import InstrumentsIndexPage from '@/Pages/Instruments/Index.vue';
import ClassesManagerFormPage from '@/Pages/Instruments/ClassesManager/Form.vue';
import CategoriesManagerPage from '@/Pages/Instruments/CategoriesManager/Index.vue';
import CategoriesManagerFormPage from '@/Pages/Instruments/CategoriesManager/Form.vue';

Vue.use(VueRouter)

const routes = [
    {
      name:'homepage',
      path: '/',
      component: Homepage,
    },
    {
      name:'successpage',
      path: '/succsess',
      component: SuccessPage,
    },
    {
      name:'documentations',
      path: '/documentations',
      component: DocumentationsIndexPage,
    },
    {
      name:'instruments',
      path: '/instruments',
      component: InstrumentsIndexPage,
    },
    {
      name:'classes-manager-form',
      path: '/instruments/classes-manager/form',
      component: ClassesManagerFormPage,
    },
    {
      name:'categories-manager',
      path: '/instruments/categories-manager',
      component: CategoriesManagerPage,
    },
    {
      name:'categories-manager-form',
      path: '/instruments/categories-manager/form',
      component: CategoriesManagerFormPage,
    }
]

const router = new VueRouter({routes, mode:'history'})  

export default router;
