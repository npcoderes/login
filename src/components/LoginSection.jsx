import React, { memo, useState, useCallback, useMemo } from "react";
import { Form, Input, Button, Card, Flex, Checkbox, Divider } from "antd";
import ap from "../assets/AS.svg";
import gp from "../assets/GP.svg";
import loginSide from "../assets/login-side.png";
import loginbg from "../assets/imagebg.png";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import "./LoginSection.css";
import './Login.less'

console.log("loginbg", loginbg);
const LoginSection = memo((props) => {
  const [loading, setLoading] = useState(false);


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
        <img src={loginbg} alt="Login Background" className="login-frame-img" loading="lazy" />
        <div  className="login-content">
                  <div className="login-container">
          <div className="image-title-container">
            <div className="container">
              <img
                src={
                  // ["light", "blue"].includes(user.themeName)
                  //   ? userSetting.bg_logo_url
                  //   : userSetting.dark_bg_logo_url
                  "https://customer.terotam.com/static/media/terotam-bg.4f2b0f70c3cfac5a8ea4.webp"
                }
                alt="logo"
                className="logo"
              />
            </div>
            <h2 className="title">
              {/* {formatMessage({ id: "LogintoyourAccount" })} */}
              Login to your Account
            </h2>
          </div>

          <Form
            layout="vertical"
            className="login-form"
            style={{ marginTop: "35px" }}
            initialValues={{
              remember: localStorage.getItem("rememberMe") || false,
            }}
          // onSubmit={(e) => props.user.handleLoginSubmit(e, props.form, props.history)}
          // onFinish={(values) => {
          //   console.log(values);
          //   props.user.handleLoginSubmit(values, props.history);
          // }}
          >
            <Form.Item
              required={false}
              label={
                <span style={{ color: "#FF6300" }}>
                  {/* <UserInputIcon
                  default_color={
                    props.globals2.themeActiveObj["@primary-color"] || "#FF6300"
                  }
                />
                {formatMessage({ id: "EmailOrUsernameOrMobile" })} */}
                  Email or Username or Mobile
                </span>
              }
              name="username"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  // message: formatMessage({ id: "Enteremailorusernameormobile" }),
                  message: "Enter email or username or mobile",
                },
                ({ getFieldValue }) => ({
                  validator: (rule, value, callback) => {
                    if (value && value.includes("'")) {
                      return Promise.reject(
                        new Error("Enter valid email or username or mobile")
                      );
                      // callback("Enter valid email or username or mobile");
                    } else {
                      return Promise.resolve();
                    }
                  },
                }),
              ]}
            >
              <Input
                size="large"
                // placeholder={formatMessage({
                //   id: "Enteremailorusernameormobile",
                // })}
                placeholder="Enter email or username or mobile"
                // inputType="string"
              />
            </Form.Item>
            <Form.Item
              required={false}
              label={
                <span style={{ color: "#FF6300" }}>
                  <span style={{ marginTop: "10px" }}>
                    {/* <KeyInputIcon
                      default_color={
                        props.globals2.themeActiveObj["@primary-color"] ||
                        "#FF6300"
                      }
                    /> */}
                  </span>{" "}
                  {/* {formatMessage({ id: "Password" })} */}
                  Password
                </span>
              }
              style={{ marginBottom: "10px" }}
              name="password"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  // message: formatMessage({ id: "Pleaseenteryourpassword" }),
                  message: "Please enter your password",
                },
              ]}
            >
              <Input.Password
                size="large"
                type="password"
                // placeholder={formatMessage({ id: "Password" })}
                placeholder="Password"
              />
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{ float: "left", lineHeight: "60px", color: "#252525" }}
              >
                <Form.Item
                  style={{ paddingBottom: "0px" }}
                  name="remember"
                  valuePropName="checked"
                  label={null}
                >
                  {/* <Checkbox>{formatMessage({ id: "Rememberme" })}</Checkbox> */}
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </div>
              <Form.Item style={{ paddingBottom: "0px" }} label={null}>
                <Button
                  // loading={
                  //   props.user.isBtnLoading || props.globals.reloadLoginButton
                  // }
                  disabled={props.disabled}
                  type="primary"
                  htmlType="submit"
                  style={{ float: "right", margin: "10px 0", minWidth: "130px" ,backgroundColor:"#FB6506"}}
                  size="large"
                >
                  {/* {formatMessage({ id: "LOGIN" })} */}
                  LOG IN
                </Button>
              </Form.Item>
            </div>
            <div className="signup-forget-style">
              <Form.Item>
                <Link
                  to="/user/forgot-password"
                  style={{
                    float: "left",
                    textDecoration: "Underline",
                    color:
                      // props.globals2.themeActiveObj["@primary-color"] ||
                      "#FF6300",
                  }}
                >
                  {/* {formatMessage({ id: "ForgotPassword" })} */}
                  Forgot Password?
                </Link>
              </Form.Item>
              <Form.Item>
                <Link
                  to="/user/signup"
                  style={{
                    textDecoration: "Underline",
                    color:
                      // props.globals2.themeActiveObj["@primary-color"] ||
                      "#FF6300",
                  }}
                >
                  {/* {formatMessage({ id: "SignUp" })} */}
                  Sign Up
                </Link>
              </Form.Item>
            </div>
          </Form>
          {/* {process.env.REACT_APP_AIRTEL === "true" ? (
            ""
          ) : ( */}
            <div className="social-media">
              <p>Available on</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.terotam.customer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="playstore" src={gp} loading="lazy" />
              </a>
              <a
                href="https://apps.apple.com/in/app/terotam-customer/id1475752631"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img alt="appstore" src={ap} loading="lazy" />
              </a>
            </div>
          {/* )} */}
        </div>
        </div>

      </div>
    </div>
  );
});

export default LoginSection;
