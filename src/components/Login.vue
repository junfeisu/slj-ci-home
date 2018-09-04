<template>
  <div class="login">
    <div class="login-container">
      <p class="container-title">{{login ? 'Login' : 'Register'}}</p>
      <div class="login-form">
        <div class="username-section">
          <img src="../assets/login/user.png" alt="" class="username-icon">
          <input type="text" class="container-input" placeholder="enter username" />
        </div>
        <div class="password-section">
          <img src="../assets/login/password.png" alt="" class="password-icon">
          <input type="password" class="container-input" placeholder="enter password" />
        </div>
        <button class="login-btn">{{login ? 'Login' : 'Register'}}</button>
      </div>
      <div class="other-access">
        <div class="github-login" @click="githubLogin()">
          <img src="../assets/login/github.png" alt="" class="github-icon">
          <span>github</span>
        </div>
        <div class="gitlab-login" @click="gitlabLogin()">
          <img src="../assets/login/gitlab.png" alt="" class="gitlab-icon">
          <span>gitlab</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        login: true
      }
    },
    methods: {
      githubLogin () {
        let clientId = 'e14b01130d9eb24f678f'
        let host = 'https://github.com/login/oauth/authorize'
        window.localStorage.setItem('type', 'github')
        window.location.href = host + '?client_id=' + clientId 
      },
      gitlabLogin () {
        let clientId = 'e2838adcabd34621110f7c7d2f63020eea36e5083b8731e8142704f3f39bc86a'
        let host = 'http://gitlab.com/oauth/authorize'
        let redirectUri = 'http://localhost:8080/code'
        let responseType = 'code'
        window.localStorage.setItem('type', 'gitlab')
        let href = `${host}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`
        console.log(href)
        // window.location.href = `${host}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url('../assets/login/login-bg.jpeg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-container {
    width: 350px;
    height: 330px;
    border: 1px solid #b6b7b8;
    border-radius: 3px;
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    .container-title {
      color: rgba(0, 0, 0, .8);
      font-size: 18px;
      font-weight: bold;
    }
    .login-form {
      width: 280px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px;
      .username-section, .password-section {
        width: 270px;
        height: 35px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 5px;
      }
      .container-input {
        flex: 1;
        height: 35px;
        border: 0;
        outline: none;
        background: transparent;
        &::-webkit-input-placeholder {
          color: #b6b7b8;
        }
      }
      .username-icon, .password-icon {
        width: 18px;
        height: 18px;
        margin-right: 10px;
      }
      .login-btn {
        width: 100%;
        background: #4d90fe;
        border: 1px solid #3079ed;
        outline: none;
        color: #fff;
        height: 35px;
        cursor: pointer;
        border-radius: 20px;
        margin-top: 10px;
      }
    }
    .other-access {
      width: 280px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .github-login, .gitlab-login {
        width: 130px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(33, 33, 33, .3);
        border-radius: 4px;
        cursor: pointer;
        &:hover {
          border: 1px solid rgb(33, 33, 33);
        }
        .github-icon, .gitlab-icon {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        span {
          color: #333;
          user-slect: none;
        }
      }
    }
  }
</style>
