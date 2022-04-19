import Link from 'next/link';
import { useRouter } from 'next/router';

function NavigationSection() {
    const router = useRouter();
    return (
        <div className='text-sm'>
            <Link href='/'> 
                <a className={router.pathname == "/" ? "font-bold px-2" : "px-2"}>Startseite</a>
            </Link>
            <Link href='/serien'> 
                <a className={router.pathname == "/serien" ? "font-bold px-2" : "px-2"}>Serien</a>
            </Link>
            <Link href='/filme'> 
                <a className={router.pathname == "/filme" ? "font-bold px-2" : "px-2"}>Filme</a>
            </Link>
            <Link href='/neu'> 
                <a className={router.pathname == "/neu" ? "font-bold px-2" : "px-2"}>Neu und beliebt</a>
            </Link>
            <Link href='/meins'> 
                <a className={router.pathname == "/meins" ? "font-bold px-2" : "px-2"}>Meine Liste</a>
            </Link>
            <Link href='/audio'> 
                <a className={router.pathname == "/audio" ? "font-bold px-2" : "px-2"}>Audio und Untertitel</a>
            </Link>
        </div>
    )
}

export default NavigationSection;