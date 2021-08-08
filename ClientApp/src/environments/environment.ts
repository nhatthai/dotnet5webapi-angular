export const environment = {
  production: false,

  auth: {
    domain: 'dev-i5eh5nau.us.auth0.com',
    clientId: '38VgNX7wgln32E96ey5CZEfB2RWpZGGe',
    responseType: 'token id_token',
    audience: 'https://localhost:44357/api',
    scope: 'openid profile read:cusips',
    redirectUri: 'http://localhost:4200',
    token: ''
  },
  baseAPIUrl: 'http://localhost:5000/api'
};
