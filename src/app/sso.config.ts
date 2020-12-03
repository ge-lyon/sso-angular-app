import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://35.232.234.206/am/ceetal-security-domain/oidc',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '9213c8e8-e89e-4b91-93c8-e8e89e0b916c',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid',

  // turn off validation that discovery document endpoints start with the issuer url defined above
  strictDiscoveryDocumentValidation: false
}