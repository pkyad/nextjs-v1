```bash
yarn
yarn dev
yarn test
yarn test --coverage
docker build -t nextjs-docker .


#command to generate the swagger json in public folder
yarn next-swagger-doc-cli next-swagger-doc.json
```

To generate openAPI spec file we can run

yarn swagger-gen

to genrate/ update openAPI client run
yarn update-openapi-client

notes :

```
"postbuild": "cpy 'models/**/*.swagger.yaml' public/openapi --flat",
```
