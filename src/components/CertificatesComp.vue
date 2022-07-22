<template>
<div id="certificates" class="container h-100 overflow-auto">
<div class="row d-flex">
<div v-for="card in certificates" class="col-md-4 card d-flex  ">
<div>
  <div class="card-header">
  </div>
  <div class="card-body">
  <h5 class="card-title"></h5>
  <img class="img-fluid" :src="card.img" alt="project image">
    <p class="card-text text-black">{{card.language}}</p>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    computed: {
        certificates() {
            return this.$store.state.certificates;
       }
    }
}

</script>

<style>

</style>