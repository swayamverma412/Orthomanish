import React, { useState, useEffect } from "react";
import '../CSS/todoo.css'
import { db } from '../firebase'; 
import DatePickers from "../date";
import { Grid } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';






const Form = () => {
    const [name, setName] = useState("");
    const [lastname,setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setdate] = useState("");
    const [interested,setInterested] = useState("");
    const [gender,setGender] = useState("");
    const [age,setAge] = useState("");
    const [description,setDescription] = useState("");
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("Appointment")
        .add({
          Firstname: name,
          Lastname: lastname,
          Phone: phone,
          Date: date,
          Interested: interested,
          Gender: gender,
          Age: age,
          Description: description,
        })
        .then(() => {
          setLoader(false);
          alert("Your Appointment has been made");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setLastName("");
      setPhone("");
      setdate("");
      setInterested("");
      setGender("");
      setDescription("");
      setAge("");
    };

    const useStyles = makeStyles((theme) => ({
      appBar: {
        position: 'relative',
      },
      layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
      },
      stepper: {
        padding: theme.spacing(3, 0, 5),
      },
    }));
    

    const classes = useStyles();
    return (
      <div className="form" >
      <form  onSubmit={handleSubmit}>
      <React.Fragment>
        <main className={classes.layout}>
          <Paper  style={{borderStyle:"solid",borderColor:"#6372ff", borderWidth:"13px"}} className={classes.paper}>
      <React.Fragment>
        <h1 style={{fontSize:"15px"}}>Have a Question? Chat with professional</h1>
        <h3 style={{fontSize:'40px', textAlign:"left", color:"black", marginTop:'2px'}}>Don't put up with pain!<br></br><span style={{color:"#5ca9fb", fontSize:'35px'}}> MAKE AN APPOINTMENT.</span> </h3>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <input  style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px', paddingLeft:'5px', border:'none'}}
            placeholder="First name"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <input  style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px', paddingLeft:'5px', border:'none'}}
            placeholder="Last name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}/>
          </Grid>
          <Grid item xs={12}  sm={6}>
          <select style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px' , color:'grey',paddingLeft:'5px', border:'none'}}
              onChange={(e)=> setGender(e.target.value)} defaultValue="Gender">
              <option defaultValue>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>        
          </select><br />
          </Grid>
          <Grid item xs={12}  sm={6}>
          <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px' , color:'grey',paddingLeft:'5px', border:'none'}}
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px',paddingLeft:'5px',border:'none'}}
            placeholder="Your Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
          </Grid>
          <Grid item xs={12} sm={6}>
          <DatePickers/>
          </Grid>
          <Grid item xs={12} sm={12}>
          <textarea style={{  alignContent:'center',width:'250px', marginTop:'20px',textAlign:'center',borderRadius:'5px' }}
            placeholder="Problem Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          </Grid>
          <Grid>
          <button type="submit" style={{margin:"0", alignItems:"center"}}> Submit
          </button>
          </Grid>
        </Grid>
      </React.Fragment>
      </Paper>
    </main>
  </React.Fragment>
  </form>
  </div>
    );
  }
  
  export default Form;