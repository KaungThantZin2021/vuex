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
        },
        addTodo(state, newTodo) {
            state.todos.unshift(newTodo);
        },
        removeTodo(state, removeId) {
            state.todos = state.todos.filter(todo => {
                return todo.id != removeId;
            });
        }
    },
    actions: {
        async getTotos({commit}) { // {commit} is object destructuring
            let res = await axios.get('https://jsonplaceholder.typicode.com/todos');
            let todos = res.data;
            console.log(todos);
            commit('setTodos', todos);
        },
        async addTodo(context, newTodo) {
            let res = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
            console.log(res);
            context.commit('addTodo', res.data);
        },
        async deleteTodo(context, removeId) {
            await axios.delete(`https://jsonplaceholder.typicode.com/todos/${removeId}`);
            context.commit('removeTodo', removeId);
        }
    },
}