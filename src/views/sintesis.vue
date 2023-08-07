<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El componente formativo de "Conceptos y normatividad de bioseguridad en granjas avícolas" se centra en brindar conocimientos fundamentales sobre las prácticas y regulaciones de bioseguridad aplicables en la producción avícola. Se abordarán temas como los diferentes sistemas de producción, el plan de ordenamiento territorial, la concesión de aguas, así como los programas, procedimientos y protocolos de bioseguridad en las granjas avícolas. Además, se destacan las normativas relacionadas con la certificación de granjas bioseguras, el registro sanitario y el manejo adecuado de insumos, equipos y desinfectantes. Este componente busca proporcionar a los estudiantes una comprensión integral de la importancia de la bioseguridad en la industria avícola y promover la aplicación de prácticas seguras y sostenibles en este ámbito.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
