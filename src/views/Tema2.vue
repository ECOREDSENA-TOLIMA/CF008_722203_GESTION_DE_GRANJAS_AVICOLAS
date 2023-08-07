<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Buenas prácticas
    
    p.mb-5 De acuerdo con la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO), una buena práctica es una experiencia positiva, probada y replicada en contextos diversos y que, por consiguiente, puede ser recomendada como modelo. Por esto, merece ser compartida para que el mayor número de personas pueda adaptarla y adoptarla. En ese orden de ideas, en la industria avícola existen varios tipos de buenas prácticas que se implementan dentro del proceso productivo: buenas prácticas de bioseguridad, avícolas, de manufactura y todas ellas dirigidas al cumplimiento e implementación del sistema HACCAP. (FAO, 2021). A continuación, se explican las más importantes. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.1 Las buenas prácticas de bioseguridad en granjas de reproducción aviar y plantas de incubación

    p Dentro de la cadena completa de producción aviar deben estar aplicados los principios y prácticas generales de bioseguridad en el sistema de granjas de abuelas, reproductoras y comerciales; y las plantas de incubación y plantas de beneficio para el procesamiento de las aves. Además, estas deben ofrecer una capacitación permanente a todo el equipo de trabajo, haciéndolos más eficientes y productivos.
    p.mb-5 Estas prácticas abarcan la infraestructura, el personal operativo, los equipos y utensilios, materias primas e insumos que intervengan en las diferentes granjas, así como la producción, procesamiento, embalaje, almacenamiento, transporte, distribución y comercialización en el territorio nacional.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.1.1 Instalaciones físicas

    p.mb-5 Los tipos de riesgos que existen dentro de la producción avícola pueden ser físicos, químicos o biológicos. Por tanto, los programas de bioseguridad en las granjas están enfocados hacia el control de los agentes infecciosos ya que son los mayores productores de riesgos para la materia prima (alimento, aves e insumos), el trabajador, la comunidad y su entorno. Por lo anterior, es que las granjas deben cumplir con las condiciones básicas establecidas para:

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Localización y acceso

    p.mb-5 A continuación, se presenta una correcta disposición de una granja avícola, ver figura 1. 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 1.
        span <em>Ubicación, perímetro y distancias entre los galpones</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-2.svg" data-aos="fade-left")

    p.mb-5 Deben ubicarse en zonas rurales, a cierta distancia de las carreteras más transitadas, estar alejada de otras producciones pecuarias; establecerse un cerco perimetral y un arco sanitario que permita la desinfección de los vehículos que ingresen a la granja. Además, se requiere tener señalizadas las áreas, equipos, instalaciones, prevención de riesgos y seguridad industrial; todo personal que quiera ingresar a la granja debe someterse al protocolo de limpieza y desinfección.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Diseño y construcción de las granjas de las plantas de incubación 

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 2.
        span <em>Galpón avícola</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-3.svg" data-aos="fade-left")

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-4.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-contenido2
            .p-4
              h2.text-center Limpieza y desinfección
              p.text-center Las instalaciones deben permitir la fácil limpieza y desinfección, contar con protección en general contra animales que no pertenecen a la producción y que son considerada plagas como insectos, roedores y otras aves, debe existir andenes perimetrales, estar separados los galpones de otras estructuras como unidades sanitarias, oficinas, vistieres, etc. Además, los galpones deben ofrecer las condiciones idóneas de temperatura, humedad, iluminación, así como la medición de estas. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-5.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-contenido2
            .p-4
              h2.text-center Distancia entre galpones
              p.text-center Un aspecto importante es las distancias entre galpones, los materiales con que se construyen de acuerdo con la disponibilidad de materiales y costos, las dimensiones que deben ajustarse al número de animales, la disposición para uso de la cama y manejo de esta, en las bodegas de almacenamiento para huevos deben ser de materiales de fácil limpieza y desinfección. 

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/img-6.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-contenido2
            .p-4
              h2.text-center Plantas de incubación
              p.text-center En las plantas de incubación las especificaciones son más estrictas en cuanto a materiales de superficie lisa, no absorbente, deben ser resistentes y de suficiente amplitud, que permitan la constante limpieza y desinfección, además de que no permitan la acumulación de suciedad, hongos, plagas u otros contaminantes.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.1.2 Instalaciones sanitarias

    p.mb-5 La disposición de las instalaciones sanitarias debe seguir las siguientes características: 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones7.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-7.svg' alt='AvatarTop')
        p.text-center Es necesario que estén ubicados al ingresar a las granjas para que el personal se dé una ducha y se vista con la indumentaria adecuada. 

      .tarjeta.color-acento-botones8.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-8.svg' alt='AvatarTop')
        p.text-center Los servicios sanitarios deben estar localizados correctamente y ser de fácil acceso con la proporción adecuada con el personal (1 sanitario por cada 15 empleados) con todas las condiciones sanitarias requeridas y divididos de acuerdo con el sexo del personal.

      .tarjeta.color-acento-botones9.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-9.svg' alt='AvatarTop')
        p.text-center Ser totalmente funcionales, es decir, con lavamanos, duchas, vistieres, e inodoros aseados y lejos de las áreas de producción y almacén.

      .tarjeta.color-acento-botones10.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-10.svg' alt='AvatarTop')
        p.text-center Es importante que las tuberías y desagües cuenten con la pendiente y el calibre necesario para permitir la salida efectiva y rápida de los desechos generados en la planta. 

      .tarjeta.color-acento-botones11.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema2/img-11.svg' alt='AvatarTop')
        p.text-center Los caños deben llevar rejillas y trampas para grasas y sólidos que permitan su limpieza. 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.1.3 Personal

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 3.
        span <em>Uniforme del personal en las instalaciones de una granja avícola</em>
      img.d-md-block(src="@/assets/curso/temas/tema2/img-12.svg" data-aos="fade-left")

    .tarjeta.tarjeta.color-acento-contenido2.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            p Los empleados de la avícola deben portar el uniforme adecuado de color claro, limpio, y calzado cerrado de material resistente e impermeable, guantes y gorro de ser necesario. Lo anterior, debe estar diseñado para que no se guarden elementos contaminantes. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-13.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Las manos y uñas deben estar limpias, las uñas cortas sin esmaltes y sin ningún tipo de accesorio.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-14.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p El personal no debe presentar afecciones como hongos, forúnculos, dermatitis, diarrea, vómito, fiebre, gripe, entre otros, que puedan interferir sanitariamente con los procesos.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-15.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p No deben comer, beber o fumar en áreas de proceso y evitar trasladarse innecesariamente de su puesto de trabajo hacia otras zonas. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-16.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Los visitantes deben cumplir también con la indumentaria pertinente para la producción. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-17.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            p Se debe capacitar adecuadamente al personal vinculado con el proceso en su labor específica, ejemplo, en programas de limpieza y desinfección, manejo y aplicación de biológicos, prevención de riesgos, detección de problemas, manejo y acciones o medidas correctivas frente a los mismos, pero además se deben capacitar en temas que hagan mejorar su entorno y su crecimiento personal.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-18.png', alt='Texto que describa la imagen')

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.1.4 Equipos y utensilios

    p Los equipos y utensilios requieren ser fabricados con materiales que sean fáciles de limpiar y desinfectar, pero resistentes a la corrosión, que no estén recubiertos con pinturas o materiales desprendibles. 
    p Aquellos destinados para almacenar desechos es necesario que sean resistentes a la corrosión, de material impermeable, a prueba de fugas, debidamente identificados y de fácil limpieza. 
    p.mb-5 Los equipos deben estar ubicados siguiendo una secuencia lógica del proceso tecnológico y que eviten la contaminación cruzada, además deben contar con los instrumentos y accesorios para medición y registro de variables del proceso (termómetros, higrómetros, termógrafos, pH-metros, etc.).

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-19.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Para conocer más acerca de las BPB (Buenas Prácticas Bioseguras) se recomienda consultar: 
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Las Buenas Prácticas de Bioseguridad en Granjas de Reproducción Aviar.
          li 
            i.lista-ul__vineta
            | Plantas de Incubación, Conceptos Básicos para su Aplicación en Colombia.  
          li  
            i.lista-ul__vineta
            | Ver el video “BIOSEGURIDAD - Aspectos técnicos de bioseguridad en granjas avícolas” y “Bioseguridad y Manejo de Granjas Avícolas”.
        p Materiales que se encuentran disponibles dentro de los complementarios.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.2 Buenas prácticas de manufactura

    p Las Buenas Prácticas de Manufactura BPM son los requisitos en general de higiene en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución de alimentos para consumo humano, cuyo fin es garantizar que los productos en las cada uno de estos procesos cumplan adecuadamente con las condiciones sanitarias para disminuir los riesgos relacionados a la producción.
    p El Instituto Nacional de Vigilancia de Medicamentos y Alimentos - INVIMA es una de las autoridades sanitarias encargadas de vigilar las BPM y emitir conceptos sanitarios al igual que los entes territoriales de salud, mientras instituciones como el SENA están encargados de capacitar y certificar a quienes se instruyen en esta temática. Sin embargo, es el mismo INVIMA quien emite el certificado de BPM a las empresas como tal.
    p.mb-5 En las instituciones procesadoras de alimentos el personal interviene en varios procesos en donde manipula utensilios y equipos, debido a lo cual, se hace necesaria la implementación de los planes de procedimiento y saneamiento que reduzcan los riesgos de productos contaminados, además estos, deben estar bien documentados. Dichos riesgos pueden ser de tres tipos:

    .row.mb-5
      .col-md-6
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Biológico")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img-20.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Estos contaminantes tienen amplia y rápida propagación y pueden aparecer por una mala limpieza de las zonas, el ineficiente uso de agentes desinfectantes o los traslados de una zona a otra, en este tipo de contaminante están incluidos las bacterias, virus y hongos o levaduras.

          .row(numero="2" titulo="Físico")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img-21.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Su presencia se debe a contaminantes traídos por el aire, agua, suelo como huevos, heces fecales, patas y alas de insectos, o elementos extraños como vidrio, madera, plástico, esmalte, uñas, cabellos, entre otros.

          .row(numero="3" titulo="Químico")
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema2/img-22.png', alt='Texto que describa la imagen')
            .col-md-6.mb-4.mb-md-0
              p.text-small Su presentación se debe a la presencia de sustancias o residuos químicos que por accidente se incorporan a los productos alimenticios, estos pueden ser plaguicidas, fertilizantes, desinfectantes, antisépticos, entre otros.

      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema2/img-23.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 Aplicación de la normatividad

    p.mb-5 Respecto a la normatividad las BPM se abarcan aspectos esenciales para tener en cuenta dentro del proceso productivo y que se describirán a continuación para entender cómo se puede aplicar las BPM de una forma más práctica:

    .tarjeta.tarjeta.color-acento-botones10.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Instalaciones y equipos
            p En general deben estar diseñadas en materiales resistentes, impermeables, no porosos, no absorbentes y de fácil acceso para su limpieza y estar distribuidos de una forma secuencial y lógica. Debe haber servicios sanitarios suficientes y suministro de recursos como el agua, entre otros.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-24.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Requisitos higiénicos de fabricación
            p Los proveedores, materias primas, empaques e insumos, deben cumplir con criterios claros de calidad, y de igual manera durante el proceso se es necesario aplicar métodos y controles que garanticen la inocuidad del producto y prevengan su contaminación.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-25.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Personal manipulador de alimentos
            p Debe cumplir estrictas normas de higiene y protección: demostrar un buen estado de salud y acogerse a un plan de capacitación continuo y permanente de mínimo 10 horas anuales.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-26.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Asegurar la calidad e inocuidad del producto
            p Se requieren implementar sistemas de control de calidad con enfoque preventivo y que abarque todas las etapas del proceso, aplicar Planes de Muestreo y herramientas como HACCP.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-27.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Saneamiento
            p Se debe implementar un plan de saneamiento que contenga como mínimo un programa de limpieza y desinfección, un programa de manejo integral de residuos, un programa de prevención de plagas y un programa de abastecimiento de agua potable con sus respectivos protocolos y listas de chequeo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-28.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Almacenamiento, distribución, transporte y comercialización del producto
            p Aplicar adecuados sistemas de rotación y conservación del producto con base a sus características en bodegas o equipos totalmente limpios y con distancias correctas entre piso producto y piso - pared.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-29.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Registro de permiso o notificación sanitaria
            p Los alimentos que sean transformados y se comercialicen empacados deberán tramitar el respectivo registro, permiso o notificación de acuerdo con el riesgo en salud pública contemplado en la Resolución 719 de 2015.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-30.png', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            h4 Para concluir
            p En conclusión, la implementación de las BPM se debe hacer de una manera responsable y organizada que permita su cumplimiento, esto brindará beneficios en el proceso productivo y en la calidad del producto final garantizando la calidad e inocuidad del huevo.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-31.png', alt='Texto que describa la imagen')

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-32.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Para conocer más sobre las BPM se recomienda al aprendiz ver los videos “[TUTORIAL] Buenas Prácticas de Manufacturas | BPM-GMP” y “Buenas Prácticas de Manufactura en La Industria Alimentaria” disponibles en el material complementario. <br><br>
        p.mb-0 Materiales que se encuentran disponibles dentro de los complementarios.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.3 Buenas prácticas de higiene personal

    p A continuación, se describen aquellas buenas prácticas que todo el personal debe acatar para la correcta manipulación del producto. 

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-32.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Para conocer más acerca de las buenas prácticas de higiene personal se le sugiere al aprendiz consultar el “Manual para Manipuladores de Alimentos” y “Buenas Prácticas Higiénicas” que se encuentran disponibles dentro del material complementario.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.4 Procedimientos higienización

    p La higienización es un proceso que tiene como fin limpiar y desinfectar el equipo, superficies de trabajo e instalaciones para evitar su deterioro y la contaminación alimenticia por presencia de factores físicos, químicos y biológicos (Soluciones Gastronómicas, 2020). En los diversos centros de trabajo en los que se realizan auditorías de HACCAP (comedores escolares, residencias de mayores, empresas de alimentación) se suele llevar a cabo un plan de limpieza que se ejecute de manera periódica y en el que se señale los métodos de limpieza, productos y personas encargadas. (Alonso, 2019).
    p.mb-5 Aunque higienización, limpieza y desinfección puedan parecer palabras casi sinónimas, cada una de ellas hace referencia a un proceso distinto.

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-33.svg', alt='Texto que describa la imagen')
          
        h2.text-center Limpieza
        p.text-center Es la eliminación de los restos de alimentos que pueden quedar en las superficies para evitar la multiplicación de los microorganismos. Se trata de eliminar residuos visibles.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-34.svg', alt='Texto que describa la imagen')
          
        h2.text-center Desinfección
        p.text-center Su objetivo es eliminar o destruir los microorganismos presentes en las superficies y utensilios de trabajo. En este caso eliminamos residuos no visibles. (Alonso, 2019).
    
    p.mb-5 Algunos aspectos básicos que se deben tener en cuenta para el proceso de higienización son: la acción mecánica, los agentes químicos, el tiempo, temperatura de exposición y aplicación. Se deben retirar todos los residuos que se encuentren adheridos al equipo, eliminar manualmente las partículas gruesas que se encuentren en la superficie. El uso de agentes químicos (productos de limpieza disponibles en el mercado) u orgánicos. Además, se debe tener en cuenta el tiempo de exposición del producto y la temperatura de aplicación de este (Soluciones Gastronómicas, s.f.). Entre los más usados se encuentran los detergentes y desinfectantes:

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 2.5 Dotación 

    p.mb-5 Como se ha visto anteriormente, la indumentaria para esta etapa está basada en cumplir con las normas de bioseguridad y la de riesgos laborales, se recomienda el uso de gorro o cofia, tapabocas, ropa clara se sugiere que sea antifluido, uso de guantes de nitrilo o látex, calzado antideslizante, cerrado y de color claro, que permita la fácil limpieza y desinfección, o en su defecto botas de caña alta en caucho. 

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema2/img-35.svg" data-aos="fade-left")






</template>

<script>
export default {
  name: 'Tema2',
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
