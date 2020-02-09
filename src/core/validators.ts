/* eslint-disable @typescript-eslint/no-explicit-any */
export default {
  emailOrUserName(_rule: any, value: string, callback: (msg?: string) => any) {
    if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
      callback();
    } else if (value && value.length >= 3) {
      callback();
    } else {
      callback("请输入正确的邮箱地址或用户名，如：kerbores@gmail.com");
    }
  },
  emailValidator: (
    _rule: any,
    value: string,
    callback: (msg?: string) => any
  ) => {
    if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(value)) {
      callback();
    } else {
      callback("请输入正确的邮箱地址，如：kerbores@gmail.com");
    }
  },
  mobileValidator: (
    _rule: any,
    value: string,
    callback: (msg?: string) => any
  ) => {
    if (
      /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(
        value
      )
    ) {
      callback();
    } else {
      callback("请输入正确的手机号码");
    }
  }
};
