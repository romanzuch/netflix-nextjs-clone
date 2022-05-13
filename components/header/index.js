import React from 'react';
import Image from 'next/image';
import SearchButton from './searchButton';
import NotificationButton from './notificationButton';
import SettingsButton from './settingsButton';
import NavigationSection from './navigationSection';

const Header = () => {
    return (
        <header className='top-0 sticky bg-[#141414] text-white py-4 flex flex-col sm:flex-row p-5 mb-5 justify-between items-center w-[100%] z-50'>
            <div className='mx-4'>
                <Image
                    className='relative object-contain'
                    src='/assets/Netflix.png'
                    alt='profile icon'
                    width={115}
                    height={34}
                />
            </div>
            
            <div className='flex flex-grow flex-col sm:flex-row justify-between items-center'>
                {/* here comes the links section */}
                <NavigationSection />

            </div>
        </header>
    )
}

export default Header;