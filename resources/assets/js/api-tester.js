import './plugins/env.js'
import './vuex/vuex-installer.js'
import './plugins/api_demo/api-demo-installer.js'

import Vue from 'vue'
import vmApiTesterMain from './api-tester-main.vue'
import store from './vuex/store.js'

new Vue({
    store,
    el: '#api-tester',
    components: {
        vmApiTesterMain
    },
})