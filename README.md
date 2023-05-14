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

`yarn swagger-gen`

If we are not planning to use it as a backend service then why we have to generate swagger file ?
A: It has 2 use cases. First, to have swagger UI for developer to read API documentation. What , how and when
and second, we are not planning to use the endpoints directly using axios or fetch calls. Instead we will generate a **client** module for typesafety
and then use it

## Proxies to real backend services

to genrate/ update openAPI proxy run
`yarn update-openapi-proxy`

You should not use this in your client side code but instead use this proxy in the API handlers. These APIs need to be protected with headers token and should be used as inter service communication protocol like GRPC.

notes :

```
"postbuild": "cpy 'models/**/*.swagger.yaml' public/openapi --flat",
```

## JS Docs

Why ? Here we will document the architechture of the project

run `yarn docs` to genetrate a jsDoc based documentation site

This will generate in ROOT/docs folder so you need to preview using a web server / live server in vscode for e.g.

Bonus: The project README.md is the landing page for this docs

## Commits to main and Release management

for commiting use correct message format
e.g. git commit -m "feat: added feature one"

then run

yarn changeset

this will create a changeset file in the .changeset folder

then run

yarn gen-changelog

then commit files with

git commit -m "chore: version release"

## Swagger workflow - REST endpoints [ You need a strong use case of using REST endpoint in this. Please use tRPC in all cases ]

If you are adding a REST endpoint , add the interfaces in models/index.ts for the responses
and then use it in the schema reference in the swagger doc string and also in the response type of the
endpoint handler

Note: After changing the models/\*.ts or the swagger doc string in your end point you need to run `yarn gen-client`

Todo: Remove the need to convert the interface to yaml mannually

## Test file location

For page testing , use ROOT/**tests**
and individual components use the respective component folder

Notes : please install openapi-generator-cli==6.2.1 globally
