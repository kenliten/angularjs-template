import angular from 'angular';
import ngRoute from 'angular-route';

import { AppConfig } from './app.config';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import './app.less';

import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

export const AppModule = angular
  .module('app', [
      ngRoute,
      CommonModule,
      ComponentsModule
  ])
  .component('app', AppComponent)
  .service('AppService', AppService)
  .config(['$routeProvider', AppConfig])
  .name;