# Angular 14 with Micro FE Module Federation Webpack
==============================================

### Steps to Create a Micro FE Module Federation Project with Angular 14 and Webpack

1. **Create a new Angular 14 project**: `npx @angular/cli@14 new my-app --no-create-application && cd my-app && npm install typescript@4.8.2 -D`
3. **Install required dependencies**: `npm i webpack webpack-cli concurrently --save-dev`
4. **Create a new host application**: `npx ng g application your-host-app --routing --style=scss`
5. **Create a new remote application**: `npx ng g application your-remote-app --routing --style=scss`
6. **Add Module Federation to the host application**: `npx ng add @angular-architects/module-federation@14 --project your-host-app --port 4200`
7. **Add Module Federation to the remote application**: `npx ng add @angular-architects/module-federation@14 --project your-remote-app --port 4201` **Note:** The port on each app must be different.
### Configure `package.json` Scripts

Add the following scripts to the `package.json` file:
   
```json
{
  "scripts": {
    "ng": "ng",
    "host": "ng serve host-app --configuration development --port 4200",
    "mfe": "ng serve mfe-app --configuration development --port 4201",
    "mfe2": "ng serve mfe-app --configuration development --port 4202",
    "start": "concurrently \"npm run host\" \"npm run mfe\" \"npm run mfe2\"",
    "build:host": "ng build host-app",
    "build:mfe": "ng build mfe-app",
    "build:mfe2": "ng build mfe2-app",
    "build": "concurrently \"npm run build:host\" \"npm run build:mfe\" \"npm run build:mfe2\"",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "run:all": "node node_modules/@angular-architects/module-federation/src/server/mf-dev-server.js"
  }
}
```

8. Start the application: ```npm start```
9. To view the complete code, visit my GitHub repository: [mfe-angular-14](https://github.com/farhan72/mfe-angular-14).

Thanks for following along!