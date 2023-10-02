<template>
  <div>
    <h1>Data from Firebase</h1>
    <pre>{{ firebaseData }}</pre>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // Import Vue composition API functions
import { app } from "../firebase/firebase"; 
import { getDatabase, ref as dbRef, get } from 'firebase/database';

export default {
  setup() {
    const firebaseData = ref(null);

    onMounted(async () => {
      try {
        const db = getDatabase(app);
        const databaseRef = dbRef(db, 'games');

        const snapshot = await get(databaseRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          firebaseData.value = data; // Update the data property with fetched data
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error reading data from Realtime Database:', error);
      }
    });

    return {
      firebaseData,
    };
  },
};
</script>
