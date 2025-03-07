import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";
import Grid from "@mui/material/Grid2";

const SearchType = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: { md: "grid", xs: 'none' },
        gridTemplateColumns: "repeat(11, 1fr)",
        gap: 2,


      }}
    >
      {/* First Column */}
      <Grid item sx={{ gridColumn: "span 3", background: "white", px: 1, height: '34px', display: 'flex' }}>
        <FormControlLabel
          control={<Checkbox sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
          label="Regular Search"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "13px",
              fontWeight: 400,
              color: "#8C8080",
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
          label="Advanced Search"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "13px",
              fontWeight: 400,
              color: "#8C8080",
            },
          }}
        />
      </Grid>

      {/* Second Column */}
      <Grid item sx={{ gridColumn: "span 5", background: "white", px: 1, height: '34px', display: 'flex' }}>
        <FormControlLabel
          control={<Checkbox sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
          label="Student Fare"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "13px",
              fontWeight: 400,
              color: "#8C8080",
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
          label="Umrah Fare"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "13px",
              fontWeight: 400,
              color: "#8C8080",
            },
          }}
        />
        <FormControlLabel
          control={<Checkbox sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
          label="Seaman Fare"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "13px",
              fontWeight: 400,
              color: "#8C8080",
            },
          }}
        />
      </Grid>

      {/* Third Column */}
      <Grid item sx={{ gridColumn: "span 3", background: "white", px: 1, height: '34px', display: 'flex' }}>
        <FormControlLabel
          control={<Checkbox sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
          label="Seaman Fare"
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "13px",
              fontWeight: 400,
              color: "#8C8080",
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default SearchType;
