---
id: doc4
title: Caso de prueba en Azure Devops
description: En esta página se encuentra la documentación sobre como hacer un caso de prueba.
slug: /Caso-de-prueba-en-Azure-Devops-doc4
---
## Introduccion:¿Qué es Azure Test Plan?

Azure Test Plan es una herramienta clave para equipos DevOps, facilitando la gestión de pruebas y asegurando la calidad del software en cada etapa del desarrollo.

![Descripción de la Imagen](./img/25-1536x715.png)  

## A. Como generar Test Plans (Planes de prueba)

1.Inicie sesión en el proyecto de Azure DevOps y seleccione Planes de prueba de planes> de prueba.

![Descripción de la Imagen](./img/open-test-plans.png)  

2.Seleccione + Nuevo plan de prueba.

![Descripción de la Imagen](./img/new-test-plan.png)  

3.Escriba un nombre para el plan de prueba, compruebe que la ruta de acceso del área y la iteración se han establecido correctamente y, a continuación, seleccione Crear.

![Descripción de la Imagen](./img/test-plan-name-path-iteration.png)  

## B. Como generar Test suites (Conjuntos de pruebas)

1.Navega a Planes de prueba:
Una vez dentro de tu proyecto en Azure DevOps, dirígete a la sección de "Planes de prueba" y ve al que creaste.

3.Crea un nuevo conjunto de pruebas:
Dentro del plan de prueba, crea un nuevo conjunto de pruebas. Este conjunto será tu suite.

![Descripción de la Imagen](./img/test%20suites.PNG)  

## C. Como generar test cases en el devops (Casos de prueba)

1.Agrega casos de prueba:
Puedes agregar casos de prueba existentes a la suite o crear nuevos directamente desde la suite.

![Descripción de la Imagen](./img/tests%20cases.PNG)  

Dentro de cada caso de prueba, especifique un conjunto de pasos de prueba con sus resultados esperados.

![Descripción de la Imagen](./img/cases%202.PNG)  

## D. Ejecución de pruebas
1.En el portal web, abra el proyecto y seleccione Planes de prueba Planes>de prueba.
2.Seleccione Mina o Todo, o use Filtrar por título para buscar el plan de prueba y seleccionarlo. Seleccione la pestaña Ejecutar .

![Descripción de la Imagen](./img/1.png)  

3.Seleccione una o varias pruebas o todas las pruebas de un conjunto de pruebas. A continuación, seleccione Ejecutar.

![Descripción de la Imagen](./img/2.png)  

4.Inicie la aplicación que desea probar.

![Descripción de la Imagen](./img/3.png)  

5.Marque cada paso de prueba como superado o con errores en función de los resultados esperados.

![Descripción de la Imagen](./img/4.png)  

## E. Crear o agregar un error
1.Cuando se produce un error en un paso, escriba un comentario y seleccione Crear error.

![Descripción de la Imagen](./img/5.png)  

2.En el cuadro de diálogo Nuevo error , escriba un nombre para el error.

![Descripción de la Imagen](./img/6.png)  

3.Puede asignar el error, escribir comentarios o vincular a otros problemas. Seleccione Guardar y cerrar cuando haya terminado. El caso de prueba está vinculado al error que creó.

![Descripción de la Imagen](./img/7.png)  

## F. Guardar los resultados, cerrar la sesión y revisar los resultados
Después de completar las pruebas, guarde los resultados, cierre la sesión y revise los resultados de las pruebas.

1.Cuando haya ejecutado todas las pruebas, seleccione Guardar y cerrar. Todos los resultados de la prueba se almacenan en Azure Test Plans.

2.Vea el estado de las pruebas del conjunto de pruebas. Verá los resultados más recientes de cada prueba.

![Descripción de la Imagen](./img/8.png)  




