import { CgProfile } from 'react-icons/cg';
import { BsCart3 } from 'react-icons/bs';
const Navbar = () => {
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl lg:ml-12 text-white">Sharaf DG</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="pr-0 flex items-center justify-center input input-bordered h-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input className="lg:pr-48 py-1" type="text" placeholder="Search Sharaf DG" />
                        <img src="/images/searchbarsite.png" alt="" />
                    </div>
                </ul>
            </div>
            <div className="navbar-end mr-6">
                <div className='flex justify-between items-center'>
                    <select className=" bg-primary text-white font-semibold">
                        <option selected>English</option>
                        <option>Bangla</option>
                    </select>
                    <div className='flex justify-center items-center text-white mx-8'>
                        <CgProfile className='text-3xl'></CgProfile>
                        <p>SIGN IN</p>
                    </div>
                    <div className='text-white'>
                        <BsCart3 className='text-2xl'></BsCart3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;