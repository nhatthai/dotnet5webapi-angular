export const environment = {
  production: true,

  auth: {
    domain: '#{Auth0Domain}#',
    clientId: '#{Auth0ClientId}#',
    redirectUri: 'http://localhost/items/index.html'
  },
  baseAPIUrl: 'http://localhost:5000/api'
};
