// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const packageJson = require('../../package.json');

export const environment = {
  production: false,
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    ngrx: packageJson.dependencies['@ngrx/store'],
    material: packageJson.dependencies['@angular/material'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli']
  },
  firebase: {
    apiKey: 'AIzaSyBM5UCP8nKL8NMrNIsBznm1qBow26xBF-c',
    authDomain: 'personalportfolio-1ca58.firebaseapp.com',
    databaseURL: 'https://personalportfolio-1ca58.firebaseio.com',
    projectId: 'personalportfolio-1ca58',
    storageBucket: 'personalportfolio-1ca58.appspot.com',
    messagingSenderId: '350713099700'
  }
};
