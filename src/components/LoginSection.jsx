import React, { memo, useState, useCallback, useMemo } from "react";
import { Form, Input, Button, Card, Flex, Checkbox, Divider } from "antd";
import ap from "../assets/AS.svg";
import gp from "../assets/GP.svg";
import loginSide from "../assets/login-side.png";
import loginbg from "../assets/imagebg.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./LoginSection.css";

const LoginSection = memo(() => {
  const [loading, setLoading] = useState(false);

  const cardStyles = useMemo(
    () => ({
      borderRadius: "15px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    }),
    []
  );

  const buttonStyles = useMemo(
    () => ({
      backgroundColor: "#ff852e",
      borderColor: "#ff852e",
    }),
    []
  );

  const handleFormSubmit = useCallback((values) => {
    setLoading(true);
    console.log("Login values:", values);
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div className="login-section">
      {/* login bg */}
      <div className="loginframe">
        {/* loginsideimg */}
        <img src={loginbg} alt="Login Background" className="login-frame-img" />
        <Card className="login-card" style={cardStyles}>
          <div className="login-header">
            <img
              src="https://customer.terotam.com/static/media/terotam-bg.ec7e508214810c6c9934.png"
              alt="Terotam Logo"
              className="logo"
            />
            <p className="login-text">Log in to your Account</p>
          </div>

          <Form
            name="login"
            autoComplete="off"
            size="large"
            onFinish={handleFormSubmit}
          >
            <Form.Item
              layout="vertical"
              name="username"
              label={
                <span className="form-label-with-icon">
                  <UserOutlined className="label-icon" />
                  <span className="login-text">
                    {" "}
                    Email Or Username Or Mobile
                  </span>
                </span>
              }
              prefixCls="login-input-prefix"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                placeholder=" Email Or Username Or Mobile"
                className="login-input"
              />
            </Form.Item>

            <Form.Item
              layout="vertical"
              name="password"
              label={
                <span className="form-label-with-icon">
                  <LockOutlined className="label-icon" />
                  <span className="login-text"> Password</span>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" className="login-input" />
            </Form.Item>

            <Flex
              justify="space-between"
              align="center"
              style={{ marginBottom: "16px" }}
            >
              <Form.Item>
                <Checkbox className="login-text">Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  color="#FF8214"
                  style={buttonStyles}
                  htmlType="submit"
                  //   className="login-button"
                  loading={loading}
                  block
                >
                  <span style={{ color: "#fff" }}>LOGIN</span>
                </Button>
              </Form.Item>
            </Flex>
          </Form>
          <Divider />
          <Flex justify="space-between" align="center" dir="row">
            <div>
              <a
                href="#forgot"
                style={{ color: "#ff852e", textDecoration: "underline" }}
              >
                Forgot password?
              </a>
            </div>
            <div>
              <a
                href="#signup"
                style={{ color: "#ff852e", textDecoration: "underline" }}
              >
                Sign up
              </a>
            </div>
          </Flex>

          {/* play store app store icon  */}

          <Flex
            dir="row"
            justify="space-between"
            align="center"
            // style={{ marginTop: "20px" }}
            className="store-icons"
          >
            <span> Available on</span>

            <div style={{ display: "flex", gap: "10px" }}>
              <img src={gp} alt="Google Play" />
              <img src={ap} alt="App Store" />
            </div>
          </Flex>
        </Card>
      </div>
    </div>
  );
});

export default LoginSection;
