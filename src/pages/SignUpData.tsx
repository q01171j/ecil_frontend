import { ButtonTwo, InputOne } from "@components";
import { Link } from "react-router-dom";
import { EnvelopeSimple } from "@icons";
import clsx from "clsx";

function SignUpData() {
    return (
        <div className="grid gap-5">
            <div className="grid gap-1">
                <h1 className="text-2xl font-medium">Datos Personales</h1>
                <p className="text-gray-500 text-sm">
                    Por favor, complete el siguiente formulario para continuar.
                </p>
            </div>

            <div className="grid gap-3">
                <div>
                    <h3></h3>
                </div>
                <InputOne placeholder="Ingrese sus Nombres" isAuth={true}>
                </InputOne>
                <InputOne placeholder="Ingrese sus Apellidos" isAuth={true}>
                </InputOne>
            </div>

            <ButtonTwo
                onClick={() => {}}
                className={clsx(
                    "w-full h-11 rounded-md bg-transparent text-[#2F6B85] hover:border-[#2F6B85] hover:text-white hover:bg-[#2F6B85]"
                )}
            >
                Verificar Correo Electronico
            </ButtonTwo>

            <div className="flex justify-center">
                <p className="text-center text-gray-500 text-sm flex gap-2">
                    ¿Ya tienes una cuenta?
                    <Link
                        to="/autenticacion/iniciar-sesion"
                        className="text-[#2F6B85] font-medium transition-all"
                    >
                        Ingresa a tu Cuenta
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignUpData;
