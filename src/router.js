import Vue from 'vue'
import Router from 'vue-router/dist/vue-router.js'

import index from './pages/index.vue'
import rule from './pages/rule.vue'
import login from './pages/login.vue'
import register from './pages/register.vue'
import challenges from './pages/challenges.vue'
import scoreboard from './pages/scoreboard.vue'
import players from './pages/players.vue'
import user from './pages/user.vue'
import team from './pages/team.vue'
import confirm from './pages/confirm.vue'
import resetrequest from './pages/resetrequest.vue'
import reset from './pages/reset.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/rule',
            component: rule,
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/register',
            component: register
        },
        {
            path: '/challenges',
            component: challenges
        },
        {
            path: '/scoreboard',
            component: scoreboard
        },
        {
            path: '/players',
            component: players
        },
        {
            path: '/user/:user_id',
            component: user,
        },
        {
            path: '/team/:team_id',
            component: team,
        },
        {
            path: '/confirm/:token',
            component: confirm,
        },
        {
            path: '/reset',
            component: resetrequest,
        },
        {
            path: '/reset/:token',
            component: reset,
        },
    ]
})
