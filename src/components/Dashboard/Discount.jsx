import { Box } from "@mui/material";

import discountImage from '../../assets/discount.png'
export default function Discount() {
    return (
        <Box >
            <img
                src={discountImage}
                alt="Discount image"
                style={{ width: '1181px', height: 'auto', objectFit: 'cover' }}
            />
        </Box>
    )
}
