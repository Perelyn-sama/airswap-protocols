# Metadata

Token Metadata Tools for AirSwap Developers

[![Discord](https://img.shields.io/discord/590643190281928738.svg)](https://discord.gg/ecQbV7H)
[![License](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)
![Twitter Follow](https://img.shields.io/twitter/follow/airswap?style=social)

## Resources

- About → https://about.airswap.io/
- Website → https://www.airswap.io/
- Twitter → https://twitter.com/airswap
- Chat → https://chat.airswap.io/

## Usage

Add the package to your project:

```console
yarn add @airswap/metadata
```

Import into your application:

```TypeScript
import { getKnownTokens } from '@airswap/metadata'
import { chainIds } from '@airswap/constants'
const { errors, tokens } = await getKnownTokens(chainIds.MAINNET)
```

## Commands

| Command        | Description                             |
| :------------- | :-------------------------------------- |
| `yarn`         | Install dependencies                    |
| `yarn clean`   | Delete the contract `build` folder      |
| `yarn compile` | Compile all contracts to `build` folder |
