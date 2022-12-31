import { styled } from '@mui/system';

export const JokeCard = styled('div')({
  marginTop: '30px',
  '& img': { marginTop: '-30px' },

  '& .joke-content ': {
    fontSize: '2rem',
    lineHeight: '40px',
    margin: '20px 0',
  },

  '& .carregar-outra': {
    background: '#7967FE',
    borderRadius: '28px',
    padding: '10px',
    color: '#FFFFFF',
    width: '50%',
    margin: '0 auto',
    cursor: 'pointer',
  },
});

export const DashboardLogo = styled('img')({ width: '250px' });

export const DashboardTitle = styled('h1')({ margin: '20px' });
