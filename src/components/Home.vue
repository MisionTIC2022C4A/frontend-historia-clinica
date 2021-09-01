<template>
  <div class="container-fluid">
	<div class="row m-10">
		<div class="col-md-12">
			<div class="row">
				<div class="col-md-6">
          <div class="text-center">
					<img class="imagen" alt="Bootstrap Image Preview" src="../assets/pexels-pixabay-40568.jpg" />
          </div>
				</div>
				<div class="col-md-6">
					<h1 class="text-center">
						¡Bienvenido a nuestro sistema de historias clínicas!
					</h1>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
     name: "Home",
}
</script>

<style>
.imagen:hover {filter: opacity(.5);}
.imagen {
  max-width: 100%;
  

}

h1 {
  font-size: 80px;
  color: #3e6c76;
  line-height: 100px;
  text-align: center;
  vertical-align: middle;
  
}


</style>