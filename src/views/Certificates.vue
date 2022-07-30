<template>
<div class="container h-100">
<div class="row">
<h2 class="bg-dark bg-black fw-bolder p-4">Certificates</h2>
<CertificatesComp/>
</div>
</div>
</template>

<script>

import certificates from '@/components/CertificatesComp.vue'
import CertificatesComp from '@/components/CertificatesComp.vue'
export default {
    // name: 'ProjectsView',
    components: { certificates, CertificatesComp }
}

</script>

<style>

</style>