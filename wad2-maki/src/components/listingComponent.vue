<!-- Beat -->

<!-- Template -->
<template>

<!-- Card -->
<div class="card" style="max-width: 456px; height: 200px;"> <!--DO NOT CHANGE MAX WIDTH-->
  <div class="row g-0">
    <div class="col-4 align-self-center">
      <img :src="imgSrc" class="img-fluid rounded-start imgClass" alt="">
    </div>
    <div class="col-8 align-self-center">
      <div class="card-body">
        <h5 class="card-title">{{ gameName }}</h5>
        <p class="card-text mb-1 overflowText">{{ description }}</p>
        <p class="card-text mb-1"><small>
          For {{ pax }} Players
        <br>
          Category: {{ category }}
        </small></p>
        <p class="card-text"><small class="text-muted">Currently Unavailable for Loan</small></p>
      </div>
    </div>
  </div>
</div>
<!-- End Card -->

</template>

<!-- Script -->
<script>
  export default {
      name: "ListingCard",
      props: {
      gameName: String,
      imgSrc: String,
      description: String,
      pax: String,
      category: String,
      open: Number,
      access: String,
      employeeSkills: Array,
      roleSkills: Array,
      // lastUpdated: String,
      // primaryColor: String,
      // secondaryColor: String
    },
    data() {
      return {
          primaryColor: "grey",
          secondaryColor: "grey-lighten-1",
      };
    },

  }
</script>

<!-- Style -->
<style>
  .imgClass {
    width: 100%;
  }

  /* .overflowText {
    max-width: 20ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  } */

  .overflowText {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>