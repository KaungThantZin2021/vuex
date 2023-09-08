import axios from "axios";

export default {
    state: {
        todos: []
    },
    getters: {
        myTodos(state) {
            return state.todos;
        }
    },
    mutations: {
        setTodos(state, todos) {
            state.todos = todos;
        }
    },
    actions: {
        async getTotos({commit}) {
            let res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            let todos = res.data;
            console.log(todos);
            commit('setTodos', todos)
        }
    },
}