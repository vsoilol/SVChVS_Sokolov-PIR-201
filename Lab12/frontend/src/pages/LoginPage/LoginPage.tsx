import React, {useEffect} from "react";
import "./LoginPage.scss";
import {Link, useNavigate} from "react-router-dom";
import {SubmitHandler, useForm, Controller} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod/dist/zod";
import {FormSchema, FormSchemaType} from "./LoginFormValidationInfo";
import {useAddProductMutation, useLoginUserMutation} from "../../store/product/product.api";
import {LoginRequest} from "../../models/LoginRequest";

export function LoginPage() {
    const [loginUser, loginResult] = useLoginUserMutation();
    const navigate = useNavigate();

    const {
        register,
        watch,
        handleSubmit,
        control,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema),
    });

    const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
        const loginRequest = data as LoginRequest;
        loginRequest.username = loginRequest.username.trim()
        loginRequest.password = loginRequest.password.trim()
        loginUser(loginRequest).then((data) => {
            const isLogin = data as { data: boolean };
            if (isLogin.data) {
                navigate("/catalog")
            }
        })
    };

    return (
        <section className={"page__login login-page"}>
            <div className={"login-page__container"}>
                {loginResult.data !== undefined && !loginResult.data &&
                    <div className={"login-page__server-error"}>Неправильный логин или пароль</div>}
                <form className={"login-page__form"} onSubmit={handleSubmit(onSubmit)}>
                    <label className="login-page__section login-section">
                        <span className="login-section__label">Имя пользователя</span>
                        <Controller
                            render={({field}) => <input type="text"
                                                        className={"login-section__input"}
                                                        placeholder={"Введите имя пользователя"}
                                                        {...field} />}
                            name={"username"}
                            control={control}
                            defaultValue={""}
                        />
                        {errors.username && (
                            <span className="login-section__error">
                                  {errors.username.message}
                                </span>)}
                    </label>
                    <label className="login-page__section login-section">
                        <span className="login-section__label">Пароль</span>
                        <Controller
                            render={({field}) => <input type="password"
                                                        className={"login-section__input"}
                                                        placeholder={"Введите пароль"}
                                                        {...field} />}
                            name={"password"}
                            control={control}
                            defaultValue={""}
                        />
                        {errors.password && (
                            <span className="login-section__error">
                                  {errors.password.message}
                                </span>)}
                    </label>
                    <button className="login-page__submit-button button">
                        Войти
                    </button>
                </form>
            </div>
        </section>
    );
}