import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { attemptLogin } from "../../../store/thunks/auth"
import Error from "../../../component/Error/Error"
import "./style.css"
import { login } from "../../../store/actions/user";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [passwordShow, setPasswordShow] = useState(false);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object({
        username: Yup.string().required("username is Required"),
        password: Yup.string().min(5).max(255).required("Password is Required"),
    });

    const onSubmit = (values) => {
        dispatch(login({}));
        localStorage.setItem("token", "token");
        navigate("/market")
        // setLoading(true);
        // dispatch(attemptLogin(values)).then((response) => {
        //     if (response == true)
        //         console.log("")
        //     else {
        //         setServerError("Email or password is wrong.")
        //         setLoading(false);
        //     }
        // }).catch(({ response }) => {
        //     setLoading(false);
        // });
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => {
                return (
                    <>
                        <div className="login">
                            <div className="logo">
                                <Link to="/">
                                    <img alt="" src="image/header-logo.png" />
                                    <p>Crypto Trustable</p>
                                </Link>
                            </div>
                            <div className="login-inner">
                                <Form>
                                    <h1>Sign In</h1>
                                    <div className="email-wrap">
                                        <Field
                                            name="username"
                                            type="text"
                                            placeholder="username"
                                        />
                                        <ErrorMessage name="username" component={Error} />
                                    </div>
                                    <div className="password-wrap">
                                        <Field
                                            name="password"
                                            type={passwordShow ? "text" : "password"}
                                            placeholder="Password"
                                        />
                                        <button onClick={() => setPasswordShow(!passwordShow)}><img alt="" src="image/password-show.svg" /></button>
                                        <ErrorMessage name="password" component={Error} />
                                    </div>
                                    <div className="forgot-password-wrap">
                                        <p>Scan to login</p>
                                        <Link to="/confirm-recovery-phrase">Forgot Password?</Link>
                                    </div>
                                    <div>
                                        <button type="submit" disabled={!formik.dirty || !formik.isValid || loading} className="sign-in-button btn btn-primary">Sign in</button>
                                    </div>
                                    <div className="go-register-wrap">
                                        <h5>If you don’t have an account you can</h5>
                                        <Link to="/register">Register Here!</Link>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </>
                );
            }}
        </Formik>
    );
};
export default Login;