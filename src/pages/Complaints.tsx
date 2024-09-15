import {
    ContentOne,
    InputOne,
    ContentThree,
    ButtonTwo,
    SelectOne,
    ContentFour,
    TextAreaOne,
} from "@components";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IdentificationCard, EnvelopeSimple, PhoneCall, File } from "@icons";
import clsx from "clsx";

function Complaints() {
    const [file, setFile] = useState<any>(null);

    const onDrop = useCallback((acceptedFiles: any) => {
        const acceptedFile = acceptedFiles[0];

        setFile(acceptedFile.name);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        // Limita a solo una imagen
        maxFiles: 1,
    });

    return (
        <ContentOne
            firstTitle="Reclama tus derechos"
            title="Libro de Reclamaciones"
            text="Conforme a lo establecido en el Código de Protección y Defensa del Consumidor Peruano, esta institución cuenta con un Libro de reclamaciones a tu disposición.
            Si deseas presentar un reclamo, por favor llena el siguiente formulario:"
            classNamep="w-3/4"
            classContent="text-center items-center"
            classSection="mt-5"
            classContentChildren=""
        >
            <form action="" className="flex w-full justify-center">
                <div className="w-[65%] grid gap-6">
                    <ContentThree
                        title="Datos Personales"
                        desciption="Rellene el Siguiente formulario con sus datos Personales"
                        classNameChildren={clsx("grid gap-7")}
                    >
                        <ContentFour h4="Documento de Identidad :">
                            <SelectOne
                                data={[
                                    { value: "dni", label: "DNI" },
                                    { value: "pasaporte", label: "Pasaporte" },
                                ]}
                                placeholder="Tipo de Documento"
                                onChange={() => {}}
                            />
                            <InputOne
                                placeholder="Número de Documento"
                                id="dni"
                            >
                                <IdentificationCard />
                            </InputOne>
                        </ContentFour>

                        <ContentFour h4="Nombres y Apellidos :">
                            <InputOne placeholder="Nombres" id="nombres" />
                            <InputOne placeholder="Apellidos" id="apellidos" />
                        </ContentFour>

                        <ContentFour
                            h4="Correo Electrónico :"
                            classNameChildren="grid-cols-1"
                        >
                            <InputOne
                                placeholder="Correo Electrónico"
                                id="correo"
                            >
                                <EnvelopeSimple />
                            </InputOne>
                        </ContentFour>

                        <ContentFour
                            h4="Número de Celular :"
                            classNameChildren="grid-cols-1"
                        >
                            <InputOne
                                placeholder="Número de Celular"
                                id="telefono"
                            >
                                <PhoneCall />
                            </InputOne>
                        </ContentFour>

                        <ContentFour
                            h4="Dirección de Domicilio :"
                            classNameChildren="grid-cols-1 h-20"
                            classNameContent="items-start"
                        >
                            <TextAreaOne
                                placeholder="Dirección de Domicilio"
                                id="domicilio"
                            />
                        </ContentFour>
                    </ContentThree>

                    <ContentThree
                        title="Datos del Reclamo"
                        desciption="Rellene el Siguiente formulario con los datos del reclamo"
                        classNameContent="mt-7"
                        classNameChildren={clsx("grid gap-7")}
                    >
                        <ContentFour
                            h4="Cuentanos ¿Que paso? :"
                            classNameChildren="grid-cols-1 h-20"
                            classNameContent="items-start"
                        >
                            <TextAreaOne
                                placeholder="Cuentanos ¿Que paso?"
                                id="domicilio"
                            />
                        </ContentFour>

                        <ContentFour
                            h4="¿Que solución esperas? :"
                            classNameChildren="grid-cols-1 h-20"
                            classNameContent="items-start"
                        >
                            <TextAreaOne
                                placeholder="¿Que solución esperas?"
                                id="domicilio"
                            />
                        </ContentFour>

                        <ContentFour
                            h4="Evidencia de lo que paso :"
                            classNameChildren="grid-cols-1 h-20"
                            classNameContent="items-start"
                        >
                            <div
                                {...getRootProps()}
                                className="border rounded-md w-full h-20 border-gray-300 cursor-pointer flex items-center text-sm"
                            >
                                <input {...getInputProps()} />
                                <div className="ml-3">
                                    {
                                        file ? (
                                            <span className="flex gap-2 items-center"><File className="text-2xl" />{file}</span>
                                        ) :
                                        (
                                            <span className="text-gray-500">Arrastra y suelta su evidencia aquí, o haz clic para seleccionar un archivo.</span>
                                        )
                                    }
                                </div>
                            </div>
                        </ContentFour>
                    </ContentThree>

                    <div className="flex justify-end gap-5">
                        <ButtonTwo
                            className="w-44 hover:bg-[#E7AF28] bg-transparent text-[#E7AF28] hover:border-[#E7AF28] hover:text-white border-[#E7AF28]"
                            onClick={() => {}}
                        >
                            Cancelar
                        </ButtonTwo>
                        <ButtonTwo className="w-52" onClick={() => {}}>
                            Enviar
                        </ButtonTwo>
                    </div>
                </div>
            </form>
        </ContentOne>
    );
}

export default Complaints;
