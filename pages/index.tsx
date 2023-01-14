import { ROUTES } from '@/shared/constants';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { FileDrop } from 'react-file-drop';

export const Home = () => {

  const router = useRouter();
  useEffect(() => {
    router.push(ROUTES.HOME)
  }, [])

  return (
    null
  );
};

export default Home;