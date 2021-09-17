import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Form from './components/form';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginLeft:'60px',
    marginTop:'60px',
    marginBottom:'60px',
    background:'#6372ff'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={8}>
      <Paper className={classes.paper}><Form/>
      </Paper>
      </Grid>
       <Grid item xs={4}> 
      </Grid>
    </div>
  );
}
