import EventCard from './EventCard'
import img1 from '../../assets/shee4.jpeg'
import img2 from '../../assets/shee6.jpeg'
import img3 from '../../assets/shee5.jpeg'
import img4 from '../../assets/shee9.jpeg'
import { Box } from '@mui/material'

function ServicesSection() {
    return (
    <Box
    sx={{
        padding: '5rem 1rem',
        overflowX: { xs: 'auto', md: 'visible' }
    }}
    >
        <Box
        sx={{
            display: 'flex',
            gap: 3,
            flexWrap: { xs: 'nowrap', md: 'wrap' },
            justifyContent: { xs: 'flex-start', md: 'center' },
            scrollSnapType: { xs: 'x mandatory', md: 'none' },
            WebkitOverflowScrolling: 'touch',
        }}
        >
            <EventCard
                title="Events"
                subtitle="LET’S COMMEMORATE YOUR BIG MOMENT"
                image={img1}
                linkTo="/services#events"
            />
            <EventCard
                title="Weddings"
                subtitle="LET’S CELEBRATE YOUR LOVE"
                image={img2}
                linkTo="/services#weddings"
            />
            <EventCard
                title="Corporate"
                subtitle="LET’S EMPOWER YOUR BUSINESS"
                image={img3}
                linkTo="/services#corporate"
            />
            <EventCard
                title="Parties"
                subtitle="BRINGING VIBES TO YOUR CELEBRATION"
                image={img4}
                linkTo="/services#parties"
            />
        </Box>
    </Box>
    )
}

export default ServicesSection