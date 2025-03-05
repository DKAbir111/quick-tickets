import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Checkbox, FormControlLabel } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const checkboxStyles = {
  '& .MuiCheckbox-root': {
    borderRadius: 0, // Square checkbox
  },
  '& .Mui-checked': {
    color: '#e34825', // Color when checked
  },
  '& .MuiCheckbox-root': {
    color: '#e34825', // Color when unchecked
  },
};

export default function SearchType() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs="auto">
          <Item>
            <FormControlLabel
              sx={checkboxStyles}
              control={<Checkbox />}
              label="Regular Search"
            />
            <FormControlLabel
              sx={checkboxStyles}
              control={<Checkbox />}
              label="Advanced Search"
            />
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <FormControlLabel sx={checkboxStyles} control={<Checkbox />} label="Regular Search" />
            <FormControlLabel sx={checkboxStyles} control={<Checkbox />} label="Advanced Search" />
            <FormControlLabel sx={checkboxStyles} control={<Checkbox />} label="Advanced Search" />
          </Item>
        </Grid>

        <Grid item xs>
          <Item>Select Prefered AirLine</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
