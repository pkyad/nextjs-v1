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

to genrate/ update openAPI proxy run
yarn update-openapi-proxy

You should not use this in your client side code but instead use this client in the API handlers. These APIs need to be protected with headers token and should be used as inter service communication protocol like GRPC.

notes :

```
"postbuild": "cpy 'models/**/*.swagger.yaml' public/openapi --flat",
```

run `yarn docs` to genetrate a jsDoc based documentation site

This will generate in ROOT/docs folder so you need to preview using a web server / live server in vscode for e.g.

Bonus: This README.md is the landing page for the docs

for commiting use correct message format
e.g. git commit -m "feat: added feature one"

then run

yarn changeset

this will create a changeset file in the .changeset folder

then run

yarn gen-changelog

then commit files with

git commit -m "chore: version release"
