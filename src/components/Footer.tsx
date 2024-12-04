import React from 'react';

interface FooterSectionProps {
    title: string;
}



const Footer: React.FC<FooterSectionProps> = () => {


    return (
        <footer className="bg-gray-light w-full bottom-0 start-0 mt-16 mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://codefor.de/flensburg/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-turkis-dark">OK Lab Flensburg</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Über uns</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Datenschutz</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Lizenzen</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Kontakt</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">OK Lab Flensburg</a>. All Rights Reserved.</span>
          
        </footer>
    )
}

export default Footer;