# High Level Layered Architecture Diagram

This diagram shows at high level the layers and cross-cutting services of the entire architecture.

As a summary, the diagram should look like this:

<img src="https://github.com/usil/diagramator-usil-templates/assets/3322836/f4f3bdeb-271d-4764-aa52-2419c58f3d32" width=500>

Similar diagrams:

- https://static.packt-cdn.com/products/9781838982973/graphics/assets/5a4fd4a9-d664-4351-985d-fc1b37687b68.png

This kind of diagram have the following layers, which allow us to change specific components without compromising the operation of the entire platform:

## Presentation Layer

This layer refers to the type of modern applications called SPA (Single Page Application). These applications are developed in javascript, which once downloaded to the browser does not re-execute invocations to the web server.

This layer receive several name: application layer, frontend layer, client layer, etc

In this layer Angular, Nodejs and Docker are used.

## Business Logic Layer

The heart of an enterprise application is the business logic, which implements the business rules. Developing complex business logic is always challenging. Source: Chapter 5. Designing business logic in a microservice architecture

New layer in which all reusable and atomic functionalities must be consolidated.

In this layer C#(Netcore), Nodejs and Docker are used.

## Data Storage Layer

The data storage layer of enterprise applications deals with persistent data stored in a relational and no relational databases. Source Using JPA in the Persistence Layer

In this layer Oracle, Mysql and Docker are used.

 
## Third Party / External Services

Services used which are not managed by the enterprise like country identification validation service, fraude detection service, paypal, etc.

Do not confuse with saas infrastructure like aws, gcp, digital ocean, etc

## Cross cutting concerns

A list of transversal, shared & common services required by all applications in all layers. More details in Cross Cutting Concerns section

Also known as Platform Services or Common Services.

More details here:

https://docs.firstdecode.com/architecture/cross-cutting-concerns-2/