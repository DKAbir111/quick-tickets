import { Box, Paper, Typography } from "@mui/material";
import logo from '../../assets/plane.png'
export default function ExtraInfoCard() {
    return (
        <Paper component='div' sx={{
            width: '125px',
            display: 'flex',
            height: '56px',
            boxShadow: 'none',
            gap: 2,
            alignItems: 'center',
            borderRadius: 0,
            cursor: 'pointer'
        }}>
            <img src={logo} alt="" style={{ height: '27px', width: '27px', borderRadius: '50%' }} />

            <Box>
                <Typography fontSize={13} component='span'>BG</Typography>
                <Typography component='span' color="#A2A1A1"> .</Typography>
                <Typography component='span' color="#A2A1A1" fontSize={10}> 5</Typography>
                <Typography fontWeight={500} fontSize={14} color="#A2A1A1">৳ 213,865</Typography>

            </Box>
        </Paper>
    )
}
