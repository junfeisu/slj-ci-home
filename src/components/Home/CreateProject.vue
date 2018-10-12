<template>
  <div class="create-project">
    <div class="create-project-container">
      <div class="project-name">
        <span>项目名</span>
        <input type="text" placeholder="请输入项目名" v-model="projectInfo.name" />
      </div>
      <div class="project-repo">
        <span>项目仓库</span>
        <div class="repositories-container">
          <div class="item" v-for="owner in owners" @click="selectOwners(owner)">
            <img :src="owner.owner_avatar" alt="" class="owner-avatar">
            <span class="owner-name">{{owner.owner_name}}</span>
            <select name="repository" id="repository" v-model="selected">
              <option :value="repository.id" v-for="repository in owner.repositories">{{repository.name}}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import fetch from '../../common/fetch.js'
  export default {
    name: 'CreateProject',
    data () {
      return {
        type: window.localStorage.getItem('type'),
        userId: window.localStorage.getItem('userId'),
        projectInfo: {
          name: ''
        },
        owners: []
      }
    },
    methods: {
      async getRepostiry () {
        let user = this.type === 'github' ? 'junfeisu' : this.userId
        const repositories = await fetch({
          url: `/api/repos/users/${this.type}/${user}`
        })

        repositories.data.data.forEach((val, index) => {
          if (index === 0) {
            this.owners.push({
              owner: val.owner.id,
              owner_name: val.owner.name,
              owner_avatar: val.owner.avatar_url,
              repositories: [val]
            })

            return
          }

          let searchResult = this.searchItemInArray(this.owners, {owner: val.owner.id})
          if (searchResult) {
            searchResult.repositories.push(val)
          } else {
            this.owners.push({
              owner: val.owner.id,
              owner_name: val.owner.name,
              owner_avatar: val.owner.avatar_url,
              repositories: [val]
            })
          }
        })
      },
      selectOwners (owner) {
        console.log(owner)
      },
      searchItemInArray (arr, condition) {
        if (!arr instanceof Array || !arr.length) {
          return
        }

        let result = null

        for (let i = 0, len = arr.length; i < len; i++) {
          let isSame = true
          for (let prop in condition) {
            if (arr[i][prop] !== condition[prop]) {
              isSame = false
              break
            }
          }

          if (isSame) {
            result = arr[i]
            break
          }
        }

        return result
      },
      async createProject () {
        try {
          const result = await fetch({
            url: '/api/project/add',
            method: 'POST',
            data: {
              name: 'test',
              repository_id: 106417568,
              repository_type: 'github',
              user_id: this.userId
            }
          })
        } catch (err) {
          console.log(err.message)
        }
      }
    },
    mounted () {
      this.getRepostiry()
      // this.createProject()
    }
  }
</script>

<style lang="scss" scoped>

  .repositories-container {
    display: flex;
    align-items: center;
    .item {
      width: 245px;
      height: 143px;
      border: 2px solid #e5e5e5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
    }
    .owner-name {
      color: #555;
      font-size: 14px;
      margin-top: 5px;
    }
    .owner-avatar {
      width: 60px;
      height: 60px;
      border-radius: 100%;
    }
    #repository {
      border-top: 1px solid #e5e5e5;
    }
  }
</style>
