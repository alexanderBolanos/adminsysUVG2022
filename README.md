# adminsysUVG2022
Proyecto Demo para el curso Administracion y Mantenimiento de Sistemas. UVG 2022

---
# Comandos importantes:

## Docker

#### Build the Image:
> docker build -t adminsys/demoapp:2022.1 .
donde . es el path al dockerfile

#### Run the container:
docker run -p 8080:8080 adminsys/demoapp:2022.1
