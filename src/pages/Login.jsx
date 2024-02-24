import { Link } from "react-router-dom";
import Button from "../landing.components/Button";
import { cls } from "../utils/utils";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { showNotification } from "../component/Notification";
import { useContext } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SessionContext } from "../context/session";

export default function Login({ info }) {
    return (
        <>
            <section className="relative flex justify-center items-center  overflow-hidden font-content min-h-dvh">
                <img
                    src="/image/food2.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/90" />
                <div className="relative z-10 flex flex-col  items-center p-10  w-full max-w-[400px]">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full max-w-32 aspect-square bg-white rounded-full pb-7 pt-4">
                            <img
                                src={info.logo}
                                alt={"Logo de " + info.name}
                                className="w-full h-full object-contain object-center"
                            />
                        </div>
                        <h3 className="text-[--c1-txt] text-3xl text-center font-title p-5 mb-2">
                            Iniciar sesion
                        </h3>
                    </div>
                    <Form />
                    <div className="flex flex-col w-full gap-2 mt-2">
                        <div className="flex flex-row justify-between mt-2">
                            <Item to="/" text=" Volver al inicio" />
                            <Item to="/register" text=" Registrarse" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
function Form() {
    const { progress, login } = useContext(SessionContext);
    return (
        <Formik
            validationSchema={Yup.object({
                email: Yup.string().required("Ingrese su correo electrónico"),
                password: Yup.string().required("Ingrese su contraseña"),
            })}
            initialValues={{
                email: "",
                password: "",
            }}
            onSubmit={(values, { resetForm }) => {
                login(values).then((res) => {
                    if (!res?.success)
                        return showNotification({
                            title: "Cancelado",
                            message: res?.message || "Error al iniciar sesion",
                            type: "warning",
                        });
                    resetForm();
                    showNotification({
                        title: "Sesión iniciada",
                        message: "Bienvenido",
                        type: "success",
                    });
                });
            }}
        >
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="flex flex-col gap-1 w-full">
                    <Input name="email" text="Correo electrónico" />
                    <Input name="password" text="Contraseña" type="password" />
                    <Button
                        tag="button"
                        type="submit"
                        text={!progress ? "Iniciar Sesión" : ""}
                        icon={progress ? faSpinner : ""}
                        classNameIcon="animate-spin text-sm"
                        classNameWrapper={cls(
                            "w-full h-10 items-center bg-[--c6-bg] text-[--c6-txt] border-0 hover:bg-white justify-center mt-4",
                            {
                                "text-black/80 hover:text-black/80 bg-gray-300 hover:bg-gray-300":
                                    progress,
                            }
                        )}
                    />
                </form>
            )}
        </Formik>
    );
}
function Input({ text, name, type = "text", className }) {
    return (
        <>
            <Field
                type={type}
                name={name}
                placeholder={text}
                className={cls(
                    "not-italic placeholder-shown:italic py-2 w-full border-solid border-b border-gray-400 bg-transparent text-[--c1-txt] ",
                    className
                )}
            />
            <div className="w-full h-5 text-red-500 text-sm">
                <ErrorMessage name={name} />
            </div>
        </>
    );
}

function Item({ to, text, className }) {
    return (
        <Link
            to={to}
            className={cls("text-[--c1-txt] text-sm hover:underline opacity-70", className)}
        >
            {text}
        </Link>
    );
}
