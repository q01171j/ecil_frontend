import {
    ButtonTwo,
    InputOne,
    ButtonThree,
} from "@components";
import { Link } from "react-router-dom";
import { LogoGoogle, LogoMicrosoft } from "@assets";
import { EnvelopeSimple } from "@icons";
import clsx from "clsx";

function SignUp() {
    return (
        <div className="grid gap-5">
            <div className="grid gap-1">
                <h1 className="text-2xl font-medium">Crea tu Cuenta</h1>
                <p className="text-gray-500 text-sm">
                    Por favor, crea una cuenta para continuar explorando.
                </p>
            </div>
            <div className="grid h-12">
                <ButtonThree text="Google">
                    <LogoGoogle />
                </ButtonThree>
            </div>

            <div className="relative h-6 flex items-center w-full justify-center">
                <div className="border-b border-gray-300 w-full"></div>
                <span className="text-gray-600 text-xs absolute top-1 bg-white px-1">
                    O registrate con tu correo electrónico
                </span>
            </div>

            <div className="grid gap-3">
                <InputOne
                    placeholder="Ingrese tu Correo Electronico"
                    isAuth={true}
                >
                    <EnvelopeSimple />
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

export default SignUp;
