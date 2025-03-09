import React, { useState, useContext } from "react";
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, SvgIcon } from "@mui/material";
import Grid from "@mui/material/Grid2";
import '../../App.css'
import SearchTypeContext from "../../context/searchTypeContext";

const SearchType = () => {

  const { setRegularSearch, setFareType, regularSearch, fareType } = useContext(SearchTypeContext)

  //airlines
  const AirlinesSelect = () => {
    const [selectedAirline, setSelectedAirline] = useState('');

    const handleChange = (event) => {
      setSelectedAirline(event.target.value);
    };


    //icon
    const SquareIcon = () => (
      <SvgIcon viewBox="0 0 24 24" width="14" height="14" sx={{ color: '#D66338' }}>
        <rect x="4" y="4" width="16" height="16" stroke="#F1592A" fill="transparent" strokeWidth="2" />

      </SvgIcon>
    );


    const SquareCheckedIcon = () => (
      <SvgIcon viewBox="0 0 24 24" width="14" height="14" sx={{ color: '#D66338' }}>
        <rect x="4" y="4" width="16" height="16" stroke="#F1592A" fill="transparent" strokeWidth="2" />
        <rect x="7" y="7" width="10" height="10" fill="#F1592A" />
      </SvgIcon>
    );


    // form control level desing
    const textDecoration = {
      "& .MuiFormControlLabel-label": {
        fontSize: "13px",
        fontWeight: 400,
        color: "#8C8080",
      },
    }
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
        <Grid item sx={{ gridColumn: "span 3", background: "white", px: 1, height: '34px', display: 'flex', alignItems: 'center' }}>
          <RadioGroup
            row
            value={regularSearch}
            onChange={(e) => setRegularSearch(e.target.value)}
          >
            <FormControlLabel
              value="regularSearch"
              control={<Radio icon={<SquareIcon />} checkedIcon={<SquareCheckedIcon />} />}
              label="Regular Search"
              sx={{
                ...textDecoration
              }}
            />
            <FormControlLabel
              value="advancedSearch"
              control={<Radio icon={<SquareIcon />} checkedIcon={<SquareCheckedIcon />} />}
              label="Advanced Search"
              sx={{
                ...textDecoration
              }}
            />
          </RadioGroup>
        </Grid>

        {/* Second Column */}
        <Grid item sx={{ gridColumn: "span 5", background: "white", px: 1, height: '34px', display: 'flex', alignItems: 'center' }}>
          <RadioGroup
            row
            value={fareType}
            onChange={(e) => setFareType(e.target.value)}
          >
            <FormControlLabel
              value="regularFare"
              control={<Radio icon={<SquareIcon />} checkedIcon={<SquareCheckedIcon />} />}
              label="Regular Fare"
              sx={{
                ...textDecoration
              }}
            />
            <FormControlLabel
              value="studentFare"
              control={<Radio icon={<SquareIcon />} checkedIcon={<SquareCheckedIcon />} />}
              label="Student Fare"
              sx={{
                ...textDecoration
              }}
            />
            <FormControlLabel
              value="umrahFare"
              control={<Radio icon={<SquareIcon />} checkedIcon={<SquareCheckedIcon />} />}
              label="Umrah Fare"
              sx={{
                ...textDecoration
              }}
            />
            <FormControlLabel
              value="seamanFare"
              control={<Radio icon={<SquareIcon />} checkedIcon={<SquareCheckedIcon />} />}
              label="Seaman Fare"
              sx={{
                ...textDecoration
              }}
            />
          </RadioGroup>
        </Grid>

        {/* Third Column */}
        <Grid item sx={{ gridColumn: 'span 3', background: 'white', px: 1, height: '34px', display: 'flex', alignItems: 'center' }}>
          <FormControl sx={{ minWidth: '100%' }} size="small">
            {/* Input Label */}
            <InputLabel
              id="demo-select-small-label"
              shrink={false}
              sx={{
                border: 'none',
                fontSize: '13px',
                fontWeight: 400,
                color: '#8C8080',
              }}
            >
              {!selectedAirline ? "Select Preferred Airlines" : ''}
            </InputLabel>

            {/* Select Dropdown */}
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={selectedAirline}
              label="Preferred Airlines"
              onChange={handleChange}
              sx={{
                fontSize: '13px',
                fontWeight: 400,
                color: '#8C8080',
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-select': {
                  padding: '10px 14px',
                },
              }}
            >

              <MenuItem sx={{ fontSize: '13px', fontWeight: 400, color: '#8C8080' }} value="American Airlines">
                American Airlines
              </MenuItem>
              <MenuItem sx={{ fontSize: '13px', fontWeight: 400, color: '#8C8080' }} value="Delta Air Lines">
                Delta Air Lines
              </MenuItem>

            </Select>
          </FormControl>
        </Grid>
      </Grid>
    );
  };

  return <AirlinesSelect />;
};

export default SearchType;
