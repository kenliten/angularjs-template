import angular from 'angular';

import { HeaderComponent } from './header.component.js';
import './header.less';

export const HeaderModule = angular
    .module('header', [])
    .component('appHeader', HeaderComponent)
    .name;