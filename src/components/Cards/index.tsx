import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export default function Cards() {
    const [ok, setOk] = useState(0);

    function handleClickOk() {
        setOk((prevOk) => (prevOk === 1 ? 0 : 1));
        console.log(ok);

    }
    useEffect(() => {
        setOk(ok)
        console.log(ok);

    }, [ok])


    return (
        <div className="bg-gray-500 flex flex-1 flex-row px-2 py-4 items-baseline gap-2 rounded-lg mt-6 ">
            <a onClick={handleClickOk} className="cursor-pointer">
                {ok === 0 ? (
                    <span> <Circle size={18} className="text-blue-light" /></span>
                ) : (
                    <span>
                        <CheckCircle size={18} color="#5e60ce" weight="fill" className="text-gray-100" />
                    </span>
                )}
            </a>
            <span className="text-gray-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolore optio sapiente est.
            </span>
            <span className="cursor-pointer">
                <Trash size={18} className="text-gray-300 " />
            </span>
        </div >
    );
}
