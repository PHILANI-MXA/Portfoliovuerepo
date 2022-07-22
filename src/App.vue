<template>
  <NavComponent/>
  <HomeView />
  <AboutView/>
  <EducationView/>
  <SkillsView/>
  <Certificates/>
  <ProjectsView/>
  <TestimonialsComp/>
  <ContactView/>
  <FooterComp />
</template>
<script>
import NavComponent from './components/NavComponent.vue'
import FooterComp from './components/FooterComp.vue'
import ContactView from './views/ContactView.vue'
import AboutView from './views/AboutView.vue'
import TestimonialsComp from '@/views/TestimonialsComp'
import SkillsView from './views/SkillsView.vue'
import ProjectsView from './views/ProjectsView.vue'
import EducationView from './views/EducationView.vue'
import HomeView from './views/HomeView.vue'
import Certificates from './views/Certificates.vue'
export default {
  components: {
    NavComponent,
    FooterComp,
    ContactView,
    AboutView,
    TestimonialsComp,
    SkillsView,
    ProjectsView,
    EducationView,
    HomeView,
    Certificates,
}
}
</script>
<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

  }
}
</style>
