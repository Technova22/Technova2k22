
const firebaseConfig = {
  apiKey: "AIzaSyBUF2U2mTQQp0vrEbJPFzMqRaPmYynfceI",
  authDomain: "technova22-f21f2.firebaseapp.com",
  databaseURL: "https://technova22-f21f2-default-rtdb.firebaseio.com",
  projectId: "technova22-f21f2",
  storageBucket: "technova22-f21f2.appspot.com",
  messagingSenderId: "499347388002",
  appId: "1:499347388002:web:bf50994f21a1000585c33b",
  measurementId: "G-KV5PJT08MG"
};


  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
  // var contactForm=firebase.database().ref('TeamForm')
  // document.getElementById("TeamForm").addEventListener("submit",submitForm);

  function submitForm(){
    // e.preventDefault();
    var teamname= document.getElementById("teamname").value
    var name1 = document.getElementById("name1").value
    var name2 = document.getElementById('name2').value
    var name3 = document.getElementById('name3').value
    var name4 = document.getElementById('name4').value
    var email1 = document.getElementById('email1').value
    var email2 = document.getElementById('email2').value
    var email3 = document.getElementById('email3').value
    var email4 = document.getElementById('email4').value;
    saveDetails(teamname,name1,name2,name3,name4,email1,email2,email3,email4);
    alert("Team Register Successfully");
    
    
    // document.getElementById("TeamForm").reset();

  }
  
  const saveDetails=(teamname,name1,name2,name3,name4,email1,email2,email3,email4)=>{
    var database_ref = database.ref()
    var user = auth.currentUser;
    
    // Create User data
    var team_data = {
      teamname:teamname,
      name1:name1,
      name2:name2,
      name3:name3,
      name4:name4,
      email1:email1,
      email2:email2,
      email3:email3,
      email4:email4
    }
    
    // Push to Firebase Database
    database_ref.child('teams/' + teamname).set(team_data)
    alert("hello")
  
      // DOne
      alert('User Created!!')
    
   }
    
  
   

  