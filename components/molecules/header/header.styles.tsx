import { makeStyles, createStyles } from '@mui/styles';

import { Theme } from '@emotion/react';

interface StyleProps {
  size: string;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => {
  // console.log({theme})
  return createStyles({
    wrapper: {
      display: 'flex',
      backgroundColor: '#3949AB',
      alignItems: 'center',
      position: 'fixed',
      width: ({ size }) => size ? size : '100%',
      top: '0',
      zIndex: 4
    },
    logoWrapper: {
      height: '3rem',
      width: '3rem',
      position: 'relative',
      margin: '1rem'
    },
    brandName: {
      color: 'white',
      fontSize: '1.4rem'
    },
    navigator: {
      marginLeft: '15rem'
    }
  })
})

export default useStyles;



