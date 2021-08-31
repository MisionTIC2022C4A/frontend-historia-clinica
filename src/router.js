import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import BuscarPaciente from './components/BuscarPaciente'
import IngresarPaciente from './components/IngresarPaciente'
import MostrarPaciente from './components/MostrarPaciente'
import Home from './components/Home'


const routes = [{
        path: '/',
        name: 'root',
        component: Home
    },
    {
        path: '/buscarPaciente/',
        name: "buscarPaciente",
        component: BuscarPaciente
    },
    {
        path: '/ingresarPaciente/',
        name: "ingresarPaciente",
        component: IngresarPaciente
    },
    {
        path: '/mostrarPaciente/:patient',
        name: "mostrarPaciente",
        component: MostrarPaciente,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(''),
    routes
})

export default router