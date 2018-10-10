<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import socketIoClient from 'socket.io-client'
export default {
  name: 'App',
  mounted () {
    const socket = socketIoClient('http://localhost:8000')

    socket.emit('some event', 'hello')

    socket.on('hello', () => {
      console.log('hello')
    })
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
