import { Box, Button, Stack, Typography } from "@mui/material";
import { FaEdit } from "react-icons/fa";
export default function SearchHeaderMobile() {
    return (
        <Box bgcolor={'#E34825'} sx={{
            display: { md: 'none', xs: 'flex' },
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            height: '62px'
        }}>
            <Stack>
                <Typography fontWeight={500} fontSize={16} color="white">
                    DAC - DXB
                </Typography>
                <Typography fontSize={12} fontWeight={500} color="white">
                    26 Sep, 2023  | 1 Traveler | Economy
                </Typography>
            </Stack>
            <Button variant="contained" size="small" sx={{
                bgcolor: '#FFFFFF',
                color: '#E34825',
                textTransform: 'none',
                boxShadow: 'none'
            }}>
                <FaEdit />Edit
            </Button>
        </Box>
    )
}
