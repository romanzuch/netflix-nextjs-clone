import React from 'react';
import Image from 'next/image';
import SearchButton from './header/searchButton';
import NotificationButton from './header/notificationButton';
import SettingsButton from './header/settingsButton';
import NavigationSection from './header/navigationSection';

const Header = () => {
    return (
        <header className='top-0 sticky text-white py-4 flex flex-col sm:flex-row m-5 justify-between items-center'>
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

                <div className='flex flex-grow justify-evenly max-w-xs'>
                    <SearchButton />
                    <NotificationButton />
                    <SettingsButton />
                </div>
            </div>
        </header>
    )
}

export default Header;