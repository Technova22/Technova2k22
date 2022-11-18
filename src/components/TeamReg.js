import React,{useState} from 'react'
import { useParams, useRouteMatch } from 'react-router-dom'
import {auth,db} from './misc/firebase'
import '../TeamReg.css'
import {data} from '../Data'
import {  ref, set , get ,child, update, remove, push, onValue} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {useStore} from '../store'
// import {InsertData,onSubmit} from './misc/helper'

const TeamReg = () => {
  const {currentName} = useStore((state) => state.currentName);
  // const {ide} = useParams();
  const {ide} = useParams();

const [teamform, setteamform] = useState({
  teamname:'',
  name1:'',
  email1:'',
  name2:'',
  email2:'',
  name3:'',
  email3:'',
  name4:'',
  email4:'',

});
// console.log(teamform)

let name,value;
const getData = (e)=>{
  name = e.target.name;
  value = e.target.value;
  
  setteamform({...teamform,[name]:value}) 
}



async function InsertData(){


  let dbref = ref(db, 'events/'+ data[ide].eventName + "/" + teamform.teamname);
  // console.log(teamname.value);
  
  // let dbrefids = ref(db, 'events/' + eventData[idx].eventName + "/allMembers/");
  
  try{
  
      const result = await set(dbref, {
      member1: teamform.name1,
      mail_id1: teamform.email1,
      member2: teamform.name2,
      mail_id2: teamform.email2,
      member3: teamform.name3,
      mail_id3: teamform.email3,
      member4: teamform.name4,
      mail_id4: teamform.email4
      });
  
      let id_array = [teamform.email1, teamform.email2, teamform.email3, teamform.email4];
        //   id_array.forEach((element)=> { 
        //     set(dbrefids(child(element)), {
             
        //       team: teamname.value
  
        //  })});

        const dbRef = ref(db, 'events/' + data[ide].eventName + "/allMembers/");
  
          id_array.forEach((element)=>{
             let  newRef = push(dbRef);
              
              set(newRef , element); 
              console.log(newRef.key.value);
  
          });
  
  
        // console.log(child(dbrefids, email1.value));
        
      console.log(result);
      console.log("successfully uploaded data");
    }catch(err)
    {
      console.log(err);
    }
  }

const popup = (err)=>{
  alert(err.message);
 }

async function onSubmit(e){

  e.preventDefault();
  
  let check = true;
  let validMail = true;
  
  let db_ref = ref(db, 'events/' + data[ide].eventName);
  
  let arr = new Array(4);
  arr.fill(0);
  if(currentName.length<=0){
  alert("Please log in");
  }
  else if(teamform.email1== teamform.email2|| teamform.email1== teamform.email3|| teamform.email1== teamform.email4|| teamform.email2== teamform.email3|| teamform.email2== teamform.email4|| teamform.email3== teamform.email4)
  {
    console.log('Error : One or more emails entered are same');
    alert('one or more emails Entered are same');
  }
  else{
    await get(child(db_ref, teamform.teamname)).then((snapshot) =>{
  
     try{
  
      if(snapshot.exists()){
        throw new Error('Team already exists');
      }
    }catch(err){
      console.log('Error: '+ err);
       check = false;
       popup(err);
    }
  
      });
  
  
      // onValue(dbRef, (snapshot) => {
    if(check)
    {
    await get(child(db_ref, 'allMembers')).then((snapshot) =>{
         
        console.log(snapshot);
      try{
        snapshot.forEach((childSnapshot) => {
          // let childKey = childSnapshot.key;
          let childData = childSnapshot.val();
  
          if(childData  == teamform.teamname) 
          {
            throw Error(`${teamform.email1} is already registered`);
          }
          if(childData  == teamform.email2) 
          {
            throw new Error(`${teamform.email2} is already registered`);
          }
          if(childData  == teamform.email3) 
          {
            throw new Error(`${teamform.email3} is already registered`);
          }
          if(childData  == teamform.email4) 
          {
            throw new Error(`${teamform.email4} is already registered`);
          }
         
        });
  
     
      }
      catch(err){
         console.log(err);
         check = false;
         popup(err);
      }
      
      });
  
    }

    let i = 0;
 
    await get(ref(db, 'users')).then((snapshot)=>{
      console.log(snapshot);
        
      try{
        snapshot.forEach((childSnapshot)=>{
                
          // console.log(childSnapshot.val());
         if(childSnapshot.val().emailverified == true){
          if(teamform.email1 == childSnapshot.val().email )
          {
            console.log('email1 match' + i);
            arr[0] = 1;
          }
          else if(teamform.email2 == childSnapshot.val().email)
          {
            console.log('email2 match' + i);
            arr[1] = 1;
          }
          else if(teamform.email3 == childSnapshot.val().email )
          {
            console.log('email3 match' + i);
            arr[2] = 1;
          }
          else if(teamform.email4 == childSnapshot.val().email )
          {
            console.log('email4 match' + i);
            arr[3] = 1;
          }
        }
          // i++;
      
          
        })

        // for(let i = 0; i < arr.length; i++){
        //   console.log(`${arr[i]} `);
        // }

        if(arr[0] == 0)
        {
          throw new Error(`${teamform.email1} is not registered or verified`);
        }
        else if(arr[1] == 0) 
        {
          throw new Error(`${teamform.email2} is not registered or verified`);
        }
        else if(arr[2] == 0) 
        {
          throw new Error(`${teamform.email3} is not registered or verified`);
        }
        else if(arr[3] == 0) 
        {
          throw new Error(`${teamform.email4} is not registered or verified`);
        }
        

        // for(let i = 0; i< 4; i++)
        // {
        //   if(arr[i] == 0)
        //    {
        //      let k = i + 1
        //      vals = `email${k}`;
        //      console.log(vals.value);
           
        //      throw new Error(`${vals.value} is not registered`);
        //    }
        //    break;
        // }
      }catch(err){
        console.log(err.message);
        alert(err.message);
        validMail = false;
      }

    }
    )
  
 
    if(check && validMail)
    InsertData();
    else
    {
      console.log("Upload Unsuccessful");
      alert("Registration Unsuccessful, Please TRY AGAIN! with valid credentials")
      
    }
  }
  
  } 
  return (
    <div class="rowteam" >
        <section class="sectionteam" >
          <header class="headerteam">
            <h3>Register</h3>
            <h4>Please fill your information bellow</h4>
          </header>
          <main className='mainteam'>
            <form action="" id="TeamForm"  >
      
                <div class="form-item box-itemteam">
                  <input id="teamname" type="text" name="teamname" onChange={getData} placeholder="Team Name" data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                <div class ="diteam">
                <div class="form-item box-itemteam">
                  <input id ="name1" type="text" name="name1" onChange={getData}  placeholder="1st Member" data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam mail">
                  <input id="email1" type="email" name="email1"  onChange={getData} placeholder="email"  data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                <div class="diteam">
                <div class="form-item box-itemteam">
                  <input  id ="name2" type="text" name="name2" onChange={getData}  placeholder="2nd Member"  data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam mail">
                  <input id="email2" type="email" name="email2" onChange={getData}  placeholder="email" data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                <div class="diteam">
                <div class="form-item box-itemteam">
                  <input   id ="name3" type="text" name="name3"  onChange={getData} placeholder="3rd Member"  data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam mail">
                  <input id="email3" type="email" name="email3" onChange={getData}  placeholder="email" data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
                <div class="diteam">
                <div class="form-item box-itemteam">
                  <input  id ="name4"  type="text" name="name4" onChange={getData}  placeholder="4th Member" data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                  <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
                </div>
                <div class="form-item box-itemteam mail">
                  <input  id ="email4" type="email" name="email4" onChange={getData}  placeholder="email"  data-email data-required/>
                  <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                </div>
                </div>
        
               
                
                <div class="form-item my-3">
                  <button  class="submitteam" id="sbtn" onClick={onSubmit}>Submit</button>
                </div>
              </form>
          </main>
         
          <i class="waveteam"></i>
        </section>
      </div>
  )
}

export default TeamReg