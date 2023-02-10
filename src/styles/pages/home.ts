import { styled } from '..';

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  minHeight: 450,

})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  maxWidth: 400,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$md',
      color: '$gray100',
    },

    span: {
      fontSize: '$lg',
      fontWeight: 'bold',
      color: '$green300'
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1
    }
  },

  '.description':{
    height: 56,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})

export const PutInCart = styled('button', {
  width: 50,
  height: 50,
  padding: 12,
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  background: '$green500',
  transition: 'background 0.5s',

  '&:hover': {
    background: '$green300',
  },

  '&:disabled':{
    cursor: 'not-allowed',
  }


})