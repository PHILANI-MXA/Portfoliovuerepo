<template>
 <div id="contact" class=" container h-100 vw-100 my-5">
                                    <h2 class="d-flex justify-content-center align-items-center flex-column bg-black text-white my-4 p-3">Contact me</h2>
                                    <div class="row edufont">
                                        <div class="col-md-6">
                                            <div class="#">
                                                <h5 class="text-center text-decoration-none my-2 bg-black text-white">Location</h5>

                                                <address>
                        <ul class="list-unstyled d-flex justify-content-center align-items-center flex-column py-5 address bg-black container text-white">
                            <li class="spc">89 Joel Bolnick Street</li>
                            <li class="spc">Victoria Mxenge</li>
                            <li class="spc">Philippi</li>
                            <li class="spc">Cape Town, Western Cape</li>
                            <li class="spc">7785</li>
                            <li class="list-inline-item m-1"><a href="https://wa.me/0646778134" target="_blank"><i class="bi bi-whatsapp"></i> 0646778134</a></li>
                            <li class="list-inline-item m-1"><a href="mailto:mxathule99@gmail.com" target="_blank"><i class="bi bi-envelope"></i> mxathule99@gmail.com</a></li>
                        </ul>
    </address>
    <div class="row">
        <!-- social media platforms icons -->
        <ul class="list-unstyled d-flex justify-content-center align-items-center">
            <li class="list-inline-item"><a href="https://github.com/" target="_blank">Github<i class="bi-github" role="img" aria-label="GitHub"></i>|</a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/feed/?trk=joogle" target="_blank">Linkedin<i class="bi bi-linkedin"></i>|</a></li>
            <li class="list-inline-item"><a href="https://app.netlify.com/start/repos" target="_blank">Netlify<i class="bi bi-app-indicator"></i>|</a></li>
        </ul>
    </div>
</div>
</div>
                <div class="col-md-6">
                <h5 class="text-center text-decoration-none my-2 bg-black text-white">Contact me</h5>
 <form class="w-100 text-black float-start align-items-start" action="https://formspree.io/f/xyyobvab" method="post">
                                                    <div class="row my-2">
                                                        <label for="name" class="col-md-1 col-form-label-lg fs-5"> Name</label>
                                                        <div class="col-2"></div>
                                                        <div class="col-8">
                                                            <input id="name" name="name" type="text" placeholder="Enter your name" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="row my-2">
                                                        <label for="Your location" class="col-md-1 col-form-label-lg fs-5"> Location</label>
                                                        <div class="col-2"></div>
                                                        <div class="col-8">
                                                            <input id="location" name="location" type="text" placeholder="Enter your location" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="row my-2">
                                                        <label for="time" class="col-md-1 col-form-label-lg fs-5"> Time</label>
                                                        <div class="col-2"></div>
                                                        <div class="col-8">
                                                            <input id="time" name="time" type="time" placeholder="When do you need me?" class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="row my-1">
                                                        <label for="gender" class="col-md-1 col-form-label-lg fs-5">Company </label>
                                                        <div class="col-2"></div>
                                                        <div class="col-8 col-md-6">
                                                        
                                                            <span class="ms-3">Private Company <input type="radio" id="private" name="company" required></span> <div class="col"><span>
                                                            <span class="ms-3"> Public Company <input type="radio" id="public" name="company" required></span></span></div>
                                </div>
                            </div>
                            <div class="row">
                                <label for="message" class="col-md-1 col-form-label-lg fs-5">Message</label>
                                <div class="col-2"></div>
                            <div class="col-8">
                                    <input id="message" name="message" type="text" placeholder="type your message here" class="form-control">
                            </div>
                            </div>
                            <div class="row my-2">
                                <label class="col-md-2 col-form-label-lg"></label>
                                <div class="col-12">
                                    <label for="submit"></label>
                                    <input type="submit" value="submit" class="btn btn-dark w-100">
                            </div>
                            </div>
                        </form>


	</div>
            </div>

</div>
             

</template>

<script>
export default {
    name: 'ContactView',

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

<style lang="scss">
*{
    margin: 0
}

ul li a{
    color: #ffffed;
}

ul li a:hover{
color: white;
}

.bi-github{
    background-color:black;
}

.bi-linkedin{
 background-color:black;
}

.bi-whatsapp{
    background-color:black;
}
.bi-app-indicator{
    background-color: black;
}
</style>
