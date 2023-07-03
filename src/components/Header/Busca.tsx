import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, InvalidEvent } from "react";

interface BuscaProps {
  newTaskFunction: (event: FormEvent<HTMLFormElement>) => void;
  newTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
  invalidNewComment: (event: InvalidEvent<HTMLInputElement>) => void;
}

export default function Busca({ newTaskFunction, newTaskChange, invalidNewComment }: BuscaProps) {

  return (
    <div className="flex items-center flex-row mx-auto justify-center relative -top-7">
      <form onSubmit={newTaskFunction} className="w-1/2 mx-auto gap-2 flex">
        <input
          type="text"
          name="task"
          id="task"
          onChange={newTaskChange}
          onInvalid={invalidNewComment}
          required
          className="
            bg-gray-500 w-4/5 p-4 text-gray-300 rounded-lg text-base
            focus:text-gray-100 outline-purple-dark focus-visible:border-purple-dark"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          type="submit"
          className="
            w-1/5 bg-blue-dark p-4 rounded-lg text-gray-100 flex flex-row 
            items-center justify-center text-sm gap-2 font-bold
            hover:bg-blue-light
            "
        >
          Criar <PlusCircle size={20} />
        </button>
      </form>
    </div>
  );
}
