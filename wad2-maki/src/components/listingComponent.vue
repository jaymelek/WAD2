<!-- Beat -->

<!-- Template -->
<template>

<!-- Card -->
<div class="card cardStyle" style="max-width: 456px; height: 200px;"> <!--DO NOT CHANGE MAX WIDTH-->
  <div class="row g-0">
    <div class="col-4 align-self-center">
      <img :src="imgSrc" class="img-fluid rounded-start imgClass" alt="">
    </div>
    <div class="col-8 align-self-center">
      <div class="card-body">
        <h5 class="card-title overflowOneLine">{{ gameName }}</h5>
        <p class="card-text mb-1 overflowTwoLine">{{ description }}</p>
        <p class="card-text mb-1"><small>
          For {{ pax }} Players
        <br>
          Category: {{ category }}
        </small></p>
        <p class="card-text overflowOneLine"><small>{{availability}}</small></p>
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
      availability: String,
    },
    data() {
      return {
          
      };
    },

  }
</script>

<!-- Style -->
<style>
  .imgClass {
    width: 100%;
    border-radius: 10px;
  }

  .overflowOneLine {
    max-width: 20ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .overflowTwoLine {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.cardStyle {
  background-color: transparent;
  border: none;
  border-radius: 20px;
  padding: 10px;
  padding-top: 0px;
  box-shadow: 0 4px 8px 0 rgba(170, 212, 230, 0.2), 0 6px 20px 0 rgba(170, 212, 230, 0.2);
  background-color: rgba(0, 0, 0, 0.05);
  /* border : 1.5px solid #aad4e6; */
  /* border: 1.5px solid #b0dde4; */
  color: white;
}

</style>