import Logo from '../../assets/logo.svg'
import Busca from './Busca'
export default function Header() {
  return (
    <>
      <div className="bg-gray-700 w-screen flex flex-1 align-middle justify-center h-52">
        <img src={Logo} width={126} alt="" />
      </div>
      <Busca />
    </>
  )
}
