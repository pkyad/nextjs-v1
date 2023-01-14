import { Alert, Button, Hidden, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import validator from '@/shared/validators/auth-form';
import Image from 'next/image'
import { ROUTES, STATUS_CODES, URLS } from '@/shared/constants';
import { useRouter } from 'next/router';
import { ErrorObject } from 'ajv';
import FieldError from '@/components/atoms/fieldError';
import useSession from '@/shared/hooks/useSession';
import { post } from '@/shared/HTTP';

export const Home = () => {

  const router = useRouter();
  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [errors, setErrors] = useState<ErrorObject<string, Record<string, any>, unknown>[] | null | undefined>()
  const [serversideError, setServerSideError] = useState<string | null>()

  const { setSession, user, loading } = useSession();

  useEffect(() => {
    if (!loading && user) {
      router.push(ROUTES.HOME)
    }
  }, [user, router, loading])

  const onUsernameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value);
  }
  const onPasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  }

  const resetErrors = () => {
    setErrors(null);
    setServerSideError(null)
  }

  const handleSubmit = async () => {

    const payload = { username, password }
    resetErrors()
    if (!validator(payload)) {
      setErrors(validator.errors)
      return
    }

    const res = await post(URLS.SIGN_IN, payload)

    const data = await res.json()
    if (res.status === STATUS_CODES.SUCCESS) {
      // set token in the cookie
      setSession(data.token)
      // router.push('/')
    } else if (res.status === STATUS_CODES.BAD_REQUEST) {
      setServerSideError(data.message)
    }

  }

  return (
    <div className='p-10 flex justify-center'>

      <div className='w-1/4 mt-10 flex-col flex'>

        <div className='w-[4rem] h-[4rem] relative'>
          <Image src="/logo.png" alt="App Logo" width={100} height={100} />
        </div>
        <h1 className='mt-3'>Sign in with username and password</h1>

        <TextField onChange={onUsernameChange} required className='!mt-10' label="Username" />

        <FieldError errors={errors} fieldKey="/username" />

        <TextField onChange={onPasswordChange} required className='!mt-5' label="Password" type="password" />

        <FieldError errors={errors} fieldKey="/password" />

        <div className='mt-10'>
          {serversideError && <Alert severity="error" color="error">
            {serversideError}
          </Alert>}
        </div>

        <Button onClick={handleSubmit} className='mt-10' variant="outlined" > Submit </Button>
      </div>

    </div>
  );
};

export default Home;