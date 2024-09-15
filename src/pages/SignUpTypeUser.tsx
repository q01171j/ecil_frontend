import {
    ButtonTwo,
} from "@components";
import { Link } from "react-router-dom";
import { User, Buildings } from "@icons";
import clsx from "clsx";

function SignUpTypeUser() {
  return (
    <div className="grid gap-5">
            <div className="grid gap-1">
                <h1 className="text-2xl font-medium">Tipo de Usuario</h1>
                <p className="text-gray-500 text-sm">
                    Por favor, selecciona el tipo de usuario que eres.
                </p>
            </div>

            <div className="grid gap-3">
                <button>
                    <User />
                    <div>

                    </div>
                </button>
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
  )
}

export default SignUpTypeUser