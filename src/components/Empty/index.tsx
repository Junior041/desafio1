import ClipboardImg from '../../assets/Clipboard.svg'


export default function Empty() {
    return (
        <div className="flex flex-col justify-center items-center gap-4 mt-4 border-t-gray-400 border-t rounded-t-lg">
            <img src={ClipboardImg} width={56} alt="" className='mt-16' />
            <span className='text-gray-300 text-base'>
                <b>Você ainda não tem tarefas cadastradas</b><br />
                Crie tarefas e organize seus itens a fazer
            </span>
        </div>
    )
}
