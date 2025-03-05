import { Box } from "@mui/material";

import discountImage from '../../assets/discount.png'
export default function Discount() {
    return (
        <Box >
            <img
                src={discountImage}
                alt="Discount image"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
        </Box>
    )
}
