<template>
  <div class="parent">
      <h1>부모 컴포넌트</h1>
      <!-- 1. prop 이름="내용" -->
      <Child @hungry="onHungrySignal" :propFromParent="parentMsg"/>
      <!-- 2. emit @cutomEvent 를 듣고, 그다음 일을 한다. -->
  </div>
</template>

<script>

import Child from '../components/Child.vue'

export default {
    name: 'Parent',
    data() {
        return {
            parentMsg: '부모에서 내리는 메시지',
        }
    },
    components: {
        Child,
    },
    methods: {
        onHungrySignal(menu1, menu2) {
            console.log(menu1, menu2)
        }
    }
}
</script>

<style>
    .parent {
        border: 3px solid red;
        margin: 3px;
        padding: 3px;
    }
</style>