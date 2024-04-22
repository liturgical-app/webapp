import { APP_URI } from '../app/app.uri';

export const environment = {
  logLevel: 'ERROR',
  services: {
    calendar: {
      baseUrl: 'http://localhost:3000',
      uri: APP_URI.calendar
    }
  }
};
