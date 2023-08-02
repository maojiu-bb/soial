// 表单验证规则

import { Rule } from 'antd-mobile/es/components/form'

export const usernameRule: Rule = {
  required: true,
  min: 3,
  max: 12,
  pattern: RegExp(/^[\u4e00-\u9fa5a-zA-Z0-9]{3,12}$/)
}

export const passwordRule: Rule = {
  required: true,
  min: 8,
  max: 16,
  pattern: RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\s\S]{8,16}$/)
}

export const emailRule: Rule = {
  required: true,
  pattern: RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)
}
