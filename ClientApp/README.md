# Build an Angular App with Azure DevOps

## Add the resource and deployment the Angular App on local
+ Create an account in the Azure Devops
+ Create an environment in the Azure Devops(Ex: `Test` and add tag name server `internal-hosted-web`)
+ Add the resource in the environment
    - Select `Virtual Machine`
    - Copy a command line(register script) which show in a popup in the Azure Devops after click `Add the resource`
    - Paste the command in the powershell on the local(this my PC)
+ Add library from the MarketPlace
    - qetza.replacetokens(https://marketplace.visualstudio.com/items?itemName=qetza.replacetokens)
+ Create a git repo in the Azure Devops(or a github repo)
+ Create an azure-pipeline.yml for building and deployment the App on IIS in thelocal
    - Trigger the master branch
    - Install Node, NPM, Angular CLI
    - Archive zip and unzip files
    - Create virtual app on the local machine
    - Deploy a virtual app on the local machine

+ Build azure pipeline on the local with `items` virtual app
    - Navigate to `http://localhost/items`

## Development Angular Server
+ Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build Angular
+ Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

+ Build with virtual app(items) on IIS
    - `ng build --base-href /items/`

## Running unit tests
+ Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

+ Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Login with Auth0
+ Using replace token task(`qetza.replacetokens.replacetokens-task.replacetokens@3`) for updating Auth0 tokens such as clientId, domain and redirectUri in main*.js file.
+ Using `- group: Test - Auth0` group variables in the Azure Devops
