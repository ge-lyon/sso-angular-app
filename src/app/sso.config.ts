import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://login.microsoftonline.com/ID_ANNUAIRE',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registered with this id at the auth-server. ID_APPLICATION
  clientId: 'ID_APPLICATION',

  // Resource id : ID_APPLICATION
  resource: 'ID_APPLICATION',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile',

  // turn off validation that discovery document endpoints start with the issuer url defined above
  strictDiscoveryDocumentValidation: false,

  // Skip the validation of the issuer in the discovery doc. Normally, the discovey document's url starts with the issuer url.
  skipIssuerCheck: true

}
