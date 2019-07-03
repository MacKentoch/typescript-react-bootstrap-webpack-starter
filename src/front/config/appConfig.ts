export const appConfig = Object.freeze({
  DEV_MODE: true, // block fetch

  persistStoreKey: "appPersist",

  // sw path
  sw: {
    path: 'public/assets/sw.js',
  },
});

export default appConfig;
