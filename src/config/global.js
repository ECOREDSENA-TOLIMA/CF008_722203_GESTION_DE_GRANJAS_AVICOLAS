export default {
  global: {
    componenteFormativo: 'Recolección y acopio técnico de huevos de gallina',
    descripcionCurso:
      'Las actividades de recolección y acopio de huevos en la producción avícola son de gran importancia puesto que representan el fruto directo de la labor productiva. Debido a esto es que se debe tener en cuenta las buenas prácticas y los protocolos que garanticen que el huevo conservará sus condiciones de calidad hasta ser despachados de la granja.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad Avícola Colombiana',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Buenas prácticas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Las buenas prácticas de bioseguridad en granjas de reproducción aviar y plantas de incubación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Buenas prácticas de manufactura',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Buenas prácticas de higiene personal',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Procedimientos higienización',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Dotación',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Instalaciones e infraestructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Áreas que componen el sistema productivo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Proceso de alistamiento de las áreas para proceso productivo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos aplicados al proceso productivo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Equipos, utensilios y POE',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características técnicas',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Tipos de equipos y utensilios',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Planes Operativos Estandarizados de Sanitización (POES)',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Definición de huevo, formación estructura y composición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ciclo de postura',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fases del ciclo de postura',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Parámetros técnicos de los huevos de gallina y procedimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Procedimientos de manejo',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Temperatura',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Tipos y condiciones técnicas de apilamiento de bandejas',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Modelos de bandejas para acopio de huevos',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Parámetros técnicos de los huevos de gallina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Procedimientos de manejo',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Almacenamiento del huevo',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Condiciones de calidad',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Vida útil del huevo de gallina',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Sistemas de higienización de los huevos de gallina',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo:
              'Criterios técnicos y condiciones de aceptación o rechazo de los huevos de acuerdo con el destino final',
            hash: 't_7_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_08_722203.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '2. Buenas prácticas',
      referencia:
        'BIOSEGURIDAD - Aspectos técnicos de bioseguridad en granjas avícolas [Vídeo]. Italcol 26/05/2020',
      tipo: 'Video',
      link: 'https://youtu.be/gVaEJPruz5k',
    },
    {
      tema: '2. Buenas prácticas',
      referencia:
        'Organización Panamericana de la Salud. Buenas Prácticas Agropecuarias (BPA) y De Manufactura (BPM).',
      tipo: 'Documento de apoyo',
      link:
        'https://www.paho.org/es/documentos/buenas-practicas-agropecuarias-bpa-manufactura-bpm',
    },
    {
      tema: '2. Buenas prácticas',
      referencia:
        'Buenas Prácticas de Manufactura en la Industria Alimentaria. Marthiis Rodríguez 18/04/2020',
      tipo: 'Video',
      link: 'https://youtu.be/kktStLNE41I',
    },
    {
      tema: '2. Buenas prácticas',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura, Organización Panamericana de la Salud, Organización Mundial de la Salud. (2016). Manual para manipuladores de alimentos.',
      tipo: 'Manual',
      link: 'http://www.fao.org/3/i5896s/i5896s.pdf',
    },
    {
      tema: '2. Buenas prácticas',
      referencia:
        'Sistema de recolección de huevos. CIA DIPEQ 02/11/2018 [Vídeo]',
      tipo: 'Video',
      link: 'https://youtu.be/vi2tB6A7_CM',
    },
    {
      tema: '2. Buenas prácticas',
      referencia:
        'Buenas Prácticas de Manufacturas | BPM-GMP. Facility Service 11/02/2019. [Vídeo]',
      tipo: 'Video',
      link: 'https://youtu.be/LfI8-k295XM',
    },
    {
      tema: '4. Equipos y utensilios y POES',
      referencia: 'Big Dutchman. Sistema de recolección de huevos 12/2008',
      tipo: 'Documento',
      link:
        'https://www.interempresas.net/FeriaVirtual/Catalogos_y_documentos/6611/Egg_collection_systems.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alimento de mayor riesgo en salud pública',
      significado:
        'Alimento que en razón de sus características de composición especialmente en sus contenidos de nutrientes, actividad acuosa y pH, favorece el crecimiento microbiano y, por consiguiente, cualquier deficiencia en los procesos de recepción, clasificación, empaque y almacenamiento puede ocasionar trastornos en la salud del consumidor. Tomado de NTC 2003 07 4.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Medidas sanitarias y preventivas que, utilizadas en forma permanente, previenen y evitan la entrada y salida de agentes infecto contagiosos en una granja de reproducción aviar o en una planta de incubación. Tomado de las Buenas Prácticas de Bioseguridad en Granjas de Reproducción Aviar y Plantas de Incubación - ICA',
    },
    {
      termino: 'Buenas Prácticas de Manufactura -BPM',
      significado:
        'Principios básicos y prácticas generales de higiene en la recepción, clasificación, empaque y almacenamiento, de huevo comercial. Tomado de NTC 2003 07 4.',
    },
    {
      termino: 'Cáscara',
      significado:
        'Cubierta exterior del huevo, que sirve para proteger a las sustancias nutritivas contenidas en el mismo. Tomado de NTC1240',
    },
    {
      termino: 'Clara o albumen',
      significado:
        'Solución viscosa (coloidal) que rodea a la yema, la cual se encuentra contenida dentro de las membranas de la cáscara. Tomado de NTC1240.',
    },
    {
      termino: 'Desinfección',
      significado:
        'Tratamiento físico-químico aplicado a las superficies limpias, con el fin de destruir los microorganismos que pueden ocasionar contaminación y reducir sustancialmente el número de otros microorganismos indeseables, sin que dicho tratamiento afecte adversamente las características y calidad del producto u objeto del proceso. Tomado de las Buenas Prácticas de Bioseguridad en Granjas de Reproducción Aviar y Plantas de Incubación - ICA.',
    },
    {
      termino: 'Empaque',
      significado:
        'Recipiente que contiene huevos para su entrega, que los cubre totalmente. Tomado de NTC1240.',
    },
    {
      termino: 'Huevo de gallina',
      significado:
        'Es el producto de figura ovóide, proveniente de la ovoposición de la gallina (Gallus gallus), constituida por la cáscara, membranas, cámara de aire, clara, chalazas, yema y germen. Tomado de NTC1240.',
    },
    {
      termino: 'Huevo fresco',
      significado:
        'Es aquel huevo contenido en su cáscara, que no ha sido sometido a ningún procedimiento de lavado y/o refrigeración, conservación, fertilización y/o incubación y que cumple con lo estipulado en la presente norma. Tomado de NTC1240.',
    },
    {
      termino: 'Huevos Fértiles',
      significado:
        'Huevos destinados a la incubación, que cumplen con los requisitos de peso, tamaño y forma, de acuerdo con la línea genética. Tomado de las Buenas Prácticas de Bioseguridad en Granjas de Reproducción Aviar y Plantas de Incubación - ICA.',
    },
    {
      termino: 'Huevo para consumo humano',
      significado:
        'Producto de la ovulación de las aves de corral que se destina para consumo humano. Tomado de: Resolución 3651.',
    },
    {
      termino: 'Huevo sucio',
      significado:
        'Es el huevo que presenta material adherido a la cáscara (sangre, excremento de aves y/o restos de huevo. Tomado de NTC1240.',
    },
    {
      termino: 'Inocuidad',
      significado:
        'Es la garantía de que los productos se procesen bajo las condiciones higiénicas y sanitarias y no causen daño al consumidor cuando los preparen o consuman. Tomado de NTC 2003 07 4.',
    },
    {
      termino: 'Procedimiento Operacional Estandarizado (POES)',
      significado:
        'Procedimiento que debe ser documentado, implementado y mantenido. Estos procedimientos deben basarse en métodos establecidos o prescritos que se siguen rutinariamente para ejecutar una operación específica. Ellos describen la secuencia específica de los eventos para ejecutar una actividad y aseguran la estandarización de las operaciones durante el proceso, permitiendo establecer límites operativos, monitoreo de procedimientos y acciones correctiva correctivas. Tomado de las Buenas Prácticas de Bioseguridad en Granjas de Reproducción Aviar y Plantas de Incubación - ICA.',
    },
    {
      termino: 'Productor',
      significado:
        'Persona natural o jurídica que representa un plantel avícola de incubación y/o una granja de reproducción, que se dedique a la producción de aves destinadas a la reproducción, comerciales de primera generación y de huevos fértiles para incubación, cumpliendo con todos los procesos técnicos y de bioseguridad a que haya lugar. Tomado de las Buenas Prácticas de Bioseguridad en Granjas de Reproducción Aviar y Plantas de Incubación - IC',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Aptitud para rastrear o seguir la historia, la aplicación o la localización de un producto por medio de identificaciones registradas. Tomado de las Buenas Prácticas de Bioseguridad en Granjas de Reproducción Aviar y Plantas de Incubación - ICA.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alonso Cortes Marian (2019) Higienización, Limpieza y Desinfección: Procesos Distintos Que Buscan Diferentes Objetivos.',
      link:
        'https://www.restauracioncolectiva.com/n/higienizacion-limpieza-y-desinfeccion-procesos-distintos-con-diferentes-objetivos',
    },
    {
      referencia:
        'Anzola Héctor, Pedraza Álvaro, Lezzaca Manuel (2006) Las Buenas Prácticas de Bioseguridad en Granjas de Reproducción Aviar y Plantas de Incubación, Conceptos Básicos para su Aplicación en Colombia.',
      link:
        'https://www.ica.gov.co/getattachment/af9943f9-87a5-4897-9962-2d414fa0fdbf/Publicacion-10.aspx#:~:text=Un%20buen%20sistema%20de%20Bioseguridad,su%20potencial%20gen%C3%A9tico%20y%20zoot%C3%A9cnico.',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia - FENAVI (2019) Aspectos Productivos y Administrativos en la Industria Avícola',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/ASPECTOS-PRODUCTIVOS-Y-ADMINISTRATIVOS-EN-LA-INDUSTRIA-AV%C3%8DCOLA.pdf',
    },
    {
      referencia:
        'Higuita Camilo Alberto y González Henry Helí (2018) Normatividad de los empaques, embalajes y etiquetados (EEE) para las exportaciones colombianas de alimentos procesados a Estados Unidos. Revista Espacios.',
      link: 'https://www.revistaespacios.com/a18v39n24/a18v39n24p08.pdf',
    },
    {
      referencia:
        'Ayuda Autocontrol Establecimientos de Comidas Preparadas. Buenas Prácticas Higiénicas.',
      link:
        'https://tematico8.asturias.es/export/sites/default/consumo/seguridadAlimentaria/seguridad-alimentaria-documentos/BUENAS_PRxCTICAS_HIGIxNICAS.pdf',
    },
    {
      referencia:
        'Duarte de Oliveira Daniela (2011) Manejo de la producción de huevos de calidad. El Sitio Avícola.',
      link:
        'https://www.elsitioavicola.com/articles/1992/manejo-de-la-produccian-de-huevos-de-calidad/',
    },
    {
      referencia: 'Instituto de Estudios del Huevo (s.f.)',
      link: 'https://www.institutohuevo.com',
    },
    {
      referencia:
        'Mercadé Aleix (2010) El Huevo: Formación, Estructura y Composición. Transformando el Infierno.',
      link:
        'https://transformandoelinfierno.com/2010/09/22/el-huevo-formacion-estructura-y-composicion/',
    },
    {
      referencia:
        'Italcol (2020). BIOSEGURIDAD - Aspectos técnicos de bioseguridad en granjas avícolas [Video]. YouTube',
      link: 'https://www.youtube.com/watch?v=gVaEJPruz5k',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura y Organización Panamericana de la Salud / Organización Mundial de la Salud (2016) Manual para Manipuladores de Alimentos.',
      link: 'http://www.fao.org/3/i5896s/i5896s.pdf',
    },
    {
      referencia:
        'TvAgro (2016) Bioseguridad y Manejo de Granjas Avícolas - TvAgro por Juan Gonzalo Ángel [Video]. YouTube',
      link: 'https://www.youtube.com/watch?v=vF26Kgpa2EI',
    },
    {
      referencia:
        'Marthiis Rodríguez (2020) Buenas Prácticas de Manufactura en la Industria Alimentaria. [Video]. YouTube',
      link: 'https://www.youtube.com/watch?v=kktStLNE41I',
    },
    {
      referencia:
        'Facility Service (2019) [TUTORIAL] Buenas Prácticas de Manufacturas | BPM-GMP [Video]. YouTube',
      link: 'https://www.youtube.com/watch?v=LfI8-k295XM',
    },
    {
      referencia: 'Cia d Aipq (2018) Sistema de Recolección de Huevos',
      link: 'https://youtu.be/vi2tB6A7_CM?list=TLGGXNfKq-ItKowxMzA3MjAyMQ',
    },
    {
      referencia:
        'Ministerio de Ambiente, Vivienda y Desarrollo Territorial (2005) Por el cual se modifica el Decreto 1713 de 2002 sobre disposición final de residuos sólidos y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5542',
    },
    {
      referencia:
        'Red de información y comunicación del sector Agropecuario AGRONET (2013) Boletín mensual Insumos y Factores Asociados a la Producción Agropecuaria',
      link:
        'http://bibliotecadigital.agronet.gov.co/bitstream/11348/4322/2/insumos_factores_de_produccion_oct_2013.pdf',
    },
    {
      referencia:
        'Soluciones Gastronómicas (2020) Proceso de higienización de una cocina industrial.',
      link:
        'https://solucionesgastronomicas.com/proceso-de-higienizacion-de-una-cocina-industrial/',
    },
    {
      referencia:
        'Instituto de Estudios del Huevo (2009) El Gran libro del Huevo',
      link:
        'http://institutohuevo.com/wp-content/uploads/2017/07/EL-GRAN-LIBRO-DEL-HUEVO.pdf',
    },
    {
      referencia:
        'Instituto de Estudios del Huevo (2006) Seguridad Alimentaria en Huevos y ovoproductos',
      link:
        'https://www.institutohuevo.com/?s=Seguridad+Alimentaria+en+Huevos+y+ovoproducto',
    },
    {
      referencia:
        'Álvarez Natalia, Gómez Teresa, Ramos Jesús y Jiménez Alicia (2007) Guía De Normas De Higiene Para El Sector De Huevos Y Derivados',
      link: 'http://coli.usal.es/web/Guias/pdf/GMH_sector_huevos_derivados.pdf',
    },
    {
      referencia:
        'López Miriam, Reyes Betzabet, Franco Bertha, Matías Ramón, y Juarez Senén (2014) Inocuidad en el proceso de lavado de huevo de una empresa Avícola',
      link:
        'https://www.ecorfan.org/handbooks/Ciencias%20de%20la%20Ingenieria%20y%20Tecnologia%20T-VI/ARTICULO%2013.pdf',
    },
    {
      referencia:
        'Palomino Tania (2012) Desarrollo E Implementación Del Plan De Calidad Para Huevo Comercial En Incubadora Santander S.A Bodega Bellavista',
      link:
        'https://repository.unad.edu.co/bitstream/handle/10596/1527/Tania_Palomino__plan_de_calidad_producto.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Malekian Fatemeh et al. (2011) Buenas prácticas de higiene personal ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
