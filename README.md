# clone-moi-sur-github [![pipeline status](https://gitlab.factory.social.gouv.fr/SocialGouv/clone-moi-sur-github/badges/master/pipeline.svg)](https://gitlab.factory.social.gouv.fr/SocialGouv/clone-moi-sur-github/commits/master)

[![NPM](https://nodei.co/npm/@socialgouv/clone-moi-sur-github.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@socialgouv/clone-moi-sur-github)

Le célèbre "Github Ribbon" mode 🇫🇷.

<img src="./demo.png" alt="demo" width="300"/>

## Installation

```sh
yarn add @socialgouv/clone-moi-sur-github
```

## Usage

```js
import Ribbon from "@socialgouv/clone-moi-sur-github";

<Ribbon url="https://github.com/SocialGouv/clone-moi-sur-github" />;
```

See [example/src](./example/src).

## Props

| Prop           | type   | usage                                | default |
| -------------- | ------ | ------------------------------------ | ------- |
| url          | string | lien vers le repo à lier  | - |


## Source

 - https://github.com/tholman/github-corners
