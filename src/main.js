import { AppModule } from './app/app.module';
import './styles.scss';

function initialize() {
  const appHolder = document.createElement('app-root');
  document.body.appendChild(appHolder);
  return AppModule;
}

initialize();