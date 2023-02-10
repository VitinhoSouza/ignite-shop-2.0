import { styled } from '../../styles';

export const CartButtonContainer = styled('button', {
    height: 48,
    width: 48,
    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '$gray800',
    border: 'none',
    cursor: 'pointer',

    'svg':{
        position: 'absolute',
    },

    ':focus':{
        boxShadow: 'none'
    }
});

export const CountItemsContainer = styled('div', {
    height: 24,
    width: 24,
    padding: 10,
    borderRadius: 100,

    background: '$green500',
    color: '$white',

    fontSize: 12,
    fontWeight: 700,

    position: 'relative',
    marginLeft: 42,
    marginBottom: 38,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});