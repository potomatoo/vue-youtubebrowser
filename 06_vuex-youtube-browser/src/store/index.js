import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

export default new Vuex.Store({
  // data 의 집합(중앙 관리할 모든 데이터===상태)
  state: {
    inputValue: '',
    videos: [],
    selectedVideo: null,
  },
  // state 를 (가공해서)가져올 함수들. === computed
  getters: {
    videoUrl(state) {
      return `https://youtube.com/embed/${state.selectedVideo.id.videoId}`
    },
    videoTitle: state => state.selectedVideo.snippet.title,
    videoDescription: state => state.selectedVideo.snippet.description
  },
  // state 를 변경하는 함수들(mutations 에 작성되지 않은 state 변경 코드는 모두 동작하지 않음.)
  // 모든 mutation 함수들은 동기적으로 동작하는 코드.all
  // commit 을 통해 실행함. 
  mutations: {
    setInputValue(state, inputValue) {
      state.inputValue = inputValue
    },
    setVideos(state, videos) {
      state.videos = videos
    },
    setSelectedVideo(state, video) {
      state.selectedVideo = video
    },
  },
  // 범용적인 함수들. mutations 에 정의한 함수를 actions 에서 실행 가능.
  // 비동기 로직은 actions 에서 정의.
  // dispatch 를 통해 실행함
  actions: {
    fetchVideos({ commit, state } , event) {
      // 1. inputValue 를 바꾼다.
      commit('setInputValue', event.target.value)
      // 2. state.inputValue 로 요청보낸다.
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          part: 'snippet',
          type: 'video',
          q: state.inputValue,
        }
      })
        .then(res => { 
          res.data.items.forEach(item => {
            const parser = new DOMParser()
            const doc = parser.parseFromString(item.snippet.title, 'text/html')
            item.snippet.title = doc.body.innerText
          })
          // 3. state.videos 를 응답으로 바꾼다.
          commit('setVideos', res.data.items)
        })
        .catch(err => console.error(err))
    }
  },
  modules: {}
})
