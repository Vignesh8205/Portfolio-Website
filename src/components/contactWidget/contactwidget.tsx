import React, { useEffect, useState } from 'react';
import { BsPhone } from 'react-icons/bs';

import { IoMdContact } from 'react-icons/io'; // main toggle icon
import { numbers, socialmedialink } from '../../Data';
import ShareButton from '../sharebutton/sharebutton';
import { LiaLinkedin } from 'react-icons/lia';
import { GrGithub } from 'react-icons/gr';

const ContactWidget: React.FC = () => {
    const [selectedNumber, setSelectedNumber] = useState<string>('');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const randomIndex: number = Math.floor(Math.random() * numbers.length);
        setSelectedNumber(numbers[randomIndex]);
    }, []);

    const toggleIcons = (): void => {
        setIsOpen((prev) => !prev);
    };

    return (
        selectedNumber && (
            <div className="fixed bottom-6 right-6 flex flex-col items-center z-50 gap-3">
                {/* Animated Expandable Icons */}
                {isOpen && (
                    <>
                        <a
                            href={`tel:${selectedNumber}`}
                            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                        >
                            <BsPhone size={24} />
                        </a>

                        <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-white-600 transition duration-300">
                            <ShareButton />
                        </div>

                        <a
                            href={`${socialmedialink.linkedin}`}
                            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                        >
                            <LiaLinkedin size={24} />
                        </a>

                          <a
                            href={`${socialmedialink.github}`}
                            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
                        >
                            <GrGithub size={24} />
                        </a>



                    </>
                )}

                {/* Main Toggle Icon */}
                <button
                    onClick={toggleIcons}
                    className="bg-[rgb(33,33,33)] text-white p-3 rounded-full shadow-xl hover:bg-[rgb(50,50,50)] transition duration-300"
                >
                    <IoMdContact style={{ color: 'royalblue' }} size={24} />
                </button>
            </div>
        )
    );
};

export default ContactWidget;
