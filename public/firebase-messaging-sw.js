importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

firebase.initializeApp({
	apiKey: "AIzaSyDBAA9fds7TLHmYzYGsd1FxdO9_0adAdnA",
  authDomain: "walfchat.firebaseapp.com",
  databaseURL: "https://walfchat-default-rtdb.firebaseio.com",
  projectId: "walfchat",
  storageBucket: "walfchat.appspot.com",
  messagingSenderId: "840763157061",
  appId: "1:840763157061:web:ebfcb5307fe2794e05512c",
  measurementId: "G-NR6C5HBKPW"
}) /*use your own configuration*/

const messaging = firebase.messaging();

var href = self.location.origin 

messaging.onBackgroundMessage(payload => {
	const title = payload.data.title;
	const options = payload.data.image ? {
		badge: "icon.png",
		body: payload.data.body,
		icon: payload.data.photoURL,
        image: payload.data.image,
    } : {
        badge: "icon.png",
        body: payload.data.body,
        icon: payload.data.photoURL,
    }
	self.registration.showNotification(title, options);
});

self.addEventListener('notificationclick', event => {
    event.notification.close();
    self.clients.openWindow(href);
})
