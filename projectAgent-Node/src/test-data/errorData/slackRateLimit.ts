export const RATE_LIMIT_ERROR = {
  code: 'ERR_BAD_REQUEST',
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: ['xhr', 'http', 'fetch'],
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json charset=utf-8',
      'User-Agent': 'axios/1.12.2',
      'Accept-Encoding': 'gzip, compress, deflate, br'
    },
    family: 4,
    method: 'get',
    url: 'https://slack.com/api/users.list',
    allowAbsoluteUrls: true,
    data: undefined
  },
  request: {
    _currentUrl: 'https://slack.com/api/users.list',
    servername: 'slack.com',
    authorized: true,
    authorizationError: null,
    encrypted: true,
    _eventsCount: 9,
    _host: 'slack.com',
    _closeAfterHandlingError: false,
    _requestCert: true,
    _rejectUnauthorized: true,
    timeout: 5000,
  },
  response: {
    status: 429,
    statusText: 'Too Many Requests',
    headers: {
      date: 'Tue, 03 Mar 2026 18:38:16 GMT',
      server: 'Apache',
      'x-slack-req-id': 'd3b3702421643fb7dc6b4dc8f98630cc',
      'x-content-type-options': 'nosniff',
      'x-xss-protection': '0',
      pragma: 'no-cache',
      'cache-control': 'private, no-cache, no-store, must-revalidate',
      expires: 'Sat, 26 Jul 1997 05:00:00 GMT',
      'content-type': 'application/json; charset=utf-8',
      'x-slack-failure': 'ratelimited',
      'retry-after': '60',

    },
    config: {
    },
    request: {
      _headerSent: true,
      _closed: true,
      _header: 'GET /api/users.list HTTP/1.1\r\n' +
        'Accept: application/json, text/plain, */*\r\n' +
        'Content-Type: application/json charset=utf-8\r\n' +
        'User-Agent: axios/1.12.2\r\n' +
        'Accept-Encoding: gzip, compress, deflate, br\r\n' +
        'Host: slack.com\r\n' +
        'Connection: keep-alive\r\n' +
        '\r\n',
    },
    data: { ok: false, error: 'ratelimited' }
  },
  status: 429
}
