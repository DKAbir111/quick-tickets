import { Box, Paper } from '@mui/material';
import React, { useRef } from 'react';
import ExtraInfoCard from './ExtraInfoCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function ExtraInfo() {
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Box component="section" sx={{
            height: '56px',
            width: '100%',
            bgcolor: 'white',
            mt: 2,
            mb: 3,
            display: { md: 'block', xs: 'none' },
            position: 'relative'
        }}>
            {/* Left Arrow */}
            <Paper sx={{
                position: 'absolute',
                top: '0',
                zIndex: '40',
                height: '100%',
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FDF6F4',
                color: '#F1592A',
                cursor: 'pointer'
            }}
                onClick={() => sliderRef.current?.slickPrev()}
            >
                <ChevronLeftIcon />
            </Paper>

            {/* Right Arrow */}
            <Paper sx={{
                position: 'absolute',
                top: '0',
                right: '0',
                zIndex: '40',
                height: '100%',
                boxShadow: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FDF6F4',
                color: '#F1592A',
                cursor: 'pointer'
            }}
                onClick={() => sliderRef.current?.slickNext()}
            >
                <ChevronRightIcon />
            </Paper>

            <Slider ref={sliderRef} {...settings} style={{ overflow: 'hidden' }}>
                {Array(9).fill(null).map((_, index) => (
                    <Box key={index}>
                        <ExtraInfoCard />
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}
