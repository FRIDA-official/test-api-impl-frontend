import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://frida-demo.okta.com',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: '0oa6wxz4uOexwXCoa416',
  // set the scope for the permissions the client should request
  // The first four are defined by OIDC. 
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid',

  showDebugInformation: true,

  responseType: 'token',
};