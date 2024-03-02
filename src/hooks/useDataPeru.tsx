import { useState } from "react";
import { peruData } from "@data";

interface Data {
    value: string;
    label: string;
}

interface DataPeru {
    departaments: string;
    provinces: string;
    districts: string;
}

const useDataPeru = (): [Data[], Data[], Data[], (select: Data) => void, (select: Data) => void, (e: React.FormEvent<HTMLFormElement>) => void, React.Dispatch<React.SetStateAction<DataPeru>> ] => {
    const [dataPeru, setDataPeru] = useState<DataPeru>({
        departaments: '',
        provinces: '',
        districts: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();

        console.log(dataPeru);
        dataPeru
        /* Enviar Departament, Provincia and Distritic API */
    };

    const [departaments] = useState<Data[]>(peruData.departments.map(department => ({ value: department.id, label: department.name })));
    const [provinces, setProvinces] = useState<Data[]>([]);
    const [districts, setDistricts] = useState<Data[]>([]);

    const handleProvinces = (select: Data) : void => {
        setProvinces(
            peruData.provinces
                .filter(province => province.department_id === select.value)
                .map(province => ({ value: province.id, label: province.name }))
        );
    };

    const handleDistricts = (select: Data) : void => {
        setDistricts(
            peruData.districts
                .filter(district => district.province_id === select.value)
                .map(district => ({ value: district.id, label: district.name }))
        );
    };



    return [departaments, provinces, districts, handleProvinces, handleDistricts, handleSubmit, setDataPeru];
};

export default useDataPeru;
