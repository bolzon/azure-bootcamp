
# GLOBAL AZURE BOOTCAMP

Esta apresentação está dividida nas partes abaixo:

- [Tipos de Serviços Cloud](#tipos-de-serviços-cloud)
- [Azure App Service](#azure-app-service)
- [Serverless (worriless)](#serverless-worriless)
- [Azure Function](#azure-function)
- [Demo](#demo)

## Tipos de Serviços Cloud

IaaS, PaaS, SaaS, CaaS ou FaaS?

### **IaaS** - Infrastructure as a Service

Infraestrutura básica como máquinas virtuais, rede, storage etc.
O usuário quem cria e gerencia todos os detalhes.

_Exemplos: Azure (VMs), AWS (EC2), Google Cloud Platform (CE)_

### **PaaS** - Platform as a Service

Plataforma com infraestrutura gerenciada pelo fornecedor.
Usuário só se preocupa em desenvolver e gerenciar suas aplicações.

_Exemplos: Azure App Service, AWS (Beanstalk), Google App Engine, Heroku, CloudFoundry_

### **SaaS** - Software as a Service

Software oferecido sob demanda, mas desenvolvido e mantido por quem o fornece.
Usuários finais apenas o utilizam.

_Exemplos: Microsoft Office 365, Gmail, SAP, Microsiga, Salesforce_

### **CaaS** - Container as a Service

Infraestrutura de virtualização baseada em containers.
Container engines, recursos computacionais e orchestration são os serviços oferecidos ao usuário.

_Exemplos: Azure (ACS), AWS (ECS), Google Kubernetes Engine (GKE)_

### **FaaS** - Function as a Service

Plataforma pronta e configurada com arquitetura serverless focada em funcionalidades isoladas baseadas em eventos.
Usuário desenvolve uma funcionalidade e só se preocupa em configurar como e quando rodá-la.

_Exemplos: Azure Functions, AWS (Lambda), Google Cloud Functions_

## Abordagem

De forma breve e objetiva, abordaremos aqui **PaaS** (Azure App Service) e **FaaS** (Azure Function).

## Azure App Service

O Azure App Service oferece diversas estruturas existentes em Windows e Linux para se ter produtividade na criação de APIs, aplicações Mobile e Web em diversas linguagens (.NET, .NET Core, NodeJS, Java, Ruby, Python e PHP) sem se preocupar com gerenciamento de infraestrutura ou balanceamento de carga.

## Serverless (worriless)

Serverless é um modelo ideal para quem tem a necessidade, mas não necessariamente o tempo.

Com um ambiente totalmente gerenciado, o desenvolvedor tem foco total na lógica da solução sem se preocupar com infraestrutura, ambiente etc.

- Arquitetura orientada a eventos
- Infraestrutura gerenciada pelo provedor de cloud
- Sem preocupações com ambiente e provisionamento (worriless)
- Simples e produtivo: qual função deve executar e como/quando?

### Pros

- **Ágil.** Infraestrutura gerenciada pronta para rodar.
- **Escalável.** Ambiente preparado para lidar com carga.
- **Barato.** Paga-se apenas pelo que se consome/executa.
- **Simples.** Facilidade de deploy e execução.

### Cons

- **Exposição.** Código vai à nuvem para rodar.
- **Stateless.** Chamadas às funções não guardam estado.
- **Debug.** Como depurar a solução localmente?

## Azure Function

Multi-linguagem / multi-plataforma

Facilmente adaptável com Azure Cosmos DB, Storage e outros serviços Azure.

O que posso fazer com Functions?

Timer-based processing
Azure service event processing
SaaS event processing
Serverless web application architecture
Serverless mobile back ends
Real-time stream processing
Real-time bot messaging

Quais triggers?

Scheduled
Storage queue messages
Generic webhook
GitHub webhook
Adding message to Azure Storage queue
Storing data on

## Demo

Demo comes here.

### Angular CLI

https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-apt?view=azure-cli-latest