import { styled } from '@mui/system';

export const LoadingSatus = styled('div')({
  paddingTop: '200px',
  color: '#FFFFFF',
  '& .lds-dual-ring': {
    display: 'inline-block',
    width: ' 64px',
    height: '64px',
    '&:after': {
      content: "' '",
      display: 'block',
      width: '46px',
      height: '46px',
      margin: '10px',
      borderRadius: '50%',
      border: '5px solid #fff',
      borderColor: '#fff transparent #fff transparent',
      animation: 'lds-dual-ring 1.2s linear infinite',
    },
  },
  '@keyframes lds-dual-ring': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});
