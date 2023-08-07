<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Parámetros técnicos de los huevos de gallina y procedimiento

    p.mb-5 Después de iniciada la producción, el personal capacitado en manejo de aves, realiza constantemente la recolección de los huevos frescos para su posterior traslado a la bodega de almacenamiento y continuar con el proceso de clasificación y empaque. El almacenamiento debe hacerse en una bodega exclusiva para guardar los huevos, y debe contar con buenas condiciones de limpieza, desinfección, orden y con control de plagas. Además, debe estar separada de sustancias químicas, desinfectantes o plaguicidas.
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 6.1 Procedimientos de manejo

    p Teniendo en cuenta que entre las 4 y 9 de la mañana, se produce la mayor postura, la recolección debe iniciarse después de terminar la distribución de la comida, aproximadamente después de las 8 am, procurando realizar recolecciones cada dos horas, entre 3 y 5 veces por día, lo ideal es recoger el 90% de la producción antes de mediodía, ya que esto disminuye el riesgo de que se rompan, ensucien o el canibalismo.  
    p Una vez recolectados, deben ponerse en las cubetas con la parte angosta hacia abajo para dejar libre la cámara de aire y aumentar la vida útil del huevo; lo recomendable es apilar máximo 5 cubetas para disminuir el riesgo de roturas en el manejo. Los huevos sucios, rotos o vencidos y también los muy grandes, se ponen en cubetas aparte. Los restos de materia fecal deben retirarse con un trapo seco y destinado únicamente para ese fin.
    p.mb-5 Posteriormente, los huevos deben ser llevados a la clasificadora o equipo de clasificación, donde serán seleccionados por peso de acuerdo con la Norma Técnica Colombiana 1240 como se muestra en la siguiente tabla 1: 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 1.
        span <em>Clasificación de los huevos de gallina de acuerdo con la NTC 1240</em>
      img.d-md-block(src="@/assets/curso/temas/tema6/img-81.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 6.2 Temperatura 

    p.mb-5 El huevo de gallina se debe almacenar en lugares frescos, con una temperatura no mayor a los 25 ºC y no debe someterse a cambios bruscos de temperatura, ni exponerlos directamente a los rayos del sol o a fuentes de calor.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 6.3 Tipos y condiciones técnicas de apilamiento de bandejas

    p Los huevos deben empacarse y transportarse en bandejas de material desechable nuevo o en bandejas plásticas lavadas y desinfectadas. Los huevos limpios y seleccionados deben apilarse en torres de máximo 5 bandejas y distribuirse por la bodega de manera tal que facilite su traslado y el aprovechamiento de espacio. 
    p.mb-5 Las bandejas deben almacenarse sobre estantes o estibas que estén en buenas condiciones de limpieza y separadas de las paredes y del piso. Además, debe implementarse un procedimiento que permita la rotación del producto, garantizando el sistema Primeras Entradas, Primeras Salidas (PEPS) que consiste en ir sacando lo que primero va entrando a la bodega.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 6.4 Modelos de bandejas para acopio de huevos

    p Los envases, empaques o recipientes para los huevos, (bandejas), deberán ser nuevos, fabricados con materiales apropiados para entrar en contacto con el producto y cumplir con las reglamentaciones establecidas por la autoridad competente. Con el fin de no generar riesgo para la contaminación del producto, antes de usarlos, se deben revisar para confirmar que estén en buen estado y limpios. 
    p En el mercado, se encuentran dos tipos de bandejas: 
    ul.lista-ul
      li 
        i.lista-ul__vineta
        | Bandeja desechable. elaborada para usarse sólo una vez en el empaque de huevos, con compartimentos interiores que facilitan la colocación de los huevos en forma vertical.
      li 
        i.lista-ul__vineta
        | Bandeja plástica: elaborada en material sintético, se utiliza para el empaque y transporte de los huevos al interior de la granja. Para su reutilización, se deberán realizar procesos de limpieza y desinfección y no deberán utilizarse para venta directa al público.



</template>

<script>
export default {
  name: 'Tema6',
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
