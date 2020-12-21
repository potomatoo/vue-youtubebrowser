<template>
  <div class="search-bar">
      <input @keypress.enter="fetchVideos">
  </div>
</template>

<script>
import { mapActions } from 'vuex' 

export default {
    name: 'SearchBar',
    methods: {
        ...mapActions([
            'fetchVideos'
        ])
    },
}
</script>

<style scoped>
/* 
    scoped 옵션은 해당 컴포넌트에만 영향을 준다. 
    하지만, class 지정은 해야한다.
*/
div.search-bar {
    text-align: center;
    margin: 20px;
}

div.search-bar > input {
    width: 75%
}
</style>