---
id: landing_01
title: Landing Page
description: Información de landing
slug: /landing-info
---

# Landing Page

El proyecto landing page está conformado por 4 proyectos los cuales son: 
* Maxpoint Azure
* Landing Portal cliente - https://github.com/GrupoKFC/landingPageLOPDP/tree/MXP_MNT_LANDINGPAGE_PREGUNTAS
* Api Master data clientes - https://github.com/GrupoKFC/APIMasterDataClientes/tree/MXP_MNT_LANDINGPAGE_PREGUNTAS
* Landing Backoffic api - https://github.com/GrupoKFC/lopdp_backoffice-api
* Landing Backoffice Front - https://github.com/GrupoKFC/lopdp_backoffice-front/tree/MXP_MNT_LANDINGPAGE_PREGUNTAS

De igual manera Landing Trabaja con una base de datos mongo a la cual se puede acceder con el siguiente link: 
mongodb+srv://eclopdp:b9kTeRtpXJ9APr01@ec-lopdp.zg1jr.mongodb.net/?retryWrites=true&w=majority
BASE: backoffice_mdm_ec_dev

## Levantar ambiente Backoffice

Para levantar el ambiente landing backoffice se debe levantar el proyecto Landing Backoffice api y el proyecto Landing Backoffice Front.

### Levantar Backend de Landing Backoffice

En el proyecto Landing Backoffice se debe revisar que el archivo de configuraciones .env esté apuntando a la base de datos de prueba que tiene una estructura similar a la siguiente: 

```jsx title=".env"

#AUTH JWT
JWT_SECRET="clave_super_secreta"
JWT_SECRET_EXPIRE_TIME="30m"

#DATA BASE CONEXION
MONGODB_URI=mongodb+srv://eclopdp:b9kTeRtpXJ9APr01@ec-lopdp.zg1jr.mongodb.net/?retryWrites=true&w=majority
DATABASE=backoffice_mdm_ec_dev

#ENDPOINTS
COMPANIES=empresa
CHAIN=cadena
RESTAURANT=restaurante
BENEFITS=beneficio
USERS=users
ROLES=roles
EMAIL_CONFIG=email_config
QUESTION=preguntas

#ENCRIPTADO
SECRET_CRYPT=L4nd1ngP4g3

#BLOB STORAGE
VUE_APP_AZURE_CONNECT="DefaultEndpointsProtocol=https;AccountName=samercadito;AccountKey=Nx9fUpicCjiQ+hzgrkqGpO6oP8tzc6CqgMs3v2Pyo8FkDFrRKvFDh/x4V4OEBmQNb0Pj8SBRl4MoBqBvUVZqQA==;EndpointSuffix=core.windows.net"
VUE_APP_AZURE_ACCOUNT=samercadito
VUE_APP_AZURE_CONTAINER_LOGO=imagenescadenas
VUE_APP_AZURE_CONTAINER_IMG=resources-api-cliente

```
Para levantar el proyecto backend se usa el siguiente comando: npm run dev

 ![Configuraciones](img/next.png) 



### Levantar Frontend de Landing Backoffice

Una vez que se ha configurado el backend del proyecto landing Backoffice se debe configurar el archivo .env del proyecto frontend de la siguiente manera.

En la variable **VUE_APP_API_URL** se debe especificar la url del proyecto backend.

En la variable **VUE_APP_API_MDM_URL** se debe especificar la url de la aplicación master data.

```jsx title=".env"

VUE_APP_API_URL='http://localhost:3000'
# VUE_APP_API_URL='http://4.152.155.247:3000'

VUE_APP_API_MDM_URL='http://192.168.101.54:7426'
VUE_APP_API_MDM_USER=f2ffebd1-77eb-49d2-a623-99824b1f485d
VUE_APP_API_MDM_PASS=c0f2afed-edc3-4cec-8af0-ef58fcb50062

VUE_APP_AZURE_ACCOUNT=samercadito
VUE_APP_AZURE_SASTOKEN=Nx9fUpicCjiQ+hzgrkqGpO6oP8tzc6CqgMs3v2Pyo8FkDFrRKvFDh/x4V4OEBmQNb0Pj8SBRl4MoBqBvUVZqQA==

```

Para levantar el proyecto Frontend se usa el siguiente comando: npm run serve

Usuario: grupokfc   
Contraseña: clave

 ![Configuraciones](img/landingbackoffice.png) 


### Levantar Frontend de Landing Clientes

Para levantar en landing front de clientes se debe configurar el archivo .env 

En la variable **VUE_APP_API_URL** poner la ip de masterdata

```jsx title=".env"

VUE_APP_I18N_LOCALE=es
VUE_APP_I18N_FALLBACK_LOCALE=es

################################# URL BACK LANDIND ######################################

VUE_APP_API_URL=http://192.168.101.54:7426
VUE_APP_API_USER=f2ffebd1-77eb-49d2-a623-99824b1f485d
VUE_APP_API_PASS=c0f2afed-edc3-4cec-8af0-ef58fcb50062
VUE_APP_API_TRY=3
VUE_APP_API_APP="LandingPage"

#################################  CONFIG LANDIND  ######################################

VUE_APP_COUNTRY=ECU
VUE_APP_SECRET_CRYPT=L4nd1ngP4g3

VUE_APP_CAPTCHA_SEC=10

```

Para levantar el ambiente se usa el comando: npm run serve.

En el URL colocar al final la cadena que desea visualizar: http://localhost:8080/#/kfc

 ![Configuraciones](img/landingcliente.png) 


### Levantar Master Data

Para levantar master data se necesita dockerizar el proyecto con los siguiente contenedores: 
1 Contenedor para las colas 
2 Contenedor que crea las colas 
3 Contenedor para masterdata

#### 1 Contenedor para las colas

Para levantar un contenedor donde se procesaran las colas se debe ejecutar el siguiente comando en el servidor donde se está dockerizando la aplicación: 

```jsx title="Comando para dockerizar las colas"
docker run -p 10000:10000 -p 10001:10001 -p 10002:10002 \mcr.microsoft.com/azure-storage/azurite

```

#### 2 Contenedor para crear las colas

Se debe dockerizar el proyecto de colas. Una vez que el proyecto se ha dockerizado se debe ingrear al url con la siguiente estructura ip_servidor:puerto/manage_queues.php como se muestra en el siguiente ejemplo: http://192.168.101.54:9696/manage_queues.php

Para crear las colas se debe modificar el archivo **manage_queues.php**. Se debe establecer en la variable **$queueName** el nombre de las colas a crear para este caso se deben crear las colas de: revocatoria, email, email-admin, telegram.

