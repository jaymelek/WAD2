<script>
import { ref, onMounted } from 'vue';
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import { app } from "../firebase/firebase"

export default {
  setup() {
    const data = ref([]);
    const database = getDatabase(app); // Access the Realtime Database using the 'app' instance

    onMounted(async () => {
      const itemsRef = dbRef(database, 'items');

      try {
        const snapshot = await get(itemsRef);
        if (snapshot.exists()) {
          data.value = snapshot.val();
          console.log(data.value)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });

    return {
      data
    };
  }
};
</script>

<template>
  <div>
    <h1>Data from Firebase</h1>
    <ul>
      <li v-for="(item, index) in data" :key="index">{{ item.propertyName }}</li>
    </ul>
  </div>
</template>

  