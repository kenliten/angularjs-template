import angular from 'angular';
import { HeaderModule } from './header/header.module.js';
import { FooterModule } from './footer/footer.module.js';

export const CommonModule = angular
    .module('common', [
        HeaderModule,
        FooterModule,
    ])
    .name;