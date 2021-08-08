import React, { Component } from "react"
import "./index.css"
import { Form, Input, Checkbox, Button } from "antd"
import { withRouter } from "react-router-dom"
class Login extends Component {
  onSubmit = (values) => {
    this.props.history.push("/home")
  }

  render() {
    const layout = { labelCol: { span: 8 }, wrapperCol: { span: 8 } }
    return (
      <div className="login-container">
        <div className="login">
          <Form onFinish={this.onSubmit}>
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                { required: true, message: "Please input you username!" }
              ]}
              {...layout}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              {...layout}
              rules={[
                { required: true, message: "Please input you username!" }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>记住密码</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)
