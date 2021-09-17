import React, { useState, useEffect } from "react";
import '../CSS/todoo.css'
import { db } from '../firebase'; 
import DatePickers from "../date";
import { Grid } from "@material-ui/core";


const Formtest = () => {
    const [name, setName] = useState("");
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
          name: name,
          phone: phone,
          date: date,
          interested: interested,
          gender: gender,
          age: age,
          description: description,
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
      setPhone("");
      setdate("");
      setInterested("");
      setGender("");
      setDescription("");
      setAge("");
    };

  
    return (
      <div id ='form'>
      <form className="form" onSubmit={handleSubmit}>
        {/* <h1>Have a Question? Chat with professional</h1> */}
        {/* <h3 style={{fontSize:'40px', textAlign:"left", color:"black", marginTop:'2px', marginLeft:'10px'}}>Don't put up with pain!<br></br><span style={{color:"#5ca9fb", fontSize:'35px'}}> MAKE AN APPOINTMENT.</span> </h3> */}

        
        {/* <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        >
        <Grid item xs={6}>
          
        <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px', paddingLeft:'5px', border:'none'}}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </Grid>

        <Grid item xs={6}>   
         <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px' , color:'grey',paddingLeft:'5px', border:'none'}}
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          
        />
        </Grid>

        <Grid item xs={6}>
        <select style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px' , color:'grey',paddingLeft:'5px', border:'none'}}
        onChange={(e)=> setGender(e.target.value)} defaultValue="Gender">
            <option defaultValue>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>        
        </select><br />
        </Grid>

        <Grid item xs={6}>
        <select style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px', color:'grey',paddingLeft:'5px',border:'none'}}
         onChange={(e)=> setInterested(e.target.value)} defaultValue="Intersted in">
            <option defaultValue>How can we help ?</option>
            <option value="Ankle Pain">Ankle Pain</option>
            <option value="Foot Pain">Foot Pain</option>
            <option value="Elbow Pain">Elbow Pain</option>
            <option value="Hand Pain">Hand Pain</option>
            <option value="Hip Pain">Hip Pain</option>
            <option value="Knee Pain">Knee Pain</option>
                
         </select><br />

         
        </Grid>

        <Grid item xs={6}>
        <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px',paddingLeft:'5px',border:'none'}}
          placeholder="Your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        </Grid>

        < br/>

         <Grid item xs={6}>
             <DatePickers/>
         </Grid>

         <Grid item xs={6}>
         <textarea style={{ width:'230px' , alignContent:'center', marginTop:'20px',textAlign:'center', border:'none',borderRadius:'5px' }}
          placeholder="Problem Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
         </Grid>
         

        </Grid>

         */}

        <Grid 
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2} xs={4} sm={6} md={12} lg={12}>
            <Grid item xs={6} sm={8} md={12} lg={12}>
                <h1>Have a Question? Chat with professional</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <h3 style={{fontSize:'40px', textAlign:"left", color:"black", marginTop:'2px', marginLeft:'10px'}}>Don't put up with pain!<br></br><span style={{color:"#5ca9fb", fontSize:'35px'}}>MAKE AN APPOINTMENT.</span></h3>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px', paddingLeft:'5px', border:'none'}}
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px', paddingLeft:'5px', border:'none'}}
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
            </Grid>
        </Grid>
        <button
          type="submit"
          style={{ background: '#5ca9fb', alignItems:'center', marginLeft:'270px' }}
        >
          Submit
        </button>

      </form>
      </div>
    );
  };
  
  export default Formtest;