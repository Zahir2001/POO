const firebaseConfig = {
    apiKey: "AIzaSyCg511uuNG4mBD0WVsfbMBRTmcwX-_UIXk",
    authDomain: "registros-50aa0.firebaseapp.com",
    projectId: "registros-50aa0",
    storageBucket: "registros-50aa0.appspot.com",
    messagingSenderId: "374453387419",
    appId: "1:374453387419:web:f234b143d957f1a3d6463e",
    measurementId: "G-5LQPL9WZZB"
  };

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Registrar un nuevo usuario
function register() {
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Usuario registrado:', userCredential.user.uid);
            loadChatRooms();
        })
        .catch((error) => {
            console.error('Error al registrar usuario:', error.message);
        });
}

// Iniciar sesión
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Usuario inició sesión:', userCredential.user.uid);
            loadChatRooms();
        })
        .catch((error) => {
            console.error('Error al iniciar sesión:', error.message);
        });
}

// Cargar salas de chat disponibles
function loadChatRooms() {
    const roomList = document.getElementById('roomList');
    db.collection("chats").get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const roomId = doc.id; // ID del documento
                const li = document.createElement('li');
                li.textContent = roomId; // Usar el ID del documento como nombre de la sala de chat
                li.addEventListener('click', () => {
                    showChatRoomData(doc); // Para mostrar los datos 
                });
                roomList.appendChild(li);
                console.log('Sala de chat:', roomId);
            });

            document.getElementById('chatRooms').style.display = 'block';
        })
        .catch((error) => {
            console.error("Error al cargar salas de chat:", error);
        });
}

function showChatRoomData(doc) {
    console.log("Datos de la sala de chat:", doc.data());
}

// Verificar el estado de la autenticación
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("Usuario autenticado:", user.uid);
    } else {
        console.log("No hay usuario autenticado.");
    }
});
