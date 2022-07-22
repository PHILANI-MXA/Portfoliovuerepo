<template>
<div id="projects" class="container h-100 overflow-auto">
<div class="row d-flex">
<div v-for="card in projects" class="col-md-4 card d-flex  ">
<div>
  <div class="card-header">
  <h5 class="card-title">{{card.projectname}}</h5>
  </div>
  <div class="card-body">
  <img class="img-fluid" :src="card.img" alt="project image">
    <p class="card-text">{{card.title}}</p>
     <a href="{{card.Ghub}}" class="btn btn-primaryd-flex btn-success">Ghub</a>
     <a href="{{card.live}}" class="btn btn-primaryd-flex btn-danger">live</a>
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