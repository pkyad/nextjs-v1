import '@/styles/global.css'
import type { AppProps } from 'next/app'
import Header from '@/components/molecules/header'
import Head from 'next/head'
import Context from '@/shared/appContext'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { ROUTES, STATUS_CODES, URLS } from '@/shared/constants'
import theme from '@/shared/theme'
import { ThemeProvider } from '@mui/styles'
import { IAgent } from '@/shared/types'
import { get } from '@/shared/HTTP'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter()
  const [user, setUser] = useState<IAgent | undefined>()
  const [loading, setLoading] = useState<boolean>(true)

  const fetchUser = async (): Promise<void> => {
    const response = (await get(URLS.GET_CURRENT_SESSION)) as any
    if (response.status === STATUS_CODES.SUCCESS) {
      const data = await response.json()
      setUser(data)
      setLoading(false)
    } else {
      setUser(undefined)
      setLoading(true)
      void router.push(ROUTES.SIGN_IN)
    }
  }

  useEffect(() => {
    void fetchUser()
  }, [])

  const state = {
    setMessage: (args: any) => {
      // console.log('args', args)
    },
    navigateToSignIn: async () => {
      void get('/api/auth/logout').then(() => {
        void router.push(ROUTES.SIGN_IN)
        setUser(undefined)
      })
    },
    user,
    loading,
    fetchUser
  }
  if (router.asPath === '/docs') {
    return (
      <>
        <Head>
          <title>API Docs</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Context.Provider value={state}>
          <Component {...pageProps} />
        </Context.Provider>
      </>
    )
  } else if (router.asPath === ROUTES.SIGN_IN) {
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
        {loading && (
          <>
            <Head key={'loading-head'}>
              <title>Loading...</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <span>Loading...</span>
          </>
        )}
        {!loading && (
          <Context.Provider value={state}>
            <Head>
              <title>App home</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="mt-[5rem]">
              <Component {...pageProps} />
            </div>
          </Context.Provider>
        )}
      </ThemeProvider>
    )
  }
}

export default MyApp
