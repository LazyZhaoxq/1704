import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex);

const store= new Vuex.Store({
	state:{
		datalist:[],

	},

	mutations:{
		add(state,payload){
			console.log(payload);
			state.datalist.push(payload);
		}
	},

	getters:{
		activelist(state){
			return state.datalist.filter(function(item){
				return item.isChecked===false
			})
		}
	}
})

export default store;
