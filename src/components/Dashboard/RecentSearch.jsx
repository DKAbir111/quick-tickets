import { Box, Typography } from "@mui/material";
import RecentSearchCard from "./RecentSearchCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RecentSearch() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
    <Box sx={{ width: '1183px', overflow: 'hidden', display: { xs: 'none', md: 'block' } }}>
      <Typography sx={{ fontWeight: 500 }}>Your Recent Search</Typography>
      <Box sx={{ py: 5 }}>
        <Slider {...settings} style={{ overflow: 'hidden' }}>
          <Box>
            <RecentSearchCard />
          </Box>
          <Box>
            <RecentSearchCard />
          </Box>
          <Box>
            <RecentSearchCard />
          </Box>
          <Box>
            <RecentSearchCard />
          </Box>
          <Box>
            <RecentSearchCard />
          </Box>
          <Box>
            <RecentSearchCard />
          </Box>
        </Slider>
      </Box>
    </Box>
  );
}
