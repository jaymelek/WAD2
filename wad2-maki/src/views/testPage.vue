

<template>
  <div>
    <h1>Data from Firebase</h1>
    <pre>{{ firebaseData }}</pre>
  </div>
</template>

<script>

import { app } from "../firebase/firebase"; 
import { getDatabase, ref, get } from 'firebase/database';

const db = getDatabase(app); // Use the 'app' object to get the database instance
const databaseRef = ref(db, 'games');

// Read data from the database
get(databaseRef)
  .then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      return data
    } else {
      console.log('No data available');
    }
  })
  .catch((error) => {
    console.error('Error reading data from Realtime Database:', error);
  }
);

</script>