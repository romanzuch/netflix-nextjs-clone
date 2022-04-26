import '../styles/globals.css';
import Header from '../components/header';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Header />
      <Component {...pageProps} router={router} className='relative'/>
    </>
  )
}

export default MyApp
