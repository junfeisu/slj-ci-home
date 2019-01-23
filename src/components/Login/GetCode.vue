<template>
  <div class="get-code"></div>
</template>

<script>
  import fetch, { updateToken } from '../../common/fetch'
  export default {
    name: 'getCode',
    data () {
      return {}
    },
    methods: {
      async sendCode (code) {
        try {
          let type = window.localStorage.getItem('type')
          const result = await fetch({
            url: `/api/token/${type}/${code}`,
          })

          const userId = result.headers.cookie
          this.setUser(userId)
          updateToken(result.data.data['token'])
          this.$router.push({
            path: '/',
          })
        } catch (err) {
          console.log('err', err)
        }
      },
      setUser (userId) {
        window.localStorage.setItem('userId', userId)
      }
    },
    mounted () {
      const { search } = window.location
      this.sendCode(search.split('=')[1])
    }
  }
</script>
