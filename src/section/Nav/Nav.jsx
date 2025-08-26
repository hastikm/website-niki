import headerlogo from '../../assets/images/header-logo.svg';
import { navLinks } from '../../constans';
import  hamburger  from '../../assets/icons/hamburger.svg';

const Nav = () => {
  return (
    <header className='padding-x py-10 w-full absolute z-10'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img  src={headerlogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className='flex-1 flex justify-center space-x-16  items-center max-lg:hidden'>
         {navLinks.map( (link) =>(
          <li key={link.label}>
           <a 
           href={link.href}
           className='text-gray-700 font-montserrat leading-normal text-lg justify-between
           hover:text-orange-500'
           >
            {link.label}
           </a>
          </li>
         ) )}
        </ul>
            <div>
              <button  type="button" class="max-lg:hidden text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
            </div>

           <div className='block lg:hidden'><img src={hamburger} alt="hamborgur" width={25} height={25} />
           </div>
      </nav>
    </header>
  )
}

export default Nav
