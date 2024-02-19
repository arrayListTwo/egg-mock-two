'use strict';

const Service = require('egg').Service;
const NodeCache = require('node-cache');
const cache = new NodeCache();

class CacheService extends Service {
  get(key) {
    return cache.get(key);
  }

  set(key, value, ttl) {
    cache.set(key, value, ttl || 7200);
  }

}

module.exports = CacheService;
