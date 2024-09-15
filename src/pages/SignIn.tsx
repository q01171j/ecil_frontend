import {
    ButtonTwo,
    InputOne,
    ButtonThree,
    InputTwo,
    LinkItemTwo,
} from "@components";
import { Link } from "react-router-dom";
import { LogoGoogle } from "@assets";
import { EnvelopeSimple, Lock } from "@icons";
import clsx from "clsx";
import { createClient } from "@supabase/supabase-js";
import { AuthError, Session, User } from "@supabase/supabase-js";

const supabase = createClient(
    import.meta.env.VITE_APP_SUPABASE_URL,
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY
);

function SignIn() {

    return (
        <div className="grid gap-5">
            <div className="grid gap-1">
                <h1 className="text-2xl font-medium">Bienvenido de Nuevo</h1>
                <p className="text-gray-500 text-sm">
                    Por favor, inicia sesión para continuar explorando.
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
                    O inicia sesión con tu correo electrónico
                </span>
            </div>

            <div className="grid gap-3">
                <InputOne
                    placeholder="Ingrese tu Correo Electronico"
                    isAuth={true}
                >
                    <EnvelopeSimple />
                </InputOne>

                <InputTwo placeholder="Ingrese tu Contraseña" isAuth={true}>
                    <Lock />
                </InputTwo>

                <div className="flex justify-end">
                    <LinkItemTwo
                        link="/forgot-password"
                        className="after:h-[2px] text-sm text-gray-500"
                    >
                        ¿Has olvidaste tu contraseña?
                    </LinkItemTwo>
                </div>
            </div>

            <ButtonTwo
                onClick={() => {}}
                className={clsx(
                    "w-full h-11 rounded-md bg-transparent text-[#2F6B85] hover:border-[#2F6B85] hover:text-white hover:bg-[#2F6B85]"
                )}
            >
                Iniciar Sesión
            </ButtonTwo>

            <div className="flex justify-center">
                <p className="text-center text-gray-500 text-sm flex gap-2">
                    ¿No tienes una cuenta?
                    <Link
                        to="/autenticacion/registrarse"
                        className="text-[#2F6B85] font-medium transition-all"
                    >
                        Crea una Cuenta
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default SignIn;
