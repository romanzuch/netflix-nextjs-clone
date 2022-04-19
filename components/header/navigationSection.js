import Link from 'next/link';
import { useRouter } from 'next/router';
import { sections } from '../../public/assets/sections';

function NavigationSection() {
    const router = useRouter();
    return (
        <div className='text-sm'>
            {
                Object.entries(sections).map(([key, {name, endpoint}]) => {
                    return (
                        <Link key={key} href={endpoint}>
                            <a className={router.pathname == `${endpoint}` ? 'font-bold px-2' : 'px-2'}>{name}</a>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default NavigationSection;
