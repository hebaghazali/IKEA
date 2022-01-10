import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBvz1el-WaDgUU36xlWeIEj2G9iyI0ewW4',
  authDomain: 'ikea-8dc72.firebaseapp.com',
  projectId: 'ikea-8dc72',
  storageBucket: 'ikea-8dc72.appspot.com',
  messagingSenderId: '293717792182',
  appId: '1:293717792182:web:f170e2edfe2370c9769d17',
};

export const storageApp = initializeApp(firebaseConfig);
