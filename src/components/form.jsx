import React, { useState } from "react";
import "../CSS/todoo.css";
import { db } from "../firebase";
import DatePickers from "../date";
import TextField from '@material-ui/core/TextField';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const Form = () => {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setdate] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");
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
    setGender("");
    setDescription("");
    setAge("");
  };

  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: "relative",
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto",
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
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400,
    },
  }));

  const classes = useStyles();
  return (
    <div className="form" id="form">
      <form onSubmit={handleSubmit}>
        <React.Fragment>
          <main className={classes.layout}>
            <Paper
              style={{
                borderStyle: "solid",
                borderColor: "#6372ff",
                borderWidth: "13px",
              }}
              className={classes.paper}
            >
              <React.Fragment>
                <h1 style={{ fontSize: "15px" }}>
                  Have a Question? Chat with professional
                </h1>
                <h3
                  style={{
                    fontSize: "40px",
                    textAlign: "left",
                    color: "black",
                    marginTop: "2px",
                  }}
                >
                  Don't put up with pain!<br></br>
                  <span style={{ color: "#5ca9fb", fontSize: "35px" }}>
                    {" "}
                    MAKE AN APPOINTMENT.
                  </span>{" "}
                </h3>
                <Grid container spacing={3}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                >
                  <Grid item xs={12} sm={6}>
                    <input
                      style={{
                        marginTop: "20px",
                        width: "250px",
                        height: "40px",
                        borderRadius: "5px",
                        paddingLeft: "5px",
                        border: "inset",
                        borderColor: "#6372ff",
                      }}
                      required
                      placeholder="First name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <input
                      style={{
                        marginTop: "20px",
                        width: "250px",
                        height: "40px",
                        borderRadius: "5px",
                        paddingLeft: "5px",
                        border: "inset",
                        borderColor: "#6372ff",
                      }}
                      required
                      placeholder="Last name"
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <select
                      style={{
                        marginTop: "20px",
                        width: "250px",
                        height: "40px",
                        borderRadius: "5px",
                        color: "grey",
                        paddingLeft: "5px",
                        border: "inset",
                        borderColor: "#6372ff",
                      }}
                      required
                      onChange={(e) => setGender(e.target.value)}
                      defaultValue="Gender"
                    >
                      <option defaultValue>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <br />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <input
                      style={{
                        marginTop: "20px",
                        width: "250px",
                        height: "40px",
                        borderRadius: "5px",
                        color: "grey",
                        paddingLeft: "5px",
                        border: "inset",
                        borderColor: "#6372ff",
                      }}
                      required
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <input
                      style={{
                        marginTop: "20px",
                        width: "250px",
                        height: "40px",
                        borderRadius: "5px",
                        paddingLeft: "5px",
                        border: "inset",
                        borderColor: "#6372ff",
                      }}
                      required
                      placeholder="Your Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                        style={{
                              marginTop: "20px",
                              width: "250px",
                              height: "40px",
                              borderRadius: "5px",
                              paddingLeft: "5px",
                              border: "inset",
                              borderColor: "#6372ff",
                              marginLeft: "0px"
                              }}
                            required
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                            id="date"
                            type="date"
                            defaultValue="dd-mm-yyyy"
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}/>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <textarea
                      style={{
                        alignContent: "center",
                        width: "100%",
                        marginTop: "20px",
                        marginLeft: "0px",
                        textAlign: "justified",
                        borderRadius: "5px",
                        border: "inset",
                        borderColor: "#6372ff",
                      }}
                      required
                      placeholder="Problem Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </Grid>
                  <Grid item xs={12} sm={12} container spacing={3}
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                    <div>
                    </div>
                    <div style=
                    {{
                        alignContent: "center",
                    }}>
                    <button
                      type="submit"
                      className='btn btn-custom btn-lg'
                      style={{
                        marginTop: "20px",
                        borderRadius: "5px"
                      }}
                    >
                      {" "}
                      Submit
                    </button>
                    </div>
                    <div>
                    </div>
                  </Grid>
                </Grid>
              </React.Fragment>
            </Paper>
          </main>
        </React.Fragment>
      </form>
    </div>
  );
};

export default Form;
