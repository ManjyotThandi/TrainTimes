// config the database

var firebaseConfig = {
    apiKey: "AIzaSyCG6_HhH1KycFz1nUSlsn9Se3n3RsffZSA",
    authDomain: "my-awesome-project-c4d3c.firebaseapp.com",
    databaseURL: "https://my-awesome-project-c4d3c.firebaseio.com",
    projectId: "my-awesome-project-c4d3c",
    storageBucket: "my-awesome-project-c4d3c.appspot.com",
    messagingSenderId: "1038292116843",
    appId: "1:1038292116843:web:a530660dc39c1173"
  };

  // intialize app
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database()

  // variables

  var trainName = ""
  var destination = ""
  var frequency = ""
  var nextArrival = ""
  var minutesAway = ""
  var firstTrain = ""

  // onclick of submit get values and update variables
  $("#submit").on("click",function(event) {   
    event.preventDefault();
      trainName = $("#train-name-input").val().trim()
      destination = $("#destination-input").val().trim()
      firstTrain = $("#start-input").val().trim()
      frequency = $("#freq-input").val().trim()

      console.log(trainName)
  })
