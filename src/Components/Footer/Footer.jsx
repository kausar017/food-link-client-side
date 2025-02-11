import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo/foode-logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provaider/AuthProvaider';

const Footer = () => {

    const { user } = useContext(AuthContext)


    return (
        <div

        >
            <footer className="px-4 divide-y bg-gray-800/30  text-white  border rounded-md ">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3">
                        <div rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                            <div className="flex flex-col  leading-10 rounded-full ">
                                <div className='flex items-center space-x-2'>
                                    <img className='w-12 h-12 ' src={logo} alt="" />
                                    <span className="self-center text-2xl font-semibold">Food Link</span>
                                </div>

                                <div className='flex space-x-2'>
                                    <NavLink to={'/'} rel="noopener noreferrer" className="flex items-center justify-center px-2 rounded-lg hover:shadow-lg hover:shadow-blue-600">Home</NavLink>
                                    <NavLink to={'/available'} rel="noopener noreferrer" className="flex items-center justify-center px-2 rounded-lg hover:shadow-lg hover:shadow-blue-600">Available</NavLink>
                                    <NavLink to={'/about'} rel="noopener noreferrer" className="flex items-center justify-center px-2 rounded-lg hover:shadow-lg hover:shadow-blue-600">About</NavLink>
                                    <NavLink to={'/contact'} rel="noopener noreferrer" className="flex items-center justify-center px-2 rounded-lg hover:shadow-lg hover:shadow-blue-600">Contact</NavLink>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50 ">Product</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Features</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Integrations</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="tracking-wide uppercase text-gray-50 ">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Privacy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="uppercase text-gray-50 ">Developers</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Public API</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Documentation</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Guides</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <div className="uppercase text-gray-50 ">Social media</div>
                            <div className="flex justify-start space-x-3">
                                <a rel="noopener noreferrer" href="https://web.facebook.com/kausar017" target='blank' title="Facebook" className="flex items-center p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" /></svg>
                                </a>
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/kousar-mia/" title="Twitter" className="flex items-center p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ffffff"><path d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zM8.95 9.4H6.16v8.1h2.8V9.4zm6.84-.19c-1.32 0-2 .63-2.38 1.16l-.13.18V9.4h-2.79l.01.49V17.5h2.78v-4.52a1.52 1.52 0 0 1 1.52-1.64c.96 0 1.37.66 1.41 1.66v4.5H19v-4.64c0-2.49-1.37-3.65-3.2-3.65zM7.58 5.5C6.62 5.5 6 6.1 6 6.9c0 .73.54 1.32 1.38 1.4h.18c.97 0 1.57-.62 1.57-1.4-.01-.8-.6-1.4-1.55-1.4z" /></svg>
                                </a>
                                <a rel="noopener noreferrer" href="https://www.instagram.com/md.kousar_mia/?hl=bn" title="Instagram" className="flex items-center p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#ffffff"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-gray-400 ">© 2024 copy write md:kausar  mia.</div>
            </footer>
        </div>
    );
};

export default Footer;