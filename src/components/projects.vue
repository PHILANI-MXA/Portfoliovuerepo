<template>
<div class="container h-100 overflow-auto">
<div class="row d-flex">
<div v-for="card in projects" class="col-md-3 card d-flex justify-content-between ">
<div>
  <div class="card-header">
  </div>
  <div class="card-body">
  <h5 class="card-title">{{card.projectname}}</h5>
  <img class="img-fluid" :src="card.img" alt="project image">
    <p class="card-text">{{card.title}}</p>
     <a href="#" class="btn btn-primaryd-flex btn-success">Ghub </a>
     <a href="#" class="btn btn-primaryd-flex btn-danger">Live </a>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects;
       }
    }
}

</script>

<style>

</style>