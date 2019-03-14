import Vue from 'vue'
import Vuex from 'vuex'
import pagesSrb from '../data/pages_srb.json'
import servicesSrb from '../data/services_srb.json'
import pagesEn from '../data/pages_en.json'
import servicesEn from '../data/services_en.json'
import mutations from './mutations'
import getters from './getters'
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    pagesSrb: pagesSrb,
    servicesSrb: servicesSrb,
    pagesEn: pagesEn,
    servicesEn: servicesEn,
    isMenuOpen: false
  },
  getters,
  mutations,
  modules: {
  	app
  }
})

export default store
