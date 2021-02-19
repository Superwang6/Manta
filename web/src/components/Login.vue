<template>
  <div class="bg">
    <div class="login-win">
      <h3>后台系统</h3>
      <el-form ref="form" :model="form" label-width="50px">
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即登陆</el-button>
          <el-button>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          account: '',
          password: '',
        }
      }
    },
    methods: {
      onSubmit() {
        this.login(this.form.account,this.form.password);
      },
      login(account, password) {
        this.axios.get("http://localhost:8080/static/data.json").then((response) => {
          if(response.status == 200) {
            if(response.data.actionResult == 0) {
              alert("登陆成功！！")
            } else {
              alert("登陆失败！！")
            }
          } else {
            alert("登陆失败！！")
          }
        })
      }
    }
  }
</script>

<style scoped>
  .bg {
    background: #324057;
    width: 100%;
    height: 100%;
  }

  .login-win {
    background: #FFFFFF;
    border-radius: 5px;
    width: 320px;
    height: 210px;
    padding: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .login-win > h3 {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
