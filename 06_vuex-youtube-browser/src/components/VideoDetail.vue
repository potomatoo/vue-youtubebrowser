<template>
  <div v-if="$store.state.selectedVideo" class="col-lg-8">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe 
        class="embed-responsive-item" 
        :src="videoUrl" 
        allowfullscreen
      ></iframe>
    </div>
    <div class="details">
      <h4 v-html="videoTitle"></h4> 
      <p>{{ videoDescription }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'VideoDetail',
    computed: {
      // computed 에 getters 를 매핑
      ...mapGetters([
        'videoUrl',
        'videoTitle',
        'videoDescription'
      ])
    }
}
</script>

<style scoped>
  div.details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>