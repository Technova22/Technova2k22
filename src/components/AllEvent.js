import React, { useState,useEffect } from "react";
import {Link} from 'react-router-dom'
import { Input,InputGroup } from "rsuite";
import SearchIcon from '@rsuite/icons/Search';
import "../AllEvent.css";
// import {featured,sunshine,lisoc,pratibimb} from '../Data'
import {centralised,featured,sunshine,lisoc,pratibimb,physicsDept,eceDept,civilDept,electricalDept,chemicalDept,gdscDcrust,
        cseDept,msDept,mathsDept,btDept,savera,chemistryDept,thinkbots,mechanicalDept,bmeDept,sanjhi,e_cell,archDept} from '../DataSub'
import { useMediaQuery } from "react-responsive";

const Allevents = () => {
  // console.log(sunshine)
  var [filtersunshine, setFiltersunshine] = useState(sunshine);
  var [filterlisoc, setFilterlisoc] = useState(lisoc);
  var [filterpratibimb, setFilterpratibimb] = useState(pratibimb);
  var [filterphysicsDept, setFilterphysicsDept] = useState(physicsDept);
  var [filtereceDept, setFiltereceDept] = useState(eceDept);
  var [filtercivilDept, setFiltercivilDept] = useState(civilDept);
  var [filterelectricalDept, setFilterelectricalDept] = useState(electricalDept);
  var [filterchemicalDept, setFilterchemicalDept] = useState(chemicalDept);
  var [filtergdscDcrust, setFiltergdscDcrust] = useState(gdscDcrust);
  var [filtercseDept, setFiltercseDept] = useState(cseDept);
  var [filtermsDept, setFiltermsDept] = useState(msDept);
  var [filtermathsDept, setFiltermathsDept] = useState(mathsDept);
  var [filterbtDept, setFilterbtDept] = useState(btDept);
  var [filtersavera, setFiltersavera] = useState(savera);
  var [filterchemistryDept, setFilterchemistryDept] = useState(chemistryDept);
  var [filterthinkbots, setFilterthinkbots] = useState(thinkbots);
  var [filtermechanicalDept, setFiltermechanicalDept] = useState(mechanicalDept);
  var [filterbmeDept, setFilterbmeDept] = useState(bmeDept);
  var [filtersanjhi, setFiltersanjhi] = useState(sanjhi);
  var [filterarchDept, setFilterarchDept] = useState(archDept);
  var [filtere_cell, setFiltere_cell] = useState(e_cell);
  var [filterfeatured, setfilterfeatured] = useState(featured);
  var [filtercentralised, setfiltercentralised] = useState(centralised);
  const [searchInput, setSearchInput] = useState("");
  // console.log(searchInput.split(" ").join(""))
  const onChange = (e) => {

    setSearchInput(e.target.value);
    

  };
  // const onSearch = (e) => {
  //   // console.log('hello');
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  //   console.log(searchInput)
  //   search();
   
  // }


  function search() {
    // eslint-disable-next-line
    if (searchInput.split(" ").join("")!= "") {
      setfilterfeatured([]);
    }else{
      if (!document.querySelector(".rs-input").placeholder) document.querySelector(".rs-input").placeholder="Search";
      setfilterfeatured(featured);
    }
    
   var searchSunshine = sunshine.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return sunshine;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltersunshine(searchSunshine);
   var searchCentralised = centralised.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return centralised;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setfiltercentralised(searchCentralised);

   var searchLisoc = lisoc.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput=== "") {
      
        return lisoc;
      } else if (
        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
      ) {
      
        return val;
      }
      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
      
        return val;
      }});
    setFilterlisoc(searchLisoc);

    var searchPratibimb = pratibimb.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput=== "") {
     
        return pratibimb;
      } else if (
        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
      ) {
     
        return val;
      }
      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
     
        return val;
      }});
    setFilterpratibimb(searchPratibimb);

    var searchECE = eceDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return eceDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltereceDept(searchECE);

    var searchCSE = cseDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return cseDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltercseDept(searchCSE);

    var searchCivil = civilDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return civilDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltercivilDept(searchCivil);

    var searchElectrical = electricalDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return electricalDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFilterelectricalDept(searchElectrical);

    var searchPhysics = physicsDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return physicsDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFilterphysicsDept(searchPhysics);



    var searchChemical = chemicalDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return chemicalDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFilterchemicalDept(searchChemical);

    var searchManagementStudies = msDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return msDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltermsDept(searchManagementStudies);

    var searchBioTech = btDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return btDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFilterbtDept(searchBioTech);

    var searchBioMedical = bmeDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return bmeDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFilterbmeDept(searchBioMedical);

    var searchMathematics = mathsDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return mathsDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltermathsDept(searchMathematics);

    var searchChemistry = chemistryDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return chemistryDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFilterchemistryDept(searchChemistry);

    var searchMechanical = mechanicalDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return mechanicalDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltermechanicalDept(searchMechanical);


    var searchSavera = savera.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return savera;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltersavera(searchSavera);

    var searchSanjhi = sanjhi.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return sanjhi;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltersanjhi(searchSanjhi);
   
    var searchEntrepreneurship = e_cell.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return e_cell;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltere_cell(searchEntrepreneurship);
   
    var searchThinkbots = thinkbots.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return thinkbots;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFilterthinkbots(searchThinkbots);

    var searchGoogle = gdscDcrust.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return gdscDcrust;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFiltergdscDcrust(searchGoogle);
    var searcharchDept = archDept.filter((val)=>{
      if (searchInput.split(" ").join("")=== "" ||searchInput === "") {
                      // console.log(val)
                        return archDept;
                      } else if (
                      
                        val.society.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())
                      ) {
                        // console.log(val)
                        return val;
                      }
                      else if(val.eventName.toLowerCase().includes(searchInput.split(" ").join("").toLowerCase())){
                        // console.log(val)
                        return val;
                      }});
    setFilterarchDept(searcharchDept);


  
  }
  const isMobile = useMediaQuery({
    query: '(max-width: 400px)'
  })
  return (
    <div className="bodyallevent" style={{ width: isMobile ? '100vw' :""}}>
      <div style={{ marginTop: "1.5%" ,marginRight:"auto"}}></div>
      <div style={{position:'fixed',right:'0',zIndex:'9'}} >
      <InputGroup style={{
        float: "right",
        // borderRadius: "50%",
        width: "300px",
        // padding: "5px",
        marginRight: "20%",
        marginTop: "3%",
        border:'2px solid blue',
        backgroundColor:'blue'
        // position:'fixed',
      }}
      type="text"
          name="query"
          placeholder="search"
          onChange={onChange}>
      <Input  />
      <InputGroup.Button>
        <SearchIcon />
      </InputGroup.Button>
    </InputGroup>
  
      </div>
     
{filtercentralised.length>0?
<div >
      <div >
          <h2 style={{
              padding: "14px",
              marginTop: "40px",
              paddingLeft: "60px",
              marginRight: "40px",
              marginBottom: "0",
              textAlign:'center',
             color:'white',
              fontWeight: "bold",
              textTransform:'uppercase'
            }}>Centralized Events</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row " style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtercentralised
            .map((item) => {
              return (
                <div className="col-md-6 col-lg-4 col-sm-6 mx-1cont shadow p-2 rounded mb-2" style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-2">
                    <div className="card border-0">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3" style={{fontSize:"14px"}}>
                          {item.eventDescription.slice(0, 50)}...
                        </p>
  <Link to={`/EventDetail/${item.id}`} className="btn btn-sm btn-dark ">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filterthinkbots.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',
          textTransform:'uppercase'
           }}>Th!nkbots Society</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterthinkbots
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}    <div >
          <h2 style={{
              padding: "14px",
              marginTop: "30px",
              paddingLeft: "60px",
              marginRight: "40px",
              marginBottom: "0",
              textAlign:'center',
             color:'white',
              fontWeight: "bold",
              textTransform:'uppercase'
            }}>Departmental Events</h2>
      </div>

{filtercseDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',
          textTransform:'uppercase'
           }}>Dept. of Computer Science Engg. (CSE)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtercseDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filtereceDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',
          // wordWrap:'break-word',
          textTransform:'uppercase'
           }}>Dept. of Electronics and Communication
           Engineering (ECE)</h2>
         
      </div>
      <a href="https://www.linkedin.com/school/electronics-communication-engineering-department-dcrust-murthal/ " target="_blank" style={{fontSize:"30px",textDecoration:'none',color:'white',float:"right",marginRight:'5%'}}><i class="fab fa-linkedin" ></i></a>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>
  
<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtereceDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filterelectricalDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',
          textTransform:'uppercase'
           }}>Dept. of Electrical Engineering (EE)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterelectricalDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filtermechanicalDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept. of Mechanical
           Engineering (ME)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtermechanicalDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}

{filterchemicalDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept. of Chemical Engineering (CHE)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterchemicalDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filterbtDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept. of Bio Technology (BT)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterbtDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filtercivilDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept of Civil Engineering (CE)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtercivilDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}

{filterbmeDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept. of Biomedical Engineering (BME)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterbmeDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filtermsDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept. of Management Studies (MBA)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtermsDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}


{filterchemistryDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept. of Chemistry (CHEM)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {
          filterchemistryDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}

{filterarchDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept. of Architecture (ARCH)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterarchDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filterphysicsDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept of Physics (PHY)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterphysicsDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filtermathsDept.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Dept. of Mathematics (MATHS) </h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtermathsDept
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
<div >
          <h2 style={{
              padding: "14px",
              marginTop: "30px",
              paddingLeft: "60px",
              marginRight: "40px",
              marginBottom: "0",
              textAlign:'center',
             color:'white',
              fontWeight: "bold",
              textTransform:'uppercase'
            }}>Societies / Other Events</h2>
      </div>
{filtere_cell.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Entrepreneurship Cell (E-CELL)</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtere_cell
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filtersunshine.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Sunshine</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtersunshine
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}

{filterpratibimb.length>0?
      <div>
      <div>
      <h2 class style={{
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
          }}>Pratibimb</h2>
      </div>
      <div style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
    }} className="mx-auto"></div>
      
      <div className="container" style={{maxWidth:"90%"}}>
      <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
        {
         filterpratibimb.map((item)=>{
            
            return (
              
              <div className="col-md-4  col-sm-6 cont shadow" style={{borderRadius:"5px"}} key={item.id}>
<div className='my-3'>
  <div className="card border-0" >
  <div style={{
    display:'flex',
    justifyContent:'flex-end',
    position:'absolute',
    right:'0'
  }
  }>
 </div>
 <img style={{height:"300px"}} src={!item.eventImage?"https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D":item.eventImage} className="card-img-top" alt=""/>
  <div className="card-body">
    
  <h5 className="card-title">{item.eventName}</h5>
  <p className="py-3">{item.eventDescription.slice(0,100)}...</p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
  
  </div>
  </div>
  </div> 
            </div> 
            
            )
          })
        }
      </div>
      </div>
    </div>:""
    }
{filtersavera.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Savera</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtersavera
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{ filterlisoc.length>0?   
  <div >
      <div>
         <h2 style={{ 
           padding: "14px",
           marginTop: "30px",
           paddingLeft: "60px",
           marginRight: "40px",
           marginBottom: "0",
           fontWeight: "bold",
           color:'white',textTransform:'uppercase'}}>LISOC</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

      <div className="container" style={{maxWidth:"90%"}}>
      <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filterlisoc
            
            .map((item) => {
              
              return (
                <div className="col-md-4  col-sm-6 cont shadow" style={{borderRadius:"5px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                     <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>

                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div></div>:""
      }
{filtergdscDcrust.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>GDSC</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtergdscDcrust
            .map((item) => {
             
              return (
                <div className={`col-md-4 col-sm-6 cont shadow ${item.id=="19"?"d-none":""} `}style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
{filtersanjhi.length>0?
<div >
      <div >
          <h2 style={{ 
          
          padding: "14px",
          marginTop: "30px",
          paddingLeft: "60px",
          marginRight: "40px",
          marginBottom: "0",
          fontWeight: "bold",
          color:'white',textTransform:'uppercase'
           }}>Sanjhi</h2>
      </div>
      <div
        style={{
          border: "1.5px solid #3d5a80 ",
          backgroundColor: "#3d5a80",
          width: "90%",
          margin: " 0 5px ",
          marginBottom: "40px",
        }} className="mx-auto"
      ></div>

<div className="container " style={{maxWidth:"90%"}}>
        <div className="row my-1" style={{padding:"25px",background:"white",borderRadius:"5px"}} >
          {filtersanjhi
            .map((item) => {
             
              return (
                <div className="col-md-4 col-sm-6 cont shadow " style={{borderRadius:"5px",padding:"10px"}} key={item.id}>
                  <div className="my-3">
                    <div className="card border-0 ">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          position: "absolute",
                          right: "0",
                        }}
                      ></div>
                     <img style={{height:"270px"}}
                        src={
                          !item.eventImage
                            ? "https://usrimg-full.fark.net/g/gJ/fark_gJPBYfChZtz_Kj6r6f9RdMPkoaw.jpg?AWSAccessKeyId=UKDINQXVGV49TCSSKJLK&Expires=1661140800&Signature=lmASSAQLjYTCi%2BsK738uTIx0cNs%3D"
                            : item.eventImage
                        }
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body">
                       <h5 className="card-title" >{item.eventName}</h5>
                        <p className="py-3">
                          {item.eventDescription.slice(0,100)}...
                        </p>
  <Link to={"/EventDetail/"+item.id}    className="btn btn-sm btn-dark mt-2">Register</Link>
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>


      </div>:""
}
    </div>
  );
};

export default Allevents;