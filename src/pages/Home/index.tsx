import { ChangeEvent, FormEvent, InvalidEvent, useState} from "react";
import Cards from "../../components/Cards";
import Empty from "../../components/Empty";
import Header from "../../components/Header";
import Busca from "../../components/Header/Busca";

export default function Home() {


  const [tasks, setTasks] = useState([{ id: 0, text: "Cortar a grama", concluido: true }])
  const [newTask, setNewTask] = useState('')

  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setTasks([...tasks, { id: 1, text: newTask, concluido: false }])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

  function handleOkComment () {
    console.log(1);
  }


  return (
    <>
      <Header />
      <Busca invalidNewComment={handleNewCommentInvalid} newTaskChange={handleNewTaskChange} newTaskFunction={handleNewTask} newTask={newTask} />
      <main className="flex flex-1 flex-col w-1/2 mx-auto">
        <div className="flex flex-1 flex-wrap justify-between">
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="text-blue-light font-bold">Tarefas Criadas</span>
            <span className="text-gray-200 bg-gray-400 py-1 px-2 rounded-full ">{tasks.length}</span>
          </div>
          <div className="flex items-center justify-between gap-2 text-sm">
            <span className="text-blue-light font-bold">Concluidas</span>
            <span className="text-gray-200 bg-gray-400 py-1 px-2 rounded-full ">{}</span>
          </div>
        </div>
        {tasks.length !== 0 ? (
          tasks.map(task => {
            return <Cards key={task.id} text={task.text} concluido={task.concluido} setOkComment={handleOkComment} />;
          })
        ) : (
          <Empty />
        )}
      </main>
    </>
  )
}
