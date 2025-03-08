import React, { useContext, useState } from "react";
import { FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@mui/material";
import Grid from "@mui/material/Grid2";
import '../../App.css'
import SearchTypeContext from "../../context/searchTypeContext";
const SearchType = () => {
  
 const {setRegularSearch, setFareType,regularSearch,fareType}=useContext(SearchTypeContext)

  //airlines
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
      <Grid item sx={{ gridColumn: "span 3", background: "white", px: 1, height: '34px', display: 'flex', alignItems:'center' }}>
        <RadioGroup 
          row
          value={regularSearch}  
          onChange={(e) => setRegularSearch(e.target.value)}  
        >
          <FormControlLabel
            value="regularSearch"
            control={<Radio sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
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
            value="advancedSearch"
            control={<Radio sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
            label="Advanced Search"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "13px",
                fontWeight: 400,
                color: "#8C8080",
              },
            }}
          />
        </RadioGroup>
      </Grid>

      {/* Second Column */}
      <Grid item sx={{ gridColumn: "span 5", background: "white", px: 1, height: '34px', display: 'flex', alignItems:'center' }}>
        <RadioGroup 
          row
          value={fareType}  
          onChange={(e) => setFareType(e.target.value)}  
        >
          <FormControlLabel
            value="regularFare"
            control={<Radio sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
            label="Regular Fare"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "13px",
                fontWeight: 400,
                color: "#8C8080",
              },
            }}
          />
          <FormControlLabel
            value="studentFare"
            control={<Radio sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
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
            value="umrahFare"
            control={<Radio sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
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
            value="seamanFare"
            control={<Radio sx={{ color: "#D97A4A", "&.Mui-checked": { color: "#E34825" } }} />}
            label="Seaman Fare"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "13px",
                fontWeight: 400,
                color: "#8C8080",
              },
            }}
          />
        </RadioGroup>
      </Grid>

      {/* Third Column */}
      <Grid item sx={{ gridColumn: "span 3", background: "white", px: 1, height: '34px', display: 'flex', alignItems:'center' }}>
      <FormControl sx={{ m: 1, minWidth: '100%' }} size="small">
  <InputLabel  id="demo-select-small-label" sx={{ border: 'none',   fontSize: "13px",fontWeight: 400,color:"#8C8080", mt:'5px' }}>
 Select Preffred Airlines
  </InputLabel>
  <Select
    labelId="demo-select-small-label"
    id="demo-select-small"
    value={age}
    label="Age"
    onChange={handleChange}
    sx={{
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
      '& .MuiSelect-select': {
        padding: '10px 14px',
      },
    }}
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

      </Grid>
    </Grid>
  );
};

export default SearchType;
