//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCyqWCReZogY6R3pPlY8Ok7V9jecaDjbSM",
      authDomain: "kwitter-b215e.firebaseapp.com",
      databaseURL: "https://kwitter-b215e-default-rtdb.firebaseio.com",
      projectId: "kwitter-b215e",
      storageBucket: "kwitter-b215e.appspot.com",
      messagingSenderId: "928407604723",
      appId: "1:928407604723:web:eeddc80ea83b555d439686",
      measurementId: "G-PX75WZX7K0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();