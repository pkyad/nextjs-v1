import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Header from '@/components/molecules/header';
import Head from 'next/head';
import Context from '@/shared/appContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ROUTES, URLS } from '@/shared/constants';
import theme from '@/shared/theme';
import { ThemeProvider } from '@mui/styles';
import { IAgent } from '@/shared/types';
import { get } from '@/shared/HTTP';
import { useCookies } from 'react-cookie';

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [cookies, setCookies, removeCookie] = useCookies(['token'])
  const router = useRouter();
  const [user, setUser] = useState<IAgent | undefined>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (cookies.token) {
      // fetch the user details from the server
      fetchUser()
    } else {
      router.push(ROUTES.SIGN_IN)
    }
  }, [cookies])

  const fetchUser = async () => {
    const response = await get(URLS.GET_CURRENT_SESSION)
    const data = await response.json()
    setUser(data)
    setLoading(false)
  }

  const state = {
    setMessage: (args: any) => {
      console.log("args", args)
    },
    navigateToSignIn: () => {
      removeCookie('token')
      setUser(undefined)
      router.push(ROUTES.SIGN_IN)
    },
    user,
    loading,
    setSession: (token: string) => setCookies('token', token)
  }


  if (router.asPath === ROUTES.SIGN_IN) {
    return (
      <>
        <Head>
          <title>Login Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Context.Provider value={state}>
          <Component {...pageProps} />
        </Context.Provider>
      </>
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Context.Provider value={state}>
          <Head>
            <title>App home</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <div className='mt-[5rem]'>
            <Component {...pageProps} />
          </div>
        </Context.Provider>
      </ThemeProvider>
    )
  }

}

export default MyApp;
