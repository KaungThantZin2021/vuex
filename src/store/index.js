import Vuex from "vuex";
import Vue from 'vue';
import Todo from "./modules/Todo";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { 
        Todo,
        a: {
            state: {
                name: 'hello from a module'
            }
        }
    },
});