<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La recolección y el transporte de los huevos son etapas fundamentales en la avicultura de gallina ponedora. Saber en qué consisten, su importancia y cómo hacerlas bien, es fundamental para la granja.
    p.mb-5 El huevo destaca como uno de los alimentos de origen animal más ampliamente consumidos en todo el mundo, constituyendo una base nutricional fundamental para innumerables familias en diversos países. Por esta razón, los sistemas de producción avícola deben asegurar el transporte de los huevos hasta los hogares de las personas, garantizando su total inocuidad para el consumo. En el siguiente mapa conceptual, podrá consultar los temas tratados anteriormente: 

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
