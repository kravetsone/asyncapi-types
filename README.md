# asyncapi-types

[![npm](https://img.shields.io/npm/v/asyncapi-types?logo=npm&style=flat&labelColor=000&color=3b82f6)](https://www.npmjs.org/package/asyncapi-types)
[![npm downloads](https://img.shields.io/npm/dw/asyncapi-types?logo=npm&style=flat&labelColor=000&color=3b82f6)](https://www.npmjs.org/package/asyncapi-types)
[![JSR](https://jsr.io/badges/@kravets/asyncapi-types)](https://jsr.io/@kravets/asyncapi-types)
[![JSR Score](https://jsr.io/badges/@kravets/asyncapi-types/score)](https://jsr.io/@kravets/asyncapi-types)

Types for [AsyncAPI](https://www.asyncapi.com) in separate package.

## Installation

### Install types for v2 version of spec

```bash
npm i asyncapi-types@^2 -d
```

### Install types for v3 version of spec

```bash
npm i asyncapi-types@^3 -d
```

## Usage

```ts
const asyncapi: AsyncAPIObject = {
    asyncapi: "2.0.0",
    info: {
        title: "My API",
        version: "1.0.0",
    },
    channels: {
        "my-channel": {
            subscribe: {
                message: {
                    payload: { type: "string" },
                },
            },
        },
    },
};
```

### TODO

- [ ] Add guide how to use both versions of types in one project

### Thanks

This package is copy-pasted from [@asyncapi/parser-js/spec-types](https://github.com/asyncapi/parser-js/tree/master/packages/parser/src/spec-types) with Apache 2.0 license to use only types and not the whole parser.

## License

This project is licensed under the [Apache 2.0 License](LICENSE).
