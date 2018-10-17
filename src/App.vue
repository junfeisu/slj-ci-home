<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import io from 'socket.io-client'
export default {
  name: 'App',
  mounted () {
    const socket = io('http://localhost:8000')
    const statusSocket = io('http://localhost:8000/status')
    const logSocket = io('http://localhost:8000/log')

    statusSocket.emit('build', {
      userId: 10,
      historyId: 1
    })

    logSocket.emit('build', {
      userId: 10,
      historyId: 1
    })

    socket.on('updateStatus', status => {
      console.log('status is ', status)
    })

    socket.on('updateLog', log => {
      console.log('log is ', log)
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
