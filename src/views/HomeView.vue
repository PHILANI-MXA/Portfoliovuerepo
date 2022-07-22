<template>
  <div id="home" class="container-fluid min-vh-100 my-5 p-4">
    <div>
    <div class="wrapper">
	<h1 class="text">
		<div class="line">
			<p>I am Philani Mxathule</p>
			<p>I am an aspiring front-end developer</p>
			<p>I am an aspiring software developer</p>
		</div>
		<div class="fw-bold line">
			<p>I am an aspiring front-end developer</p>
			<p>I am an aspiring software developer</p>
			<p>I am Philani Mxathule</p>
		</div>
		<div class="line">
			<p>I am an aspiringsoftware developerr</p>
			<p>I am Philani Mxathule</p>
			<p>I am an aspiring front-end developer</p>
		</div>
	</h1>
</div></div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="scss">
.container-fluid{
  background-attachment: fixed;
  background-image: url(https://i.postimg.cc/7hnVt6gX/tai-s-captures-r5k-TKshp22-M-unsplash.jpg) !important;
  min-width: 100%;
}

.container-fluid{
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
background-attachment: fixed;
background-position: fit-content;
min-width: 100%;
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) {

}
}


p {
	margin: 0;
}
.wrapper {
	position: absolute;
	top:50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.text {
	margin: 0;
	font-size: 35px;
	text-align: left;
	text-transform: uppercase;
  font-weight: bold;
  color: white;
	text-align: center;
	.line {
		overflow: hidden;
    white-space: nowrap;
    height: 70px;	
		line-height: .9;
		&:first-child {
			& + .line {
				margin-left: 75px;
				&+ .line {
					margin-left: 150px;
				}
			}
		}
		> p {
			margin: 0;
			height: 70px;	
			overflow: hidden;
			font-size: 1em;
			line-height: .9;
			white-space: nowrap;
			animation: moveWords 6s infinite ease;
		}
	}
	.line:nth-child(odd) {
		transform: skew() scaleY(.66667);
	}
	.line:nth-child(even) {
		transform: skew() scaleY(1.33333);
	}
}

@keyframes moveWords {
	0% {
		transform: translateY(0%);
	}
	50% {
		transform: translateY(-100%);
	}
	100% {
		transform: translateY(0%);
	}
}

</style>
