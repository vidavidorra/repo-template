module.exports = {
  '*.{ts,tsx,js,jsx,json}': ['npm run lint', 'npm run format-file:default'],
  '*.{vue,ts,css,less,scss,html,htm,md,markdown,yml,yaml}': [
    'npm run format-file:default',
  ],
};
