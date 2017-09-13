const packageJson = require('../../package.json');

export const environment = {
  production: true,
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
