<template>
  <li @click="setSelectedVideo(video)" class="video-list-item list-group-item">
      <img :src="thumbnailUrl" class="mr-3" alt="youtube-thumbnail-image">
      <div class="media-body">
        {{ video.snippet.title }}
      </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'VideoListItem',
    props: {
        video: Object
    },
    methods: {
        ...mapMutations(['setSelectedVideo']),
    },
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url
        }
    }
    
}
</script>

<style scoped>
li.video-list-item {
    display: flex;
    cursor: pointer;
}

li.video-list-item:hover {
    background-color: #eee;
}

.media-body {
    margin: auto 0;
}
</style>