import { Card, CardContent, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function EventCard({ title, subtitle, image, linkTo }) {
    return (
        <Box
            sx={{
                flex: '0 0 80%',
                maxWidth: 250,
                scrollSnapAlign: 'start',
                textDecoration: 'none',
            }}
        >
            <Link to={linkTo} style={{ textDecoration: 'none' }}>
                <Card
                    sx={{
                        position: 'relative',
                        height: 250,
                        width: 250,
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        boxShadow: 'none',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',

                        '&:hover': {
                            transform: 'translateY(-10px)'
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            zIndex: 2,
                        }}
                    />
                    <CardContent
                        sx={{
                            position: 'relative',
                            zIndex: 2,
                            textAlign: 'center',
                            px: 2,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                borderBottom: '2px solid white',
                                display: 'inline-block',
                                pb: 0.5,
                                mb: 1.5,
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.85rem', color: '#fff' }}>
                            {subtitle}
                        </Typography>
                    </CardContent>
                </Card>
            </Link>
        </Box>
    )
}

export default EventCard
