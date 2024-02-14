import Button from "./Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { cls } from "../utils/utils";

export default function Form({ info }) {
    return (
        <div className="relative flex flex-col font-content gap-10">
            <img
                src="/image/came1.png"
                className="-rotate-12 absolute -z-10 top-0 left-0 max-w-60 hidden lg:block"
            />
            <div className="flex flex-col items-center ">
                <Title text="Hacer Reservacion" big />
                <p className="text-base sm:px-20 lg:px-60 text-center font-content opacity-80 mt-5">
                    ¡Prepara tu próxima experiencia con nosotros! Completa el formulario a
                    continuación para reservar tu lugar y asegurar una experiencia inolvidable.
                </p>
            </div>
            <div
                className="flex flex-col-reverse md:flex-row rounded-md w-full max-w-[900px] mx-auto px-4 sm:px-10 md:p-0 md:pt-10 md:pl-10 bg-white"
                style={{
                    boxShadow: "0 4px 20px 2px rgba(0,0,0,0.2)",
                }}
            >
                <div className="flex flex-1 items-center justify-center py-10">
                    <Formulario info={info} />
                </div>
                <div className="flex flex-1">
                    <img
                        src="/img/deliverywoman.png"
                        className="h-full object-contain object-bottom"
                    />
                </div>
            </div>
        </div>
    );
}

function Formulario({ info }) {
    let formSchema = Yup.object({
        name: Yup.string()
            .required("El nombre es requerido")
            .min(3, "Mínimo 3 caracteres")
            .max(50, "Máximo 50 caracteres"),
        subject: Yup.string()
            .required("El asunto es requerido")
            .min(5, "Mínimo 5 caracteres")
            .max(50, "Máximo 50 caracteres"),
        message: Yup.string()
            .required("El mensaje es requerido")
            .min(10, "Mínimo 10 caracteres")
            .max(80, "Máximo 80 caracteres"),
    });
    return (
        <Formik
            initialValues={{
                name: "",
                subject: "",
                message: "",
            }}
            validationSchema={formSchema}
            onSubmit={({ name, subject, message }, actions) => {
                const wtp_message = `Hola, me contacto desde su pagina web: travelvfb.com\n\n*Nombre:* ${name}\n*Asunto:* ${subject}\n*Mensaje:* ${message}`;
                const url = `https://api.whatsapp.com/send?phone=${info.whatsapp.trim()}&text=${wtp_message}`;
                const encodedUrl = encodeURI(url);
                console.log(encodedUrl);
                window.open(encodedUrl, "_blank");
                actions.resetForm();
            }}
        >
            {({ handleSubmit, touched, errors }) => (
                <form onSubmit={handleSubmit} className="flex flex-col w-full items-center gap-3">
                    <h3 className="font-title2 text-center text-3xl mb-5">
                        Formulario de Reservacion
                    </h3>
                    <Input
                        placeholder="Nombres"
                        name="name"
                        errors={errors}
                        touched={touched}
                        tag="text"
                    />
                    <Input
                        placeholder="Asunto"
                        name="subject"
                        errors={errors}
                        touched={touched}
                        tag="text"
                    />
                    <Input
                        placeholder="Mensaje"
                        name="message"
                        errors={errors}
                        touched={touched}
                        tag="textarea"
                    />
                    <Button
                        text="Enviar"
                        classNameWrapper="group w-full justify-center bg-[--c1] text-white py-1 rounded-md uppercase mt-5 hover:text-white"
                        classNameIcon="text-base group-hover:translate-x-2 transition-all duration-300"
                        icon={faArrowRight}
                        tag="button"
                        type="submit"
                        // className="w-full bg-[--c2-bg] text-center py-1 hover:bg-white hover:text-[--c3-txt2] transition-all "
                    />
                </form>
            )}
        </Formik>
    );
}

function Error({ name }) {
    return (
        <div className="w-full text-red-500 text-sm -translate-y-2">
            <ErrorMessage name={name} />
        </div>
    );
}

function Input({ tag, className = "", ...props }) {
    const isError = props?.errors[props.name] && props?.touched[props.name];
    let classNameWrapper = cls(
        "flex w-full border-solid border border-gray-400  px-3 py-2 rounded-sm",
        className,
        {
            "border border-red-500": isError,
        }
    );
    if (tag === "textarea") {
        return (
            <>
                <Field as="textarea" className={classNameWrapper} {...props} />
                <Error name={props.name} />
            </>
        );
    }
    return (
        <>
            <Field type="text" className={classNameWrapper} {...props} />
            <Error name={props.name} />
        </>
    );
}
