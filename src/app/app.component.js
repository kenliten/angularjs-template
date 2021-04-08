import template from './app.component.html';
import './app.component.scss';

class AppController {
  constructor() {
    this.name = 'App';
  }
}

export const AppComponent = {
  template,
  controller: AppController
}