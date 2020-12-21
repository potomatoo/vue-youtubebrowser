<template>
  <div>
    <h1>Pong</h1>
    <h2>{{ messageFromPing }}</h2>
  </div>
</template>

<script>
export default {
    name: 'Pong',
    data: function() {
      return {
        messageFromPing: this.$route.query.message,
      }
    }
}
</script>

<style>

</style>