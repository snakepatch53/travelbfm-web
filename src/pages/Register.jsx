import { Link } from "react-router-dom";
import Button from "../landing.components/Button";
import { cls } from "../utils/utils";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { faEye, faEyeSlash, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ObjectToFormdata } from "../utils/validations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { showNotification } from "../component/Notification";
import { SessionContext } from "../context/session";
import { registerUser } from "../services/users";

export default function Register({ info }) {
    return (
        <>
            <section className="relative flex justify-center items-center px-[--pdd] overflow-hidden font-content min-h-dvh">
                <img
                    src="/image/food4.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/90" />

                <div className="relative z-10 flex flex-col items-center w-full max-w-[700px] bg-black/30 p-10 rounded-md">
                    <div className="flex flex-col justify-center items-center">
                        <div className="w-full max-w-32 aspect-square bg-white rounded-full pb-7 pt-4">
                            <img
                                src={info.logo}
                                alt={"Logo de " + info.name}
                                className="w-full h-full object-contain object-center"
                            />
                        </div>
                        <h3 className="text-[--c1-txt] text-3xl text-center font-title p-5">
                            Registrarse
                        </h3>
                    </div>
                    <Form />
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-row justify-between mt-2">
                            <Item to="/" text="Volver al inicio" />
                            <Item to="/login" text="Iniciar Sesión" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Form() {
    const { updateSession } = useContext(SessionContext);
    const [isLoading, setIsLoading] = useState(false);
    const validFileExtensions = { image: ["jpg", "png", "jpeg"] };
    const getAllowedExt = (type) => validFileExtensions[type].map((e) => `.${e}`).toString();
    const isValidFileType = (fileName, fileType) =>
        fileName && validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1;
    const MAX_FILE_SIZE = 1000000;
    let formSchema = Yup.object().shape({
        name: Yup.string()
            .required("El nombre es requerido")
            .min(3, "Mínimo 3 caracteres")
            .max(50, "Máximo 50 caracteres"),
        lastname: Yup.string()
            .required("El apellido es requerido")
            .min(3, "Mínimo 3 caracteres")
            .max(50, "Máximo 50 caracteres"),
        photo: Yup.mixed()
            .test(
                "is-valid-type",
                "Tipo de archivo no valido",
                (value) => isValidFileType(value && value.name.toLowerCase(), "image") || !value
            )
            .test(
                "is-valid-size",
                "El tamaño máximo es " + MAX_FILE_SIZE / 1000000 + "MB",
                (value) => (value && value.size <= MAX_FILE_SIZE) || !value
            ),
        phone: Yup.string()
            .required("El celular es requerido")
            .min(10, "Mínimo 10 caracteres")
            .max(15, "Máximo 15 caracteres"),
        address: Yup.string()
            .required("La dirección es requerida")
            .min(5, "Mínimo 5 caracteres")
            .max(100, "Máximo 100 caracteres"),
        email: Yup.string()
            .required("El email es requerido")
            .email("El email no es valido")
            .min(5, "Mínimo 5 caracteres")
            .max(70, "Máximo 70 caracteres"),
        password: Yup.string()
            .required("La contraseña es requerida")
            .min(8, "Mínimo 8 caracteres")
            .max(50, "Máximo 50 caracteres"),
        confirmPassword: Yup.string()
            .required("La confirmación de contraseña es requerida")
            .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
    });
    return (
        <Formik
            initialValues={{
                name: "",
                lastname: "",
                photo: "",
                phone: "",
                address: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={formSchema}
            onSubmit={(values, { resetForm }) => {
                setIsLoading(true);
                if (!values.photo) delete values.photo;
                let data = ObjectToFormdata(values);
                registerUser({ data }).then((res) => {
                    setIsLoading(false);
                    if (res?.success) {
                        updateSession(res.data);
                        showNotification({
                            title: "Exito",
                            message: "Usuario creado con exito",
                            type: "success",
                        });
                        resetForm();
                    } else {
                        showNotification({
                            title: "Error desde el servidor",
                            message: res.message || "Ocurrio un error al intentar crear el usuario",
                            type: "danger",
                        });
                    }
                });
            }}
        >
            {({ setFieldValue, handleSubmit, errors, touched }) => (
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-9 pt-5 items-center w-full"
                >
                    <div className="grid sm:grid-cols-2 gap-8 w-full">
                        <Input
                            name="name"
                            error={errors.name}
                            touched={touched.name}
                            text="Nombre"
                            placeholder="Escriba su nombre"
                        />
                        <Input
                            name="lastname"
                            error={errors.lastname}
                            touched={touched.lastname}
                            text="Apellido"
                            placeholder="Escriba su apellido"
                        />
                        <InputFile
                            name="photo"
                            error={errors.photo}
                            touched={touched.photo}
                            text="Foto"
                            type="file"
                            placeholder="Foto"
                            allowedExts={getAllowedExt("image")}
                            setValue={setFieldValue}
                        />
                        <Input
                            name="phone"
                            error={errors.phone}
                            touched={touched.phone}
                            text="Celular"
                            placeholder="Escriba su numer de celular"
                        />
                        <Input
                            name="address"
                            error={errors.address}
                            touched={touched.address}
                            text="Direccion"
                            placeholder="Escriba su direccion "
                        />
                        <Input
                            name="email"
                            error={errors.email}
                            touched={touched.email}
                            text="Email"
                            placeholder="Escriba su correo electronico"
                        />
                        <InputPassword
                            name="password"
                            error={errors.password}
                            touched={touched.password}
                            text="Contraseña"
                            placeholder="Escriba su contraseña"
                        />
                        <InputPassword
                            name="confirmPassword"
                            error={errors.confirmPassword}
                            touched={touched.confirmPassword}
                            text="Confirmar Contraseña"
                            placeholder="Confirme su contraseña"
                        />
                    </div>

                    <Button
                        tag="button"
                        type="submit"
                        text={!isLoading ? "Registrarse" : ""}
                        icon={isLoading ? faSpinner : ""}
                        classNameIcon="animate-spin text-sm"
                        classNameWrapper={cls(
                            "w-full h-10 items-center bg-[--c6-bg] text-[--c6-txt] border-0 hover:bg-white justify-center",
                            {
                                "text-black/80 hover:text-black/80 bg-gray-300 hover:bg-gray-300":
                                    isLoading,
                            }
                        )}
                    />
                </form>
            )}
        </Formik>
    );
}

function Input({
    name,
    text,
    error,
    touched,
    type = "",
    placeholder,
    classNameWrapper = "",
    classNameInput = "",
}) {
    // console.log(error);
    const classWrapper = cls("w-full bg-transparent text-[--c1-txt]", classNameWrapper);
    const classInput = cls(
        "focus:bg-transparent not-italic placeholder-shown:italic py-2 w-full border-solid border-b border-gray-400 bg-transparent text-[--c1-txt] ",
        classNameInput,
        { "border-red-500": error && touched }
    );
    return (
        <div className={classWrapper}>
            <span>{text}</span>
            <Field name={name} placeholder={placeholder} as={type} className={classInput} />
            <Error name={name} />
        </div>
    );
}

function InputPassword({
    name,
    text,
    error,
    touched,
    placeholder,
    classNameWrapper = "",
    classNameInput = "",
}) {
    const [isShow, setIsShow] = useState(false);
    const classWrapper = cls("w-full bg-transparent text-[--c1-txt]", classNameWrapper);
    const classInput = cls(
        "not-italic placeholder-shown:italic py-2 w-full border-solid border-b border-gray-400 bg-transparent text-[--c1-txt] ",
        classNameInput,
        { "border-red-500": error && touched }
    );
    return (
        <div className={classWrapper}>
            <span>{text}</span>
            <div className={cls("flex", classInput)}>
                <Field
                    type={isShow ? "text" : "password"}
                    className={cls(classInput, "border-0 w-full p-0")}
                    name={name}
                    placeholder={placeholder}
                />
                <button
                    className="w-8 ml-2 opacity-50 hover:opacity-100 transition-all duration-200"
                    onClick={() => setIsShow(!isShow)}
                    type="button"
                >
                    <FontAwesomeIcon
                        icon={!isShow ? faEye : faEyeSlash}
                        className="text-[--c1-txt]"
                    />
                </button>
            </div>
            <Error name={name} />
        </div>
    );
}

function InputFile({
    name,
    text,
    error,
    touched,
    type = "text",
    placeholder,
    classNameWrapper = "",
    classNameInput = "",
    allowedExts,
    setValue,
}) {
    const classWrapper = cls("w-full bg-transparent text-[--c1-txt]", classNameWrapper);
    const classInput = cls(
        "not-italic placeholder-shown:italic py-2 w-full border-solid border-b border-gray-400 bg-transparent text-[--c1-txt] ",
        classNameInput,
        { "border-red-500": error && touched }
    );
    return (
        <div className={classWrapper}>
            <span>{text}</span>
            <div className="relative w-full">
                <label
                    htmlFor={name}
                    className={cls(
                        classInput,
                        "block italic text-white/70 cursor-pointer hover:text-white/100 transition-all duration-200"
                    )}
                >
                    {placeholder}
                </label>
                <input
                    type={type}
                    className={cls("hidden", classInput)}
                    id={name}
                    name={name}
                    accept={allowedExts}
                    onChange={(event) => {
                        setValue(name, event.currentTarget.files[0]);
                    }}
                />
            </div>
            <Error name={name} />
        </div>
    );
}

function Error({ name }) {
    return (
        <div className="w-full text-red-500 text-sm">
            <ErrorMessage name={name} />
        </div>
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
