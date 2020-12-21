<template>
  <div class="child">
      <h2>자식 컴포넌트</h2>
      <!-- 3. 사용한다. -->
      {{ propFromParent }}
      <button @click="sendHungrySignal">배고파!</button>
    </div>
</template>
<script>
export default {
    name: 'Child',
    // 2. props 등록(반드시 Object 를 써야지 Validation 가능)
    props: {
        propFromParent: String,
    },
    methods: {
        sendHungrySignal() {
            // 1. emit 부모한테 이벤트(시그널) 방출
            this.$emit('hungry', '햄버거', '피자')  // 커스텀 이벤트
        }
    }
}
</script>

<style>
.child {
    border: 3px solid blue;
    margin: 3px;
    padding: 3px;
}
</style>