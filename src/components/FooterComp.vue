<template>
 <footer class="bg-black text-white text-center ">
    <small>Made by Philani Mxathule copyrights &copy; 2022</small>
    <div class="icons d-flex justify-content-between">
        <a href="" target="_blank"><router-link to="/"></router-link>
              <i class="bi bi-house"></i>
            </a>
        <a href="#" target="_blank">
              <i class="bi bi-file-person"><router-link to="/about"></router-link></i>
            </a>
        <a href="#" target="_blank">
              <i class="bi bi-mortarboard-fill"></i>
            </a>
             <a href="#" target="_blank">
             <i class="bi bi-briefcase"></i>
            </a>
        <a href="#" target="_blank">
              <i class="bi bi-code-slash"></i>
            </a>
        <a href="#" target="_blank">
              <i class="bi bi-bag-x"></i>
            </a>
             <a href="#" target="_blank">
              <i class="bi bi-person-rolodex"></i>
            </a>
              <a href="#" target="_blank">
                <i class="bi bi-telephone"></i>  
            </a>
          
      </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent',

    // data() {
    //     return {
            
    //     };
    // },

    // mounted() {
        
    // },

    // methods: {
        
    // },
};
</script>

<style lang="scss" scoped>
footer{
position:fixed;
bottom:0;
width: 100%;
padding: 1px;
background-color: black;
}

a{
  color: #ffefef;
}

a:hover{
  color: gray;
}
</style>