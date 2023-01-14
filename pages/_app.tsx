import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Header from '@/components/molecules/header';
import Head from 'next/head';
import Context from '@/shared/appContext';
import { useRouter } from 'next/router';
import useSession from '@/shared/hooks/useSession';
import { useEffect } from 'react';
import { ROUTES } from '@/shared/constants';
import theme from '@/shared/theme';
import { ThemeProvider } from '@mui/styles';

export default function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();
  const {user, loading} = useSession();

  useEffect(() => {
    if(!loading && !user){
      router.push(ROUTES.SIGN_IN)
    }
  }, [user, router, loading])

  const state = {
    setMessage : (args: any) => {
      console.log("args" , args)
    },
    navigateToSignIn : () => {
      router.push('/sign-in')
    }
  }


  if(router.asPath === ROUTES.SIGN_IN ){
    return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }else{
    return (
      <ThemeProvider theme={theme}>
        <Context.Provider value={state}>
          <Head>
            <title>App home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header/>
          <div className='mt-[5rem]'>
            <Component {...pageProps} />
          </div>
        </Context.Provider>
      </ThemeProvider>
    )
  }
  
}
