import { createLogger } from './index';

it('should', () => {
  const logger = createLogger();
  logger.log('User logged in');
  logger.warn('User try to restricted page');
  logger.log('User logged out');
  logger.error('Unexpected error on the site');
  expect(logger.getRecords()).toEqual([
    { message: 'Unexpected error on the site', type: 'error', dateTime: Date },
    { message: 'User logged out', type: 'log', dateTime: Date },
    { message: 'User try to restricted page', type: 'warn', dateTime: Date },
    { message: 'User logged in', type: 'log', dateTime: Date },
  ]);
  expect(logger.getRecords('log')).toEqual([
    { message: 'User logged out', type: 'log', dateTime: Date },
    { message: 'User logged in', type: 'log', dateTime: Date },
  ]);
  expect(logger.getRecords('error')).toEqual([
    { message: 'Unexpected error on the site', type: 'error', dateTime: Date },
  ]);
  expect(logger.getRecords('error')).toEqual([
    { message: 'User try to restricted page', type: 'warn', dateTime: Date },
  ]);
});
