ng build --prod
./node_modules/.bin/ngu-sw-manifest --module ./src/app/app.module.ts \
   --out dist/ngsw-manifest.json