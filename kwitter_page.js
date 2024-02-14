const firebaseConfig = {
    apiKey: "AIzaSyAdMFbEE2P0PdcIaNVisW06D7RaOLX6wFw",
    authDomain: "fiuiuoiaamsgmdokwiter.firebaseapp.com",
    databaseURL: "https://fiuiuoiaamsgmdokwiter-default-rtdb.firebaseio.com",
    projectId: "fiuiuoiaamsgmdokwiter",
    storageBucket: "fiuiuoiaamsgmdokwiter.appspot.com",
    messagingSenderId: "815502276720",
    appId: "1:815502276720:web:728f5337f66fe455bd5cb5"
  };
  
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
}