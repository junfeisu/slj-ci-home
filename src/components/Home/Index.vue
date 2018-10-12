<template>
  <div class="app-container">
    <div class="user-container">
      <div class="user-info">
        <img src="https://cdn-daoweb-prod.daocloud.io/objects/avatar/3c2c387c-429f-4ef6-8eed-e99f04cbbbfd.jpeg" alt="" class="avatar">
        <span class="username">sjffly</span>
      </div>
      <img class="user-menu-down-icon" src="../../assets/Index/down.png" />
      <div class="user-menu">
        <div class="setting user-menu-option">
          <img src="../../assets/Index/setting.png" alt="" class="setting-icon">
          <span>设置</span>
        </div>
        <div class="signout user-menu-option" @click="logout()">
          <img src="../../assets/Index/sign-out.png" alt="" class="signout-icon">
          <span>退出</span>
        </div>
      </div>
    </div>
    <div class="projects-container">
      <div class="project-head">
        <div class="projects-info">
          <button class="create-project-btn" @click="createNewProject()">创建新项目</button>
          <span class="projects-num">共{{projects.length}}个项目</span>
        </div>
      </div>
      <div class="project-list">
        <div class="list-head">
          
        </div>
        <div class="project-detail">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fetch from '../../common/fetch'
  export default {
    name: 'Index',
    data () {
      return {
        user: null,
        projects: []
      }
    },
    methods: {
      async getProjects () {
        const result = await fetch({
          url: `/api/projects/${this.user.userId}/${this.user.type}`
        })

        this.projects = result.data.data
      },
      logout () {
        // window.localStorage.clear()
        this.$router.replace('/login')
      },
      createNewProject () {
        this.$router.push({
          path: 'create'
        })
      }
    },
    mounted () {
      this.user = {
        userId: window.localStorage.getItem('userId'),
        type: window.localStorage.getItem('type')
      }
      this.getProjects()
    }
  }
</script>

<style lang="scss" scoped>
  .app-container {
    width: 100%;
    height: 100%;
    background: #f1f3f6;
    display: flex;
    flex-direction: column;
  }
  .user-container {
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    &:hover > .user-menu {
      display: block;
    }
    .user-info {
      width: 150px;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 100%;
      margin-right: 10px;
    }
    .user-menu-down-icon {
      width: 15px;
      height: 15px;
      margin-right: 20px;
    }
    .user-menu {
      display: none;
      width: 150px;
      position: absolute;
      right: 20px;
      top: 60px;
      z-index: 99;
      background: #fff;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, .15);
      .user-menu-option {
        margin: 0 10px;
        height: 40px;
        border-bottom: 1px solid #dfdfd8;
        display: flex;
        align-items: center;
        color: #91f4df;
        cursor: pointer;
        &:last-child {
          border-bottom: none;
        }
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
  .projects-container {
    width: 100%;
    flex: 1;
  }
</style>
