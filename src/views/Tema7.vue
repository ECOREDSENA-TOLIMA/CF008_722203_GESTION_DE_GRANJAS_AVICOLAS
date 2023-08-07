<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Parámetros técnicos de los huevos de gallina

    p.mb-5 Los parámetros técnicos son de gran importancia en cualquier explotación pecuaria ya que estos facilitan la producción eficiente, de calidad, inocua y rentable. De igual manera, permiten la toma de decisiones basadas en información (registros) confiable y oportuna. Además, estos parámetros, proporcionan una base de datos del comportamiento productivo como la cantidad de huevos producidos (por ave y en total), porcentaje de producción, conversión alimenticia, porcentaje de mortalidad, entre otros.
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.1 Objetivo

    p.mb-5 Para el manejo de los huevos se debe tener en cuenta las labores desarrolladas por actividad diariamente y enlistarlas, de modo que se haga de forma metódica y eficiente; en este caso se tendrán en cuenta dos actividades que competen para el manejo del huevo dentro de la granja.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones8.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/img-82.svg' alt='AvatarTop')
        p.text-center El operario debe comenzar esta labor temprano en la mañana, por lo general en las granjas se asignan 4 jornadas durante el día para la recolección de los huevos el horario más popular es a las 8 am.

      .tarjeta.color-acento-botones9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/img-83.svg' alt='AvatarTop')
        p.text-center Los nidales deben tener camas cómodas tales como cascarilla de arroz, paja, tamo, etc; para que las aves puedan anidar con comodidad.

      .tarjeta.color-acento-botones7.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/img-84.svg' alt='AvatarTop')
        p.text-center Se deben recolectar en bandejas de cartón para protegerlos y evitar que rueden rompiéndose. 

      .tarjeta.color-acento-botones8.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/img-85.svg' alt='AvatarTop')
        p.text-center Al retirar los huevos debe conservarse un orden específico para evitar que se omitan algunos y queden huevos dentro del galpón. 

      .tarjeta.color-acento-botones9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/img-86.svg' alt='AvatarTop')
        p.text-center Mientras se hace la recolección se ha de verificar que no hay elementos o animales extraños a la producción que puedan interferir con las labores o puedan lesionar las aves o los operarios.

      .tarjeta.color-acento-botones7.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/img-87.svg' alt='AvatarTop')
        p.text-center La labor de recolección se debe registrar diariamente en el formato pertinente.

      .tarjeta.color-acento-botones8.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/img-88.svg' alt='AvatarTop')
        p.text-center Clasificar según lo esté pidiendo el mercado y limpiar los huevos sucios con un brillo o cepillo retirando toda la suciedad que no pertenezca a la morfología del huevo.

      .tarjeta.color-acento-botones9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/img-89.svg' alt='AvatarTop')
        p.text-center En caso de que se presente una irregularidad en la producción debe reportarse de inmediato al médico veterinario para que se tomen las medidas adecuadas.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.2 Almacenamiento del huevo 

    ul.lista-ul.mb-5
      li 
        i.lista-ul__vineta
        | Una vez los huevos estén limpios hayan sido seleccionados, se apilan en torres de 5 bandejas repartidas equitativamente en la bodega de tal forma que se aproveche el espacio y que se facilite su posterior traslado.
      li 
        i.lista-ul__vineta
        | Los huevos que tengan compromiso estructural estén quebrados o fracturados, se deben registrar diariamente en un formato diseñado para tal fin y se desechan posteriormente.
      li
        i.lista-ul__vineta 
        | Al finalizar las recolecciones en la tarde y realizar los procedimientos de almacenamiento, se realiza un cotejo de la información registrada en los formatos y el número de huevos acumulado en bodega, una vez verificado, se pasa al registro semanal para evaluar la productividad del galpón. 
      li
        i.lista-ul__vineta 
        | La información básica que debe ir consignada en el registro diario es la siguiente: total de huevos diarios recogidos, total de huevos quebrados o fracturados, total huevos extra, huevos no clasificados “Revoltura”, salida de huevos para venta, total de huevos en bodega.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.3 Condiciones de calidad

    p.mb-5 La calidad interna se define como el conjunto de propiedades funcionales, estéticas y microbiológicas tanto de la yema como de la clara. Por ello, se deben verificar las siguientes condiciones de calidad. 

    .row.mb-5
      .col-md-7
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row(numero="1" titulo="")
            .col-md-12.mb-4.mb-md-0
              p.text-small La yema de un huevo recién puesto es redonda y firme, pero a medida que el huevo va envejeciendo, la yema absorbe el agua de la clara y su tamaño se incrementa. 

          .row(numero="2" titulo="Esto produce la debilidad...")
            .col-md-12.mb-4.mb-md-0
              p.text-small Esto produce la debilidad de la membrana vitelina y el agrandamiento; entonces la yema se ve con manchas y aplanada. 

          .row(numero="3" titulo="Después de ser puesto el huevo...")
            .col-md-12.mb-4.mb-md-0
              p.text-small Después de ser puesto el huevo su calidad empieza a disminuir de inmediato, en cuanto más es su tiempo de almacenamiento mayor es su deterioro. 
              
          .row(numero="4" titulo="Aunque la composición química...")
            .col-md-12.mb-4.mb-md-0
              p.text-small Aunque la composición química no se ve gravemente implicada, es decir no cambia mucho. Pasado el tiempo el pH de la clara aumenta, su velocidad de avance depende de la temperatura, a causa de la disminución de CO2, el cual se pierde por los poros, y dependen del equilibrio de proteínas, carbonato y bicarbonato, y CO2 disuelto. 

          .row(numero="5" titulo="La disminución de la calidad interna...")
            .col-md-12.mb-4.mb-md-0
              p.text-small La disminución de la calidad interna del huevo luego de la postura se debe a la pérdida de agua y CO2. Como consecuencia, el pH del huevo cambia y da como resultado una clara acuosa debido a la pérdida de estructura de la proteína de la clara gruesa. 

          .row(numero="6" titulo="La apariencia nebulosa de la clara...")
            .col-md-12.mb-4.mb-md-0
              p.text-small La apariencia nebulosa de la clara también se debe al CO2 cuando el huevo envejece, la pérdida de CO2 hace que la clara se vuelva transparente, en comparación a los huevos frescos. La preservación de la calidad del huevo a través de su manipulación y distribución depende del cuidado permanente de todo el personal involucrado en estas actividades. 

          .row(numero="7" titulo="No se puede mejorar la calidad del huevo...")
            .col-md-12.mb-4.mb-md-0
              p.text-small No se puede mejorar la calidad del huevo luego de la postura, de manera que los esfuerzos para mantener la calidad deben comenzar justo en ese momento.

      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema7/img-90.svg" data-aos="fade-left")

    p.mb-5 La calidad de la estructura del huevo puede sufrir algunos cambios con el tiempo como:

    .row.mb-5
      .col-md-7
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Huevo entero")
            .col-md-12.mb-4.mb-md-0
              p.text-small Generación de olores desagradables, reducción de peso.
                
          .row(numero="2" titulo="Cáscara")
            .col-md-12.mb-4.mb-md-0
              p.text-small Esporádicamente se ve moteada y su color puede tener cambios en la fluorescencia (pareciera estar bajo luz ultravioleta).

          .row(numero="3" titulo="Albumen o clara")
            .col-md-12.mb-4.mb-md-0
              p.text-small Disminución de agua, incremento rápido del pH para luego reducirse, el punto de congelación se eleva, incremento del fósforo, disminuye la capacidad de coagulación de la proteína, se genera pérdida del dióxido de carbono libre. 

          .row(numero="4" titulo="Albumen claro (exterior)")
            .col-md-12.mb-4.mb-md-0
              p.text-small Disipación por medio de la cáscara.

          .row(numero="5" titulo="Albumen denso y albumen claro interior")
            .col-md-12.mb-4.mb-md-0
              p.text-small Disminución de agua hacia la yema.

          .row(numero="6" titulo="Cámara de aire")
            .col-md-12.mb-4.mb-md-0
              p.text-small Aumenta su dimensión.

          .row(numero="7" titulo="Yema")
            .col-md-12.mb-4.mb-md-0
              p.text-small Color más intenso, incremento del pH, se eleva el nivel de amoniaco y los ácidos grasos libres, disminuye el fósforo y el poder de coagulación de la proteína.
      
      img.mb-5.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema7/img-91.svg" data-aos="fade-left")

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-19.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Para conservar correctamente los huevos, se deben garantizar las condiciones adecuadas de temperatura (máximo 10 ºC), y humedad del ambiente (menos de 80%) con el fin de evitar la proliferación de hongos y microorganismos que puedan dañar el huevo.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.4 Vida últil del huevo de gallina 
    
    p Partiendo del hecho que no todos los huevos tienen fecha de vencimiento, sobre todo si se compran por unidades en tiendas o supermercados pequeños, debemos tener en cuenta indicadores que nos permitan saber fácilmente si el producto se encuentra fresco y apto para el consumo. 
    p El tiempo de vida útil óptimo de un huevo es alrededor de tres semanas. Sin embargo, con el almacenamiento y pasar del tiempo, este puede sufrir cambios que afecten su calidad como lo son la eliminación de vapor de agua a través de los poros de la cáscara, ocasionando pérdidas en el peso y amplitud en la cámara de aire. Además, la pérdida de consistencia de la albúmina y las chalazas, así como la desubicación de la posición central de la yema, características propias de un huevo fresco.  
    p.mb-5 La temperatura también juega un papel importante en la conservación de la frescura del huevo, por eso debe evitarse los cambios repentinos de temperatura los cuales pueden favorecer la entrada de bacterias u hongos como consecuencia de la condensación de agua en la superficie de la cáscara y apertura de los poros.  De acuerdo con las razones expuestas anteriormente no es recomendable refrigerar los huevos en las etapas de almacenamiento y distribución, sino una vez lleguen al consumidor final.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.5 Sistemas de higienización de los huevos de gallina

    p.mb-5 Los factores determinantes para saber si un huevo es apto para el consumo son la limpieza y la integridad. Teniendo en cuenta lo anterior, los huevos con cáscaras sucias, rotas o fisuradas no podrán comercializarse para consumo humano dado que, al presentar estas condiciones, los microorganismos adheridos a la superficie pueden penetrar en el interior del huevo y contaminarlo, generando un riesgo para la integridad del consumidor.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Proceso de lavado de huevo 

    p.mb-5 Un huevo sucio puede tratarse de dos maneras (lavado y raspado), el raspado elimina la suciedad, pero también daña la cutícula exterior del huevo, por lo que es recomendable utilizar el método del lavado siempre y cuando se respeten las siguientes condiciones:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-6.mb-4.mb-md-0
          h3 Uno
          p Utilizar una solución de detergente e higienizarte que sean a base de compuestos de yodo, amonio cuaternario en una proporción de 250 partes por millón (ppm) o hipoclorito en una proporción de 5 ml por cada litro de agua. Vale la pena aclarar que el tiempo de lavado no puede sobrepasar los tres minutos y que la solución deberá cambiarse cada 3 o 4 tandas de lavado.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/img-92.svg', alt='Texto que describa la imagen' style="max-width: 100px")

      .row
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema7/img-93.svg', alt='Texto que describa la imagen' style="max-width: 180px")
        .col-md-6
          h3 Dos
          p La dureza del agua debe ser adecuada, desde el punto de vista bacteriológico y químico; sobre todo, se ha de prestar atención a la concentración de hierro, ya que ésta nunca debe exceder de 5 pm. 

      .row
        .col-md-6.mb-4.mb-md-0
          h3 Tres
          p La realización del lavado aumenta los costos del huevo e incrementa el riesgo de dañar el huevo. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema7/img-94.svg', alt='Texto que describa la imagen' style="max-width: 200px")

    p Utilizar una solución de detergente e higienizarte que sean a base de compuestos de yodo, amonio cuaternario en una proporción de 250 partes por millón (ppm) o hipoclorito en una proporción de 5 ml por cada litro de agua. Vale la pena aclarar que el tiempo de lavado no puede sobrepasar los tres minutos y que la solución deberá cambiarse cada 3 o 4 tandas de lavado.
    p.mb-5 El lavado se divide en cuatro fases: prelavado, lavado, desinfección y secado. 

    .row.mb-5
      .col-lg-12
        .cajon.color-primario.p-4.mb-4
          p <strong>Prelavado:</strong> se retira la suciedad (heces de aves, sangre, restos de yemas, entre otros) con una esponjilla o cepillo en seco y suavemente para evitar daños en la cáscara.

      .col-lg-12
        .cajon.color-acento-contenido.p-4.mb-4
          p <strong>Lavado:</strong> se realiza con surfactante y detergente, la eficacia de esto es fundamental no solo para eliminar la suciedad, sino para la recuperación de los huevos.  también puede ayudar a eliminar las bacterias.

      .col-lg-12
        .cajon.color-acento-botones.p-4.mb-4
          p <strong>Desinfección:</strong> elegir un desinfectante adecuado junto con un buen procesamiento limpio, ayudan a mantener el estatus higiénico de los huevos.

      .col-lg-12
        .cajon.color-secundario.p-4.mb-4
          p <strong>Secado:</strong> este se realiza directamente con aire (natural o artificial) y no debe tardar más de 30 segundos.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Lavado, secado y desinfección del huevo

    p.mb-5 Este procedimiento se hace en circunstancias de  estricto control de dos factores  importantes la temperatura del huevo y el agua controlando su PH, calidad y temperatura,  con el fin de prevenir condiciones que contaminen el huevo a partir de la ruptura de la cáscara. 

    .row.mb-5
      .col-md-7
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Huevo entero")
            .col-md-12.mb-4.mb-md-0
              p.text-small Este procedimiento se hace en circunstancias de estricto control de dos factores importantes la temperatura del huevo y el agua controlando su PH, calidad y temperatura, con el fin de prevenir condiciones que contaminen el huevo a partir de la ruptura de la cáscara. 
                
          .row(numero="2" titulo="Se deben utilizar los adecuados...")
            .col-md-12.mb-4.mb-md-0
              p.text-small Se deben utilizar los adecuados productos de limpieza como los detergentes e higienizadores mencionados en el punto anterior. 

          .row(numero="3" titulo="Después de lavar los huevos...")
            .col-md-12.mb-4.mb-md-0
              p.text-small Después de lavar los huevos, se deben secar con el fin de disminuir la humedad en la superficie de la cáscara y de esta manera evitar la formación de moho. 

          .row(numero="4" titulo="Lo ideal es que el proceso de limpieza...")
            .col-md-12.mb-4.mb-md-0
              p.text-small Lo ideal es que el proceso de limpieza utilizado no genere daños ni contaminación en los huevos ya que una incorrecta limpieza, puede generar un nivel mayor de contaminación de los huevos que el que existía antes de la limpieza.

          .row(numero="5" titulo="En ocasiones se utilizan bajas...")
            .col-md-12.mb-4.mb-md-0
              p.text-small En ocasiones se utilizan bajas temperaturas por un tiempo más prolongado y se le añaden combinaciones de detergentes y germicidas con el propósito de mejorar las características de conservación

          .row(numero="6" titulo="La pasteurización de los huevos...")
            .col-md-12.mb-4.mb-md-0
              p.text-small La pasteurización de los huevos con cáscara se realiza sumergiéndolos en agua por más de 2 minutos a una temperatura de 62°C. 

          .row(numero="7" titulo="Después, con aire calentado o con aire...")
            .col-md-12.mb-4.mb-md-0
              p.text-small Después, con aire calentado o con aire natural se secan los huevos, y enseguida del anterior procedimiento se cierran los poros del huevo aplicando con una capa de aceite o plástico con el fin de evitar que ingresen contaminantes como bacterias, aire o vapor de agua.

      img.mb-5.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema7/img-95.svg" data-aos="fade-left")

    p.mb-5 Se deben utilizar los adecuados productos de limpieza como los detergentes e higienizadores mencionados en el punto anterior. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 7.6 Criterios técnicos y condiciones de aceptación o rechazo de los huevos de acuerdo con el destino final

    p.mb-5 Los criterios técnicos de aceptación o rechazo están basados en las propiedades físicas y organolépticas del huevo que sirven como referente para evaluar la calidad del producto, ver tabla 2.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Tabla 2.
        span <em>Criterios de aceptación y rechazo para el huevo</em>
      img.d-md-block(src="@/assets/curso/temas/tema7/img-96.svg" data-aos="fade-left")







</template>

<script>
export default {
  name: 'Tema7',
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
