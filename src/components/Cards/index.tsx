import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
interface CardsProps {
    text: string;
    concluido: boolean;
}

export default function Cards({ text, concluido }: CardsProps) {
    const [ok, setOk] = useState(concluido);

    function handleClickOk() {
        setOk((prevOk) => (prevOk === true ? false : true));
    }
    useEffect(() => {
        setOk(ok)
        console.log(ok);

    }, [ok])


    return (
        <div className="bg-gray-500 flex flex-1 flex-row px-2 py-4 items-baseline gap-2 rounded-lg mt-6 align-middle">
            <a onClick={handleClickOk} className="cursor-pointer w-1/6 flex justify-center">
                {ok === false ? (
                    <span> <Circle size={18} className="text-blue-light" /></span>
                ) : (
                    <span>
                        <CheckCircle size={18} color="#5e60ce" weight="fill" className="text-gray-100" />
                    </span>
                )}
            </a>
            <span className="text-gray-100 w-3/4">
                {text}
            </span>
            <span className="cursor-pointer w-1/6 flex justify-center">
                <Trash size={18} className="text-gray-300" />
            </span>
        </div >
    );
}
