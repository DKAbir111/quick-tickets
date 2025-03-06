import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import discountImage from "../../assets/discount.png";
import Slider from "react-slick";

export default function Discount() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Box
      className="slider-container"
      sx={{
        width: "100%",
        overflow: "hidden",
        display: { xs: "none", md: "block" }
      }}
    >
      <Slider {...settings}>
        {[...Array(6)].map((_, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Box
              component="img"
              src={discountImage}
              alt="Discount image"
              sx={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
