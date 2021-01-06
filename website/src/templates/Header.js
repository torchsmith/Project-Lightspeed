import logo from '../img/logo.svg';

function Header() {
  return (
    <header className="">
      <nav className="flex items-center justify-between p-6 container mx-auto">
        <a href="#"><img width="80" src={logo} /></a>
        <div class="text-lg text-gray-600 hidden lg:flex">
            <a href="#" className="block mt-4 lg:inline-block text-accent-600 lg:mt-0 mr-10">
                Home
            </a>
            <a href="#" className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
                Services
            </a>
            <a href="#" className="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
                Portfolio
            </a>
            <a href="#" className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0 mr-10">
                Company
            </a>
            <a href="#" className="block hover:text-gray-700 mt-4 lg:inline-block lg:mt-0">
                Contact
            </a>
        </div>
        <div className="flex items-center">
            <div className="mr-5 lg:mr-0">
                <button className="py-2 px-6 rounded-md text-gray-600 hover:text-gray-700 text-lg">Sign in</button>
                <button className="py-2 px-6 bg-accent-500 hover:bg-accent-600 rounded-md text-white text-lg">Sign up</button>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-4 py-3 border rounded text-accent-500 border-accent-500 focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
