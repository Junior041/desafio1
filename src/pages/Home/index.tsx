import { useState } from "react";
import Cards from "../../components/Cards";
import Empty from "../../components/Empty";

export default function Home() {
  const initialComments: Comment = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque delectus voluptas nobis, odio aliquam. Sint rerum eum, magni repellat deleniti minima voluptate sit, error earum at assumenda reiciendis provident.",
      concluido: false
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque delectus voluptas nobis, odio aliquam. Sint rerum eum, magni repellat deleniti minima voluptate sit, error earum at assumenda reiciendis provident.",
      concluido: false
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita neque delectus voluptas nobis, odio aliquam. Sint rerum eum, magni repellat deleniti minima voluptate sit, error earum at assumenda reiciendis provident.",
      concluido: false
    },
  ]

  const [comments, setComments] = useState(initialComments)

  

  return (
    <main className="flex flex-1 flex-col w-1/2 mx-auto">
      <div className="flex flex-1 flex-wrap justify-between">
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="text-blue-light font-bold">Tarefas Criadas</span>
          <span className="text-gray-200 bg-gray-400 py-1 px-2 rounded-full ">0</span>
        </div>
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="text-blue-light font-bold">Concluidas</span>
          <span className="text-gray-200 bg-gray-400 py-1 px-2 rounded-full ">0</span>
        </div>
      </div>
      {comments.length !== 0 ? (
        
        <Cards />
      ): (
        <Empty />
      )}
    </main>
  )
}
