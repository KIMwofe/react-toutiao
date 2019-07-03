import React, { Component } from 'react';
import './styles/style.less';
import { connect } from 'react-redux';
import { Form, Input, Button, Icon } from 'antd';
import * as actions from './store/actionCreats';

class login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // 表单校验
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 校验成功，没有毛病
        console.log('Received values of form: ', values);

        this.props.handleSignIn(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className="logo">
          <img src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png" alt="" />
        </div>
        <h1>用户登录</h1>
        <div className="loginWrap">
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: 'Please input password' },
                  { min: 3, message: '最少要3位数' }
                ]
              })(<Input type="password" placeholder="用户密码" />)}
            </Form.Item>
            <Form.Item >
              <Button htmlType="submit" block type="primary" style={{ background: '#f85959', color: '#fff', height: '40px' }}>登录</Button>
            </Form.Item>
          </Form>
        </div>
        <div className="another">
          <span>其它方式</span>
        </div>
        <h2>NO MORE</h2>
        <div className="terms">
          登录即表示你同意用户协议和隐私条款
        </div>
      </div>
    )
  }
  componentDidMount() {

  }
}
const LoginUI = Form.create({})(login);
export default connect(
  null,
  (dispatch, props) => ({
    handleSignIn(values) {
      dispatch(actions.asyncSignIn(values, props));
    }
  })
)(LoginUI);
