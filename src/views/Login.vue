<template>
  <div class="page">
    <el-form ref="loginForm" :model="loginForm" :rules="rules" class="login-container" label-width="0px">
      <h2 class="login-title" style="font-size: large">MTime管理面板</h2>
      <!-- 用户名 -->
      <el-form-item prop='username'>
        <el-input v-model="loginForm.username" placeholder="用户名" prefix-icon="iconfont icon-account-fill"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop='password'>
        <el-input v-model="loginForm.password" placeholder="密码" prefix-icon="iconfont icon-password" show-password>
        </el-input>
      </el-form-item>
      <!-- 记住我 -->
      <el-checkbox v-model="checked" class="login-remember" label="label">记住密码</el-checkbox>
      <!-- 登录按钮 -->
      <el-form-item class="btn">
        <el-button type="primary" @click="doLogin">立即登录</el-button>
        <el-button @click="doReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin123'
      },
      checked: true,
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    doLogin() {
      this.$refs.loginForm.validate(async valid => {
        if (!valid) {
          this.$message.error('用户名或密码验证失败')
          return false
        }
        localStorage.removeItem("userToken");
        let data = await this.$http.user.login(this.loginForm)
            .catch(error => {
              console.log(error);
              this.$message.error('登录失败, ', error)
              return false
            })
        if (data) {
          localStorage.setItem("userToken", data.id_token);
          this.$router.push('/admin');
        }
      })
    },
    doReset() {
      console.log(this.$refs);
      this.$refs.loginForm.resetFields()
    }
  },
}
</script>

<style scoped>
.page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.login-container {
  width: 400px;
  border: 1px solid #eaeaea;
  padding: 15px 35px;
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 15px;
  background: #fff;
  /* box居中设置 */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login-title {
  width: 100%;
  margin: 15px auto;
  text-align: center;
  color: #505458;
}

.login-remember {
  text-align: left;
  margin: 0 0 15px 0;
}

.btn {
  display: flex;
  justify-content: flex-end;
}
</style>
