import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { grey } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    direction:"row",
    marginLeft:"75px",
    marginTop:"20px",  
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers() {
  const classes = useStyles();

  return (
    <form 
     className={classes.container} noValidate>
      <TextField 
        id="date"
        type="date"
        defaultValue="2021-07-15" 
        className={classes.textField}
        InputLabelProps={{
          shrink: true, 
        }}
      />
    </form>
  );
}
