import { Button } from '@mui/material'

function CustomButton({ 
    children, 
    onClick, 
    sx = {},
    ...rest 
    }) {
        return (
        <Button
        onClick={onClick}
        sx={{
            backgroundColor: '#052b05',
            color: '#cc9800',
            padding: '0.85em 2.2em',
            fontSize: '0.7em',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.3s',
            borderRadius: '0',
            '&:hover': {
            backgroundColor: 'transparent',
            color: '#052b05',
            border: '1px solid #052b05',
            },
            ...sx,
        }}
        {...rest}
        >
            {children}
        </Button>
    )
}

export default CustomButton
