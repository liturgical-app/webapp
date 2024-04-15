import { APP_URI } from '../app/app.uri';

export const environment = {
  logLevel: 'ERROR',
  services: {
    calendar: {
      baseUrl: 'https://calendar.liturgical.app',
      uri: APP_URI.calendar
    }
  }
};
