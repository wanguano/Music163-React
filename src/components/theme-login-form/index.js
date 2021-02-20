import React from 'react'
import propTypes from 'prop-types'
import { getParseLoginState, getMatchReg } from '@/utils/format-utils'
import { Form, Input, Button, Checkbox } from 'antd'
import loginFormStyle from './style.module.css'
import { useDispatch } from 'react-redux'
import { getLoginProfileInfo } from '../theme-login/store/actionCreator'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { span: 30 },
}

/**
 * 登录的表单组件
 */
const ThemeLoginForm = (props) => {
  // prop/state
  // 拿到"登录的方式"
  const { loginState } = props
  // 解析登录状态: phone->'手机号'  email->'邮箱'
  const parseLoginModeText = getParseLoginState(loginState)
  // 表单正则: 根据不同登录方式,匹配不同的正则
  const mathchReg = getMatchReg(loginState)
  const pwdReg = /[0-9a-zA-Z._-]{6,20}/
  console.log(loginState, parseLoginModeText, `正则--->${mathchReg}`)
  // redux hook
  const dispatch = useDispatch()

  // other handle

  // component handle
  const onFinish = ({username, password}) => {
    // 先固定写死: 手机号登陆
    dispatch(getLoginProfileInfo(username, password, true))
    
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={parseLoginModeText}
        name="username"
        rules={[{pattern: mathchReg, message: `请输入正确的${parseLoginModeText}`}, { required: true, message: '请输入你的账户' }]}
      >
        <Input autoFocus />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ pattern: pwdReg, message: '密码最短6位' } ,{ required: true, message: '请输入你的密码!' }]}
      >
        <Input.Password />
      </Form.Item>
      <div className={loginFormStyle.textAlignRight}>
        <Checkbox className={loginFormStyle.mr80} defaultChecked={true}>自动登录</Checkbox>
        <span className={loginFormStyle.forgetPwd}>忘记密码?</span>
      </div>
      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          size="middle"
          block
          shape="round"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

ThemeLoginForm.propTypes = {
  loginState: propTypes.string
}

ThemeLoginForm.defaultProps  = {
  loginState: 'phone'
}

export default ThemeLoginForm
