<template>
  <div>
    <h1>안녕하세요ㅎㅎ</h1>
    <h2>{{ message }}</h2>
    <ul>
        <button @click="getPosts">가즈아</button>
        
        <li v-for="post in posts" :key="post.id">
            {{ post.title }}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "GreatComponent",
  data: function () {
      return {
          message: 'hi',
          posts: []
      }
  },
  methods: {
      getPosts: function() {
          axios.get('https://koreanjson.com/posts')
            .then(res => this.posts = res.data)
      },
  },
};
</script>

<style>
</style>