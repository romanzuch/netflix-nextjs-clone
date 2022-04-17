import React from 'react';
import Image from 'next/image';

const Login = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col text-center'>
                <h1 className='mb-6 text-white text-6xl mb-16'>Wer schaut gerade?</h1>
                <div className='grid grid-cols-4 gap-8'>
                    <LoginProfileIcon name='roman'/>
                    <LoginProfileIcon name='daria'/>
                    <LoginProfileIcon name='schnecke'/>
                    <AddProfileButton />
                </div>
            </div>
        </div>
    )
}

const LoginProfileIcon = (props) => {
    return (
        <div className='text-slate-300 hover:text-white cursor-pointer w-160 h-160 grid grid-cols-1 content-between'>
            <Image
                className='rounded-md'
                src='/assets/profile-icon.jpg'
                alt='profile icon'
                height={144}
                width={144}
            />
            <p className='text-xl'>
                {props.name}
            </p>
        </div>
    )
}

const AddProfileButton = () => {
    return (
        <div className='text-slate-300 hover:text-white cursor-pointer w-160 h-160 flex flex-col'>
            <div className='h-[144px] w-[144px] flex justify-center items-center'>
                <Image
                    className='object-contain'
                    src='/assets/plus-symbol-button.png'
                    alt='add button'
                    height={64}
                    width={64}
                />
            </div>
            <p className='grow-0 text-xl'>
                Profil hinzufügen
            </p>
        </div>
    )
}

export default Login;