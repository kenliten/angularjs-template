import { AppModule } from './app/app.module';

function initialize() {
  const body = document.body;
  const appHolder = document.createElement('app-root');
  body.appendChild(appHolder);
}

initialize();