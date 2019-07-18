let host = location.host.split(":")[0];
export const environment = {
  production: true,
  apiUrl:'http://'+host+':3000/',
};
