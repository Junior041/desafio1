import Logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <>
      <div className="bg-gray-700 w-screen flex flex-1 align-middle justify-center h-52">
        <img src={Logo} width={126} alt="" />
      </div>
    </>
  )
}
