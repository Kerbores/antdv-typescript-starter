<template>
  <div class="main">
    <a-form
      id="formLogin"
      class="user-layout-login"
      ref="formLogin"
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          size="large"
          type="text"
          placeholder="请输入用户名"
          v-decorator="[
            'user',
            {
              rules: [
                { required: true, message: '请输入用户名' },
                { validator: validators.emailOrUserName }
              ],
              validateTrigger: 'change'
            }
          ]"
        >
          <a-icon
            slot="prefix"
            type="user"
            :style="{ color: 'rgba(0,0,0,.25)' }"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          size="large"
          type="password"
          autocomplete="false"
          placeholder="请输入密码"
          v-decorator="[
            'password',
            {
              rules: [{ required: true, message: '请输入密码' }],
              validateTrigger: 'blur'
            }
          ]"
        >
          <a-icon
            slot="prefix"
            type="lock"
            :style="{ color: 'rgba(0,0,0,.25)' }"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <div style="width:100%">
          <SlideVerify
            :length="42"
            :radius="10"
            :width="formWidth"
            :height="155"
            :slider-text="sliderText"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
          ></SlideVerify>
        </div>
      </a-form-item>
      <a-form-item>
        <a-checkbox checked v-decorator="['rememberMe']">自动登录</a-checkbox>
      </a-form-item>
      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          html-type="submit"
          class="login-button"
          :loading="state.loading"
          :disabled="state.disabled"
          >确定</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Vue } from "vue-property-decorator";
import SlideVerify from "@/components/SlideVerify/";
@Component({
  components: { SlideVerify }
})
export default class Login extends Vue {
  public form!: any;

  public formWidth = 310;

  public sliderText = "向右滑动";

  public state: {
    time: number;
    loading: boolean;
    disabled: boolean;
  } = {
    time: 60,
    loading: false,
    disabled: true
  };

  beforeCreate() {
    this.form = this.$form.createForm(this);
  }

  created() {
    this.$nextTick(() => {
      this.formWidth = (this.$refs.formLogin as Vue).$el.clientWidth;
    });
  }

  onSuccess() {
    this.state.disabled = false;
    this.$message.success("验证成功");
  }
  onFail() {
    this.state.disabled = true;
    this.$message.error("验证失败");
  }
  onRefresh() {
    this.state.disabled = false;
  }

  handleSubmit() {
    console.log("submit");
  }
}
</script>
<style lang="less" scoped>
.ant-tabs,
.ant-checkbox-wrapper,
.ant-form {
  color: #d9d9d9;
}
.user-layout-login {
  label {
    font-size: 14px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }

  .forge-password {
    font-size: 14px;
  }

  button.login-button {
    padding: 0 15px;
    font-size: 16px;
    height: 40px;
    width: 100%;
  }

  .user-login-other {
    text-align: left;
    margin-top: 24px;
    line-height: 22px;

    .item-icon {
      font-size: 24px;
      color: rgba(250, 250, 250, 0.836);
      margin-left: 16px;
      vertical-align: middle;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }

    .register {
      float: right;
    }
  }
}
</style>
