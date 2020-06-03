import Vue from 'vue';
import VueRouter from 'vue-router';

import Homepage from '@/Pages/Homepage.vue';
import SuccessPage from '@/Pages/SuccessPage.vue';

import DocumentationsIndexPage from '@/Pages/Documentations/Index.vue';

import InstrumentsIndexPage from '@/Pages/Instruments/Index.vue';
import ClassesManagerFormPage from '@/Pages/Instruments/ClassesManager/Form.vue';
import ProjectsManagerPage from '@/Pages/Instruments/ProjectsManager/Index.vue';
import ProjectsManagerFormPage from '@/Pages/Instruments/ProjectsManager/Form.vue';
import LibrariesManagerPage from '@/Pages/Instruments/LibrariesManager/Index.vue';
import LibrariesManagerFormPage from '@/Pages/Instruments/LibrariesManager/Form.vue';

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
      name:'projects-manager',
      path: '/instruments/projects-manager',
      component: ProjectsManagerPage,
    },
    {
      name:'projects-manager-form',
      path: '/instruments/projects-manager/form',
      component: ProjectsManagerFormPage,
    },
    {
      name:'libraries-manager',
      path: '/instruments/libraries-manager',
      component: LibrariesManagerPage,
    },
    {
      name:'libraries-manager-form',
      path: '/instruments/libraries-manager/form',
      component: LibrariesManagerFormPage,
    }
]

const router = new VueRouter({routes, mode:'history'})  

export default router;
