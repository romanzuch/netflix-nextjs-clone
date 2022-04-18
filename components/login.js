import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    return (
        <div className='min-h-full flex flex-col items-center justify-center'>
            <div className='flex flex-col text-center mt-32'>
                <h1 className='mb-6 text-white text-6xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-16'>
                    Wer schaut gerade?
                </h1>
                <div className='grid grid-cols-4 gap-8'>
                    <LoginProfileButton name='roman'/>
                    <LoginProfileButton name='daria'/>
                    <LoginProfileButton name='schnecke'/>
                    <AddProfileButton />
                </div>
            </div>
        </div>
    )
}

const LoginProfileButton = (props) => {
    return (
        <Link href='/profileHome'>
            <a>
                <LoginProfileIcon name={props.name} />
            </a>
        </Link>
    )
}

const LoginProfileIcon = (props) => {
    return (
        <div className='text-slate-300 hover:text-white cursor-pointer w-160 h-160 grid grid-cols-1 content-between'>
            <Image
                className='rounded-md relative'
                src='/assets/profile-icon.jpg'
                alt='profile icon'
                layout='responsive'
                width={144}
                height={144}
            />
            <p className='text-xl xs:text-xs sm:text-sm md:text-md lg:text-lg'>
                {props.name}
            </p>
        </div>
    )
}

const AddProfileButton = () => {
    return (
        <div className='text-slate-300 hover:text-white cursor-pointer w-160 h-160 flex flex-col'>
            <div className='h-[144px] w-[144px] p-8 flex justify-center items-center hover:bg-slate-300 rounded-md'>
            <Image
                className='object-contain addProfileButton'
                src='/assets/plus-symbol-button.png'
                alt='add button'
                height={80}
                width={80}
            />
            </div>
            <p className='grow-0 text-xl xs:text-xs sm:text-sm md:text-md lg:text-lg'>
                Profil hinzufügen
            </p>
        </div>
    )
}

export default Login;