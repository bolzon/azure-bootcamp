
# GLOBAL AZURE BOOTCAMP

## Instalação do Azure CLI

https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-apt?view=azure-cli-latest

## IaaS, PaaS, SaaS, CaaS, FaaS

### **IaaS** - Infrastructure as a Service
Infraestrutura básica como máquinas virtuais, rede, storage etc.
O usuário quem cria e gerencia todos os detalhes.
Exemplos: Azure (VMs), AWS (EC2), Google Cloud Platform (CE)

### **PaaS** - Platform as a Service
Plataforma com infraestrutura gerenciada pelo fornecedor.
Usuário só se preocupa em desenvolver e gerenciar suas aplicações.
Exemplos: Azure PaaS, AWS (Beanstalk), Google App Engine, Heroku, CloudFoundry

### **SaaS** - Software as a Service
Software oferecido sob demanda, mas desenvolvido e mantido por quem o fornece.
Usuários finais apenas o utilizam.
Exemplos: Microsoft Office 365, Gmail, SAP, Microsiga, Salesforce

### **CaaS** - Container as a Service
Infraestrutura de virtualização baseada em containers.
Container engines, recursos computacionais e orchestration são os serviços oferecidos ao usuário.
Exemplos: Azure (ACS), AWS (ECS), Google Kubernetes Engine (GKE)

### **FaaS** - Function as a Service
Plataforma pronta e configurada com arquitetura serverless focada em funcionalidades isoladas baseadas em eventos.
Usuário desenvolve uma funcionalidade e só se preocupa em configurar como e quando rodá-la.
Exemplos: Azure Functions, AWS (Lambda), Google Cloud Functions

# Serverless

Arquitetura orientada a eventos
Infra gerenciada pelo provedor de cloud
Sem preocupações com estrutura, dimensão de processamento, provisionamento etc.
Agilidade no desenvolvimento: qual função deve executar e como/quando?
Ganho de tempo para focar no essencial sem ter que se preocupar com o gerenciamento de servidores etc.

Vantagens
- Serviço totalmente gerenciado
- Flexibilidade em escalabilidade
- Paga-se apenas pelo que se consome

# Worriless

Azure Functions

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
