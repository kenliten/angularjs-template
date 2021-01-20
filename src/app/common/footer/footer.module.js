import angular from 'angular';

import { FooterComponent } from './footer.component.js';
import './footer.less';

export const FooterModule = angular
    .module('footer', [])
    .component('appFooter', FooterComponent)
    .name;