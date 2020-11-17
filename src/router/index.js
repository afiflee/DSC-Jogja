import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import(/* webpackChunkName: "agenda" */ '../views/Schedule.vue'),
    meta: {
      title: 'Schedule | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/community-guidelines',
    name: 'Community Guidelines',
    component: () => import(/* webpackChunkName: "Community Guidelines" */ '../views/CommunityGuidelines.vue'),
    meta: {
      title: 'Community Guidelines | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/partners',
    name: 'Partners',
    component: () => import(/* webpackChunkName: "partners" */ '../views/Partners.vue'),
    meta: {
      title: 'Partners | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/volunteers',
    name: 'Volunteers',
    component: () => import(/* webpackChunkName: "volunteers" */ '../views/Volunteers.vue'),
    meta: {
      title: 'Volunteers | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue'),
    meta: {
      title: 'Registration | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/Speakers.vue'),
    meta: {
      title: 'Speakers | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/FAQ.vue'),
    meta: {
      title: 'FAQ | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/coc',
    name: 'CodeofConducts',
    component: () => import(/* webpackChunkName: "speakers" */ '../views/COC.vue'),
    meta: {
      title: 'Code of Conducts | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue'),
    meta: {
      title: 'Team | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '/tc',
    name: 'ParticipationTerms',
    component: () => import(/* webpackChunkName: "ParticipationTerms" */ '../views/TC.vue'),
    meta: {
      title: 'Participation Terms & Privacy Policy | JogFest 2020',
      color: 'white'
    }
  },
  {
    path: '*',
    name: 'redirect',
    redirect: {
      path: '/'
    },
    meta: {
      title: `Redirect `,
      color: "white",
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
