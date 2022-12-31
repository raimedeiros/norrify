import { styled } from '@mui/material';

export const CategoryItem = styled('div')({
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  margin: '10px auto',
  background: '#545DE6',
  borderRadius: '100%',
  width: '100px',
  height: '100px',
  display: 'block',
  fontSize: '1.2rem',
  fontWeight: 500,
  lineHeight: ' 100px',
  textTransform: 'capitalize',
  '& a': { color: '#ffffff' },
});
