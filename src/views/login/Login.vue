<template>
  <div class="login-container">
    <!--登录面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <!--面板标题-->
        <div class="login-header-title">
          <a :class="{ current: loginMode }" @click="dealLoginMode(true)" href="javascript:;">手机登录</a>
          <a :class="{ current: !loginMode }" @click="dealLoginMode(false)" href="javascript:;">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>
          <!--手机验证码登录部分-->
          <div :class="{ current: loginMode }">
            <section class="login-message">
              <input type="number" maxlength="11" placeholder="手机号" />
              <button v-if="1" class="get-verification">获取验证码</button>
              <button v-else disabled="disabled" class="get-verification">
                已发送(60s)
              </button>
            </section>
            <section class="login-verification">
              <input type="number" maxlength="8" placeholder="验证码" />
            </section>
            <section class="login-hint">
              温馨提示：未注册的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <!--账号登录部分-->
          <div :class="{ current: !loginMode }">
            <section>
              <section class="login-message">
                <input type="tel" maxlength="11" placeholder="用户名" />
              </section>
              <section class="login-verification">
                <input type="password" maxlength="20" placeholder="密码" autocomplete="off" />
                <div class="switch-show">
                  <img class="on" src="./images/hide_pwd.png" alt="" width="20" />
                  <img src="./images/show_pwd.png" alt="" width="20" />
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="4" placeholder="验证码" />
                <img class="get-verification" src="./images/captcha.svg" alt="captcha" />
              </section>
            </section>
          </div>
          <button class="login-submit">登录</button>
        </form>
        <button class="login-back">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      // 登录模式
      loginMode: true
    };
  },
  methods: {
    // 处理登录模式
    dealLoginMode(flag) {
      this.loginMode = flag;
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: #fff;
}

.login-container .login-inner {
  padding-top: 6rem;
  width: 80%;
  margin: 0 auto;
}

.login-container .login-inner .login-header .login-logo {
  font-size: 40px;
  font-weight: bold;
  color: #1989fa;
  text-align: center;
}

.login-container .login-inner .login-header .login-header-title {
  padding-top: 40px;
  padding-bottom: 10px;
  text-align: center;
}

.login-container .login-inner .login-header .login-header-title > a {
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}

.login-container .login-inner .login-header .login-header-title > a:first-child {
  margin-right: 40px;
}

.login-container .login-inner .login-header .login-header-title > a.current {
  color: #1989fa;
  font-weight: 700;
  border-bottom: 2px solid #1989fa;
}

.login-container .login-inner .login-content > form > div {
  display: none;
}

.login-container .login-inner .login-content > form > div.current {
  display: block;
}

.login-container .login-inner .login-content > form > div input {
  width: 100%;
  height: 100%;
  padding-left: 8px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: 0;
  font: 400 14px Arial;
}

.login-container .login-inner .login-content > form > div input:focus {
  border: 1px solid #1989fa;
}

.login-container .login-inner .login-content > form > div .login-message {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.login-container .login-inner .login-content > form > div .login-message .get-verification {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: 0;
  color: #ccc;
  font-size: 14px;
  background: transparent;
}

.login-container .login-inner .login-content > form > div .login-message .get-verification.phone_right {
  color: #1989fa;
}

.login-container .login-inner .login-content > form > div .login-verification {
  position: relative;
  margin-top: 16px;
  height: 48px;
  font-size: 14px;
  background: #fff;
}

.login-container .login-inner .login-content > form > div .login-verification .switch-show {
  position: absolute;
  right: 10px;
  top: 12px;
}

.login-container .login-inner .login-content > form > div .login-verification .switch-show img {
  display: none;
}

.login-container .login-inner .login-content > form > div .login-verification .switch-show img.on {
  display: block;
}

.login-container .login-inner .login-content > form > div .login-hint {
  margin-top: 12px;
  color: #999;
  font-size: 12px;
  line-height: 20px;
}

.login-container .login-inner .login-content > form > div .login-hint > a {
  color: #1989fa;
}

.login-container .login-inner .login-content > form .login-submit {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 30px;
  border-radius: 4px;
  background: #1989fa;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
  border: 0;
}

.login-container .login-inner .login-content .login-back {
  display: block;
  width: 100%;
  height: 42px;
  margin-top: 15px;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #1989fa;
  color: #1989fa;
  text-align: center;
  font-size: 16px;
  line-height: 42px;
}
</style>
