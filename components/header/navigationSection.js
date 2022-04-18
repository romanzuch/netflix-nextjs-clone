import Link from 'next/link';
import { useRouter } from 'next/router';

function NavigationSection() {
    const router = useRouter();
    return (
        <>
            <Link href='/'> 
                <a className={router.pathname == "/" ? "font-bold" : ""}>Startseite</a>
            </Link>
            <Link href='/serien'> 
                <a className={router.pathname == "/serien" ? "font-bold" : ""}>Serien</a>
            </Link>
            <Link href='/filme'> 
                <a className={router.pathname == "/filme" ? "font-bold" : ""}>Filme</a>
            </Link>
            <Link href='/neu'> 
                <a className={router.pathname == "/neu" ? "font-bold" : ""}>Neu und beliebt</a>
            </Link>
            <Link href='/meins'> 
                <a className={router.pathname == "/meins" ? "font-bold" : ""}>Meine Liste</a>
            </Link>
            <Link href='/audio'> 
                <a className={router.pathname == "/audio" ? "font-bold" : ""}>Audio und Untertitel</a>
            </Link>
        </>
    )
}

export default NavigationSection;