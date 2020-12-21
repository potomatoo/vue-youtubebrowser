<template>
    <ul class="list-group col-lg-4">  
        <VideoListItem
            :video="video" 
            v-for="video in videos" 
            :key="video.etag" 
        />
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem.vue'
import { mapState } from 'vuex'

export default {
    name: 'VideoList',
    components: {
        VideoListItem,
    },
    computed: {
        ...mapState(['videos'])
    }
}
</script>

<style>

</style>