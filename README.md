A test app to help debug [Helmet issue #311](https://github.com/helmetjs/helmet/issues/311).

To start the server that holds the iframe:

```sh
# Starts a server on port 3000
npm run start-inner
```

To start the server that renders a page that renders the iframe:

```
# Starts a server on port 3001
npm run start-outer
```

Once both servers are running (at the same time), visit `localhost:3001`.
