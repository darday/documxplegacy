---
id: az2
title: Configurar Botones en Azure
description: En esta página se encuentra la documentación para configurar botones en azure
slug: /configurar-botones
---

Una de las cosas que se debe tomar en cuenta es que Maxpoint Azure es el maxpoint centralizado en donde se hacen cambios que posteriormente serán replicados en las tiendas. Todos los cambios que se hagan como en este caso la configuración de botones se guardará en una tabla llamada Updated_Store. 
Los registros que se guarden en esta tabla son los que posteriormente se tansmitirán en las tiendas. 

En los ambientes QA al no tener la funcionalidad de distribución que es la que se encarga de transmitir la información de Maxpoint Azure a Maxpoint Tienda lo que se procede hacer es tomar los registros de la tabla Updated_Store y ejecutar los registros en cada una de las tiendas. 