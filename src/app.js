import { AppModule } from './app/app.module';

export function init(){
  const ngView = document.createElement('ng-view');
  const header = document.createElement('app-header');
  const footer = document.createElement('app-footer');
  const container = document.createElement('div');

  container.appendChild(header);
  container.appendChild(ngView);
  container.appendChild(footer);

  document.body.appendChild(container);
}

init();