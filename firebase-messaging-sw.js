importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyA0IauzLxirKSqr4WZ7rCLLE0q_GLUwvjQ",
    authDomain: "kyotoshiki-e9b89.firebaseapp.com",
    projectId: "kyotoshiki-e9b89",
    storageBucket: "kyotoshiki-e9b89.firebasestorage.app",
    messagingSenderId: "147615553608",
    appId: "1:147615553608:web:22f01e6b7cc993a4d0607d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const url = payload.data.download_url;
    self.registration.showNotification('📬 新しいファイルが届きました', {
        body: 'タップしてダウンロードしてください',
        data: { url }
    });
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    const url = event.notification.data.url;
    if (url) {
        clients.openWindow(url);
    }
});