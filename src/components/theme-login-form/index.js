import React from 'react'
import { Form, Input, Button } from 'antd'

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
}
const tailLayout = {
  wrapperCol: { span: 30 },
}

const ThemeLoginForm = (props) => {
  // const { loginToken = 'phone' } = props
  const onFinish = (values) => {
    console.log('Success:', values)
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
        label="手机号"
        name="username"
        rules={[{ required: true, message: '请输入你的用户名' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入你的密码!' }]}
      >
        <Input.Password />
      </Form.Item>

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

export default ThemeLoginForm
