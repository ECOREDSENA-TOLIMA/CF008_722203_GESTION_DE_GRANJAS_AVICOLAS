<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El huevo es uno de los productos con mayor importancia en la canasta básica por su contenido nutricional. Por tal razón, organizaciones como la OMS (Organización Mundial de la Salud) se han preocupado de que se convierta en un producto inocuo con los estándares de calidad requeridos para productos provenientes de la cadena animal. Por lo anterior, las unidades productivas han adoptado medidas como las buenas prácticas de manufactura BPM, las buenas prácticas de bioseguridad BPB, las buenas prácticas pecuarias dirigidas a la producción avícola BPA, buenas prácticas de higiene BPH, el HACCP y demás para optimizar sus procesos productivos y ofrecer un producto desde la finca a la mesa de mejor calidad en todos los aspectos. Aspectos que se verán a lo largo del componente. 



        
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
