import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
  body: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 70,
    paddingRight: 70,
  },
}));

const marks = [
  {
    value: 1,
    label: 'Strongly disagree',
  },
  {
    value: 2,
    label: '',
  },
  {
    value: 3,
    label: '',
  },
  {
    value: 4,
    label: '',
  },
  {
    value: 5,
    label: '',
  },
  {
    value: 6,
    label: '',
  },
  {
    value: 7,
    label: 'Strongly agree',
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function MuiSlider(props) {
  const classes = useStyles();

  return (
    <div>
      <br/>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Box width="50%">
          <Typography id="discrete-slider-restrict" gutterBottom className={classes.body}>
            {props.question}
          </Typography>
          <Slider
            defaultValue={4}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-restrict"
            step={1}
            min={1}
            max={7}
            valueLabelDisplay="auto"
            marks={marks}
            onChange={props.onChange}
          />
        </Box>
      </Grid>
    </div>
  );
}