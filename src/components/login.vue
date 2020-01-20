<template>
  <div>
    <p>
      用户名：
      <input type="text" placeholder="请输入用户名" v-model="userName"/>
    </p>
    <p>
      密 码：
      <input type="password" placeholder="请输入密码" v-model="passWord"/>
    </p>
    <button @click="login">登陆</button>
  </div>
</template>
<script>
  /* import axios from 'axios'

   axios.get('http://localhost:8080/users?userName=' + this.userName + '&password=' + this.password).then((res) => {
     if (res.data.length > 0) {
       console.log('get it')
     } else {
       console.log('用户名或密码错误！')
     }
   }).catch(error => console.log(error))*/
  import axios from 'axios'

  export default {
    data () {
      return {
        userName: '',
        passWord: ''
      }
    },
    methods: {
      login () {
        sessionStorage['userName'] = this.userName
        sessionStorage['passWord'] = this.passWord
        debugger
        axios.post('http://localhost:8080/api/login', sessionStorage)
          .then(function (response) {
            debugger
            console.log(response)
            // window.location.href = '/'
          }).catch(function (error) {
          console.log(error)
        })

      },
    }
  }

</script>
