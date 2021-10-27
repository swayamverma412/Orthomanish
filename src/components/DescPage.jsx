import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import handxray from '../Images/8.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Welcomingsection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} style={{minWidth: "50%", maxWidth: "100%"}}>
          <h1 style={{ color: '#5ca9fb', marginLeft: '15px', fontSize: '20px', marginTop: '5x', textAlign: 'center' }}>Welcome to Our Orthopedics Clinic</h1><br></br>
          <h3 style={{ fontSize: '30px', marginLeft: '20px', color: 'black', marginTop: '2px', textAlign: 'center' }}>We offer specialized orthopedics to meet your needs</h3><br></br>
          <p style={{ fontSize: '15px', marginLeft: '15px', textAlign: 'center' }}>From routine doctor visits to the most advanced procedures. Our Doctor specialize  Trauma, Deformity correction, Limb lengthening, Arthroscopy and Sports Medicine.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{minWidth: "50%", maxWidth: "100%"}}>
          <div style={{margin:"0px"}}></div>
          {' '}
          <img src={handxray} className='img-responsive' alt='Missing Image' />{' '}
          <div style={{margin:"0px"}}></div>
        </Grid >
      </Grid>
    </div>
  );
}

// style={{margin:"0px"}}