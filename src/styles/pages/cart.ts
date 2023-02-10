import { styled } from '..';

export const HeaderCart = styled('header', {
  marginTop: '1rem',
  marginRight: '1rem',
  
  svg: {
    cursor: 'pointer',
    
    float: 'right',

    width: '1.5rem',
    height: '1.5rem',
    fontSize: '1rem',

    color: '$gray300',
    background: 'transparent',
    border: 0,

  },

  'svg:hover': {
    color: '$gray100',
  },
})

export const ContentCart = styled('main', {
  h3:{
    marginTop: '5rem',
  }
})

export const ContainerCart = styled('div', {
  marginTop: '0 auto',
  height: '100vh',
  width: '30%',

  background: '$gray800',
  overflowY: 'auto',
  boxShadow: '-4px 0px 30px rgba(0,0,0,0.8)',
    
  position: 'fixed',
  float: 'left',
  right: 0,

  main: {
    padding: '0px 40px 40px 40px',

    h3: {
      marginBottom: '1rem',
    },

    img: {
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: '0.5rem',
    },
  },
})

export const FooterCart = styled('footer', {
  marginTop: '10rem',
})

export const ItemCart = styled('div', {
  display: 'flex',
  marginBottom: '1rem',

  div: {
    marginLeft: '1.25rem',
  },

  p: {
    marginBottom: '0.625rem',
  },

  h4: {
    marginBottom: '1.875rem',
  },

  button: {
    color: '$green500',
    textDecoration: 'none',

    background: 'transparent',
    border: 0,
    cursor: 'pointer',

    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 700,
  },

  'button:hover': {
    color: '$green300',
  },
})

export const DescriptionCardLine = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  h3: {
    marginTop: '0.5rem',
  },
})

export const ButtonConfirm = styled('button', {
  
  cursor: 'pointer',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',

  padding: '1.25rem 2rem',
  border: 0,
  borderRadius: '0.5rem',
  marginTop: '2rem',
  width: '100%',

  color: 'white',
  background: '$green500',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },

  '&:hover': {
    backgroundColor: '$green300',
  },
})
