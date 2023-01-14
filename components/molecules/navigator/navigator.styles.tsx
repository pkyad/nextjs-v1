import { makeStyles, createStyles } from '@mui/styles'

const useStyles = makeStyles(() => {
  return createStyles({
    wrapper: {
      '& li': {
        marginLeft: '1.5rem',
        borderBottom: 'solid 2px black',
        paddingBottom: '0.5rem'
      },
      '& li:hover': {
        borderBottom: 'solid 2px white'
      },
      '& .active': {
        borderBottom: 'solid 2px white'
      }
    }
  })
})

export default useStyles
