// This file was automatically added by edgio init.
// You should commit this file to source control.
import { Router } from '@edgio/core';
import { reactCRARoutes } from '@edgio/react-cra';

const defaultFeatures = {
  caching: {
    max_age: '1d',
    stale_while_revalidate: '1d',
    service_worker_max_age: '1h',
  },
};

export default new Router().match('/(.*)', defaultFeatures).use(reactCRARoutes);
