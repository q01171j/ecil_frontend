import {
    ButtonTwo,
    InputOne,
} from "@components";
import { Link } from "react-router-dom";
import { Shield } from "@icons";
import clsx from "clsx";

function SignUpCode() {
    return (
        <div className="grid gap-5">
            <div className="grid gap-1">
                <h1 className="text-2xl font-medium">Verificar Correo Electronico</h1>
                <p className="text-gray-500 text-sm">
                    Por favor, ingresar el código de verificación enviado a tu correo electronico.
                </p>
            </div>

            <div className="grid gap-3">
                <InputOne
                    placeholder="Ingrese el Código de Verificación"
                    isAuth={true}
                >
                    <Shield />
                </InputOne>
            </div>

            <ButtonTwo
                onClick={() => {}}
                className={clsx(
                    "w-full h-11 rounded-md bg-transparent text-[#2F6B85] hover:border-[#2F6B85] hover:text-white hover:bg-[#2F6B85]"
                )}
            >
                Validar Código
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

export default SignUpCode;
