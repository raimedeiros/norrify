import { styled } from '@mui/system';

export const JokeCard = styled('div')({
  marginTop: '30px',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.22)',
  background: '#FFFFFF',
  display: 'block',
  borderRadius: '10px',
  margin: '0 auto 50px auto',

  '& .title-card': {
    padding: '25px',
    borderBottom: '1px solid #B39DDB',
    textAlign: 'center',
    color: '#424242',
    h2: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
  },
  '& .footer-card': {
    marginBottom: '30px',
  },
  '& .content-card': {
    padding: '25px 0',
  },

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
