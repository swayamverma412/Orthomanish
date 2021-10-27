import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import pic40 from '../Images/40.jpg';
import pic80 from '../Images/80.jpg';
import pic90 from '../Images/90.jpg';
import pic140 from '../Images/140.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Features1() {
  const classes = useStyles();

  return (
    <div id='features' className='text-center'>
      <Grid container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3} xs={12} sm={12} md={12} lg={12}>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h2 style={{ fontSize: '40px', textAlign: 'center', marginBottom: '25px' }}>Features</h2>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3}>
          <img src={pic140} alt="pic140" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }} />
          <h3 style={{ color: 'black', textAlign: 'center', fontSize: '30px' }}>ORIF Surgery</h3>
          <p style={{ textAlign: 'center' }}>Performed over 140 Open reduction internal fixation (ORIF)
            Plating and  Nailing of upper and lower limb.</p>

        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <img src={pic90} alt="pic90" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }} />
          <h3 style={{ color: 'black', textAlign: 'center', fontSize: '30px' }}>Arthroplasty</h3><br/><br/>
          <p style={{ textAlign: 'center', marginTop: "-40px" }}>Assisted over 90 Arthroplasty of Hip, Knee & Shoulders.</p>

        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <img src={pic80} alt="pic80" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }} />
          <h3 style={{ color: 'black', textAlign: 'center', fontSize: '30px' }}>Surgeries</h3>
          <p style={{ textAlign: 'center' }}>Assisted over 80 sports injuries, Ligament reconstruction, Complex Trauma Pelvis, Acetabulum and 30 Spine Surgeries.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <img src={pic40} alt="pic40" style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }} />
          <h3 style={{ color: 'black', textAlign: 'center', fontSize: '30px' }}>Arthroscopy</h3><br/>
          <p style={{ textAlign: 'center', marginTop: "-20px"}}>Performed over 40 Diagosnitic Arthroscopy and 8 Arthroscopic ACL repairs.</p>
        </Grid>
      </Grid>
    </div>
  );
}