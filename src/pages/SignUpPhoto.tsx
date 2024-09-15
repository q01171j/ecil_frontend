import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ButtonTwo } from "@components";
import { Link } from "react-router-dom";
import clsx from "clsx";

function SignUpPhoto() {

    const [file, setFile] = useState<any>(null);

    const onDrop = useCallback((acceptedFiles: any) => {
        // Asegúrate de que solo se haya seleccionado una imagen
        if (acceptedFiles.length !== 1) {
            console.error("Solo puedes cargar una imagen a la vez.");
            return;
        }

        // Verifica si el archivo es una imagen
        const acceptedFile = acceptedFiles[0];
        if (!acceptedFile.type.startsWith("image/")) {
            console.error("El archivo seleccionado no es una imagen.");
            return;
        }

        setFile(acceptedFile);

        // Hacer algo con el archivo, como mostrarlo en tu interfaz
        console.log("Archivo de imagen aceptado:", acceptedFile);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        // Limita a solo una imagen
        maxFiles: 1,
        // Acepta solo archivos de imagen
        accept: {
            'image/*': ['.jpg, .jpeg, .png, .gif, .bmp, .svg, .webp']
        }
    });

    return (
        <div className="grid gap-5">
            <div className="grid gap-1">
                <h1 className="text-2xl font-medium">
                    Foto de Perfil
                </h1>
                <p className="text-gray-500 text-sm">
                    Por favor, sube una foto para su perfil, se recomienda poner
                    una foto de usted para que los demás usuarios y empresas
                    puedan reconocerlo.
                </p>
            </div>

            <div className="w-full flex justify-center">
                <div className="w-36 h-36 rounded-full border-2 overflow-hidden border-gray-400">
                    <img src={file ? URL.createObjectURL(file) : ""} className="w-full h-full object-cover object-center" />
                </div>
            </div>

            <div {...getRootProps()} className="border rounded-md w-full h-20 border-gray-400 cursor-pointer flex items-center justify-center text-xs">
                <input {...getInputProps()} />
                <div className="w-3/4 text-center grid gap-2">
                    <p>
                        Arrastra y suelta una imagen aquí, o haz clic para seleccionar una imagen
                    </p>
                    <p className="text-gray-500 text-xs">
                        (Solo se permite un archivo de imagen)
                    </p>
                </div>
            </div>

            <ButtonTwo
                onClick={() => {}}
                className={clsx(
                    "w-full h-11 rounded-md bg-transparent text-[#2F6B85] hover:border-[#2F6B85] hover:text-white hover:bg-[#2F6B85]"
                )}
            >
                Continuar
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

export default SignUpPhoto;
