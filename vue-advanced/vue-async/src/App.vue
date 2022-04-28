<template>
  <div id="app">
    <div>
      <button @click="loginUser">login</button>
      <h1>List</h1>
      <ul>
        <li :key="item.id" v-for="item in items">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from './utils/handler';

export default {
  name: 'App',
  data() {
    return {
      items: []
    }
  },
  methods: {
    loginUser1() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(response => {
            if (response.data.id === 1) {
              axios.get('https://jsonplaceholder.typicode.com/todos')
                  .then(
                      response => {
                        this.items = response.data;
                      }
                  )
                  .catch()
            }
          })
          .catch(error => console.log(error))
    },
    async loginUser() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if (response.data.id === 1) {
          const list = await axios.get('https://jsonplaceholder.typicode.com/todos')
          this.items = list.data;
        }
      } catch (error) {
        // utils/handler.js에 error 처리의 공통화를 가능하게 함.
        handleException(error);
        console.log(error)
      }
    }
  }
}
</script>
