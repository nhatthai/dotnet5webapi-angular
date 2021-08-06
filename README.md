# .NET5 Core Web API And Angular 12.1.3 with NgRx
Using .Net5 Web API and Angular 12.1.3 with NgRx
+ .NET 5 Core Web API(Net5CoreWebAPI)
    - Auth0
+ Angular 12.1.3(ClientApp)
    - Angular Material
    - NgRx
    - Auth0
+ Auth0: authentication and authorize core webapi and client app
+ Docker, docker-compose and Kubernetes

### Development: Using docker compose in development environment(local)
+ Build web api and client app
    `docker-compose build`

+ Run web api and start client app
    `docker-compose up`

+ Open Swagger UI:
    `http://localhost:5000/swagger/index.html`

+ Open WebAPI:
    `http://localhost:5000/api/weatherforecast`

+ Open Client App:
    `http://localhost:4200`


### Deployment
+ Kubernetes and CI/CD deployment


### Reference
+ [Angular Material Course](https://github.com/angular-university/angular-material-course/tree/2-data-table-finished)
+ [Angular NgRx](https://www.positronx.io/angular-server-side-pagination-with-ngx-pagination-example/)
+ [Auth0 for Authentication and Authorize](https://auth0.com/docs/architecture-scenarios/spa-api)
+ [Deploy ASP.NET 5 WebAPI to Azure Kubernetes Service](https://lemtirisalah.com/deploy-asp-net-5-webapi-to-azure-kubernetes-service-aks-with-https-ingress-controller/)