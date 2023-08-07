<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instalaciones e infraestructura

    p.mb-5 Para un correcto levantamiento del huevo es importante tener presente las áreas de un sistema productivo como su alistamiento y los protocolos a acatar en las instalaciones de dicho sistema. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 3.1 Áreas que componen el sistema productivo

    p Las áreas que componen el sistema productivo del huevo deben estar alejadas de focos de contaminación, previamente evaluados y valorados, ya que pueden afectar la cadena productiva. De igual manera, es importante tener en cuenta la cantidad de animales que se van a trabajar (grado de confinamiento), y el sistema productivo que se va a implementar dependiendo de si es un sistema productivo tradicional o tecnificado, el tipo de instalaciones empleados para las distintas etapas de producción, o si se va a producir en jaulas, en piso. 
    p.mb-5 Dentro de las áreas más importantes en este sistema productivo, se encuentran: el área administrativa, de producción (casetas de producción, galpones o alojamientos), bodegas de alimentos, de almacenamiento de huevos, de herramientas y medicamentos, entre otras.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 3.2 Proceso de alistamiento de las áreas para proceso productivo

    p.mb-5 El alistamiento es el conjunto de actividades orientadas a la entrega de un galpón en condiciones sanitarias de infraestructura y equipo, óptimas para la recepción de un lote de aves. Este proceso está dirigido a las áreas productivas, es decir a los galpones que son el centro de las unidades productivas avícolas, por esto se centrará el conocimiento en el alistamiento completo del galpón. 

    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Retiro de equipos")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-36.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Se retiran comederos, bebederos, nidales, perchas y todos los elementos dentro del galpón

          .row(numero="2" titulo="Sanitización de la gallinaza")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-37.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Se sanitiza la gallinaza con la adición de un producto desinfectante a través de la aspersión. Posteriormente, mezclar, remover y dejar secar.

          .row(numero="3" titulo="Despacho de la gallinaza")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-38.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Se recoge la gallinaza una vez esté seca y apilada en el centro del galpón; se empaca en bultos y se despacha.

          .row(numero="4" titulo="Limpieza del galpón en seco")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-39.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Se realiza una limpieza completa del galpón, barriendo las superficies, limpiando telarañas y las paredes u otras superficies de polvo y demás elementos que puedan estar adheridos.

          .row(numero="5" titulo="Flameado del galpón")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-40.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Haciendo énfasis en pisos, andenes, ranuras, grietas, teniendo especial cuidado con las mallas. No se deben flamear elementos de plástico o fibra como cortinas, equipos, etc.

          .row(numero="6" titulo="Control de plagas")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-41.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Inspeccionar las paredes y pisos en busca de nidos de insectos, roedores y otros plagas  e identificar los puntos de infestación o presencia  de los mismo, luego se realiza la aspersión del galpón con una dilución del producto pertinente y se deja actuar.

          .row(numero="7" titulo="Adecuación del galpón (revisar y reparar toda la infraestructura)")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-42.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Se repara todo material comprometido como mallas, puertas, claraboyas, techos, se resanan huecos, arreglar tubos, goteos de agua, etc. 

          .row(numero="8" titulo="Purga de tuberías")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-43.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Enjuagar el tanque de abastecimiento y el de cada galpón, drenar toda el agua por la punta más lejana, poner 50 litros de agua en el tanque y agregar desinfectantes tales como cloro o yodo, dejar circular por la tubería, enjuagar con abundante agua 12 a 24 horas después.

      .col-md-6
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row(numero="9" titulo="Biológico")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-44.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Se retiran comederos, bebederos, nidales, perchas y todos los elementos dentro del galpón

          .row(numero="10" titulo="Lavado y desinfección de equipos")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-45.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Lavar los equipos como comederos y bebederos restregándolos con un cepillo o esponja. Lavar con suficiente agua y desinfectarlos con una solución por inmersión, luego, dejar secar y almacenar.

          .row(numero="11" titulo="Lavado y desinfección del galpón ")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-46.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Lavar con agua a presión y detergente alcalino iniciando por arriba, techo, estructuras. cortinas, pisos de cemento, andenes y bodegas. Usar en lo posible bombas de bajo consumo de agua o hidrolavadoras, dejar actuar y enjaguar. Desinfectar con productos como yodados, glutaraldehído y amonio cuaternario todas las áreas del galpón. 

          .row(numero="12" titulo="Encalado")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-47.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Disolver la cal a razón de 5 kg. cal viva en 15 LT. De agua, aplicar lechada la cal viva, como si estuviese pintando el galpón, en paredes, muros, y pisos, utilizando escobas, o brochas.

          .row(numero="13" titulo="Esparcir nueva cama de piso sanitizada")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-48.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Repartir la cama (viruta gruesa - cascarilla de arroz - cascarilla de algodón), la cual debe estar seca totalmente,  de manera homogénea, que no queden montones y huecos, por capas, e ir aplicando desinfectante en cada capa, hasta alcanzar una altura de 10 centímetros de la misma.

          .row(numero="14" titulo="Instalación y prueba de equipos")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-49.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Ingresar el equipo, de acuerdo  con la cantidad de aves que se van a recibir.

          .row(numero="15" titulo="Encortinado del galpón")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-50.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Colocar cortinas con base a los requerimientos de recibimiento. Estas podrían ser externas e internas o solo externas.

          .row(numero="16" titulo="Desinfección final")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-51.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Aplicar  una nueva desinfección dos horas antes de la llegada de las aves.

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-32.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Se recomienda que el personal utilice la vestimenta y elementos de protección tales como escafandra antifluido, gafas plásticas, guantes, botas, tapabocas, overol antifluido, delantal PVC, necesarios para realizar las labores de limpieza, desinfección y preparación de los galpones para la producción.

    .col-xl-12.mx-auto
      .tarjeta.color-acento-contenido.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema3/decorador-1.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p En el siguiente vídeo se puede apreciar el proceso de alistamiento del galpón en una unidad avícola. 

              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=McsW-3e99qw')" target="_blank")
                  span Ver video
                  i.fas.fa-file-download
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 3.3 Protocolos aplicados al proceso productivo

    p Una vez alojadas las aves, se les debe garantizar las mejores condiciones (alimento, agua, condiciones ambientales, cómodos nidales) para que inicien su etapa productora de huevos. A partir del momento de inicio de la producción, el personal capacitado, realiza la recolección constante de los huevos para ser trasladados a la bodega de almacenamiento, clasificación y empaque, lo que garantiza que salgan de buena calidad al mercado para consumo y, sobre todo, que sean frescos. 
    p.mb-5 Para la recepción de las pollitas se debe tener presente la siguiente información: 

    .tarjeta.tarjeta.color-acento-contenido2.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p En el desarrollo del proceso productivo con gallinas ponedoras existen varias etapas como: 
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Cría de pollitas (desde el primer día, hasta la semana 8).
              li 
                i.lista-ul__vineta
                | Desarrollo (a partir del primer día de la semana 9, hasta la semana 18).  
              li  
                i.lista-ul__vineta
                | Producción (primer día de la semana 19, hasta semana 80).

              p Generalmente, las grandes empresas avícolas implementan un sistema de producción cerrado en donde se trabajan todas las etapas, razón por la cual se ampliará el proceso de recepción de pollitas.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-53.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Antes del día de la recepción de las pollitas, se debe calentar el galpón a una temperatura de 31 a 33 °C para facilitar que la cama llegue a una temperatura óptima de 30 °C. De igual manera, verificar que el tanque del agua esté lleno y aplicar cloro a razón de 1gr por cada 100 litros de agua (recordar que el agua para las pollitas debe estar limpia y fresca). 
            p Finalmente, asegurarse de tener el alimento concentrado, tipo iniciación quebrantado o pollita iniciación.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-54.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p El día de la recepción de las pollitas, los bebederos deben estar llenos a la mitad y los comederos con disposición de alimento con el fin de que cuando se liberen las pollitas en el galpón, tengan acceso libre a agua y alimento. La proporción de comederos y bebederos debe ser 1 por cada 80 pollitas. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-55.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Durante las primeras cuatro semanas, debe brindarse calor bajo una criadora de pollas, manejando una densidad de una criadora por cada 800 a 1.000 pollitas, la temperatura inicia con 33 °C, reduciendo 2 °C cada semana, hasta finalizar en la cuarta semana con una temperatura de 24 °C. 
            p La distribución de las pollitas debajo de la criadora indicará si debe hacer correcciones de temperatura o encortinado, teniendo en cuenta que las pollitas con una temperatura adecuada se distribuyen uniformemente en todo el corral.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-56.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Después de asegurar las condiciones de temperatura, alimento y agua, se debe realizar el conteo de todas las cajas de pollitas o como mínimo un 10% de ellas (generalmente, vienen 102 pollitas por caja). Pese el mayor número posible de pollitas, si es posible un 10% (en promedio, cada pollita debe pesar de 35 a 40 gr).

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-57.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Se debe realizar una revisión de la calidad de las pollitas, que tengan el ombligo bien cicatrizado, sin hilos, ni botones. Las pollitas deben venir sin defectos físicos como tuertos, con 2 cloacas, 3 patas, tarsos rojos, cuello torcido, pico cruzado. Además, deben traer los ojos brillantes y estar en un estado activo y de alerta.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-58.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Para soltar las pollitas se deben tomar en grupos de la caja y ponerlas en la cama, o voltear la caja suavemente, sin golpearlas ya que se puede romper el saco vitelino o yema guardado en su abdomen. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-59.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Posterior a las 8 horas de llegada de las pollitas, se deben revisar los buches y estos deberán estar llenos en un 80%, 24 horas después de su llegada, deben haber llegado a un 95 p 100% de llenado. 
            p De igual manera, la consistencia del buche debe ser elástica (contiene alimento y agua); si su consistencia es dura, quiere decir que solamente ha ingerido alimento o si, por el contrario, su consistencia es blanda, solamente ha ingerido agua.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/img-60.png', alt='Texto que describa la imagen')





</template>

<script>
export default {
  name: 'Tema3',
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