```jsx title="Comando para dockerizar las colas"
<?php

require 'vendor/autoload.php';

use MicrosoftAzure\Storage\Queue\QueueRestProxy;
use MicrosoftAzure\Storage\Common\Exceptions\ServiceException;

$accountName = "devstoreaccount1";
$accountKey = "Eby8vdM02xNoGVdylHTyCkWR1LPFLAzqvEtyfnhfdoLwazI1F/nqakOrZc3sTgdaCHczexXxv8qQHL6l3b0Vb==";
$blobEndpoint = "http://192.168.101.54:10000/{$accountName}";
$queueEndpoint = "http://192.168.101.54:10001/{$accountName}";
$tableEndpoint = "http://192.168.101.54:10002/{$accountName}";

// $connectionString = "DefaultEndpointsProtocol=http;AccountName={$accountName};AccountKey={$accountKey};BlobEndpoint={$blobEndpoint};QueueEndpoint={$queueEndpoint};TableEndpoint={$tableEndpoint};";
$connectionString = "AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;DefaultEndpointsProtocol=http;BlobEndpoint=http://192.168.101.54:10000/devstoreaccount1;QueueEndpoint=http://192.168.101.54:10001/devstoreaccount1;TableEndpoint=http://192.168.101.54:10002/devstoreaccount1;";



$queueClient = QueueRestProxy::createQueueService($connectionString);

// // Crear una cola
$queueName = "email";
// $queueName = "revocatoria";
// $queueName = "email-admin";

try {
    $queueClient->createQueue($queueName);
    echo "Cola '{$queueName}' creada exitosamente.\n";

    $message = "hola";
    $queueClient->createMessage($queueName, $message);
    echo "Mensajeeeeeee: {$message}\n";

    // Leer mensajes de la cola
    $listMessagesResult = $queueClient->listMessages($queueName);
    $messages = $listMessagesResult->getQueueMessages();
    foreach ($messages as $msg) {
        echo "Mensaje recibido: " . $msg->getMessageText() . "\n";
        // $queueClient->deleteMessage($queueName, $msg->getMessageId(), $msg->getPopReceipt());
    }
} catch (ServiceException $e) {
    $code = $e->getCode();
    $error_message = $e->getMessage();
    echo "errror: {$code} - {$error_message}\n";
}
?>

```

Cada vez que se haga una modificación en la variable $queueName se debe recargar la página  http://192.168.101.54:9696/manage_queues.php para que en cada recarga se cree la cola con el nombre que se establece en la variable $queueName. Repetir el proceso por cada cola. 


#### 3 Contenedor para masterdata

Para ejecutar el contenedor de master data se debe tener el siguiente Dockerfile

```jsx title="Dockerfile"

#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ProteccionDatosClientesEC.csproj", "."]
RUN dotnet restore "./ProteccionDatosClientesEC.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "./ProteccionDatosClientesEC.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "./ProteccionDatosClientesEC.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProteccionDatosClientesEC.dll"]
```

Ejecutar el siguiente comando para iniciar el docker: 

```jsx title="Comando para iniciarl el docker"
docker run -d -p puertoAccesoPublico:80 -p 443:443 --name nombreImagen nombreImagen
```

Se debe validar que el ambiente esté apuntando a pruebas.

Para lo cual se valida el archivo appsettings.json que tenga los siguientes datos: 

```jsx title="Comando para iniciarl el docker"
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "JwtSettings": {
    "SecretKey": "ESTO ES UN EJEMPLO DE SECRET KEY PARA LA GENERACION DE TOKENS CON JWT Y C#",
    "Issuer": "https://localhost:7106/",
    "DaysForExpire": 30
  },
  "ClustersMongo": {
    "clusterBackOffice": {
      "stringConexion": "mongodb+srv://eclopdp:b9kTeRtpXJ9APr01@ec-lopdp.zg1jr.mongodb.net/?retryWrites=true&w=majority",
      "nameBD": "backoffice_mdm_ec_dev"
    },
    "clusterAnalitica": {
      "stringConexion": "mongodb+srv://ecdesarrollo:uKKFyxOjKXIQOQ3V@ec-mdm.r1c5y.mongodb.net/?retryWrites=true&w=majority"
    }
  },
  "SettingRevocatoria": {
    "queue": {
      "connection": "AccountName=devstoreaccount1;AccountKey=Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw==;DefaultEndpointsProtocol=http;BlobEndpoint=http://192.168.101.54:10000/devstoreaccount1;QueueEndpoint=http://192.168.101.54:10001/devstoreaccount1;TableEndpoint=http://192.168.101.54:10002/devstoreaccount1;",
      "queueRevocatoria": "revocatoria",
      "queueEmail": "email",
      "queueEmailAdmin": "email-admin",
      "queueTelegram": "telegram"
    },
    "timeInterval": {
      "queueRevocatoria": 1,
      "queueRevocatoriaError": 5,
      "queueEmail": 1,
      "queueEmailAdmin": 1
    }
  }
}
```
