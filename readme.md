# uniswap
**uniswap** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

```
//make your swap-chain from sketch 
starport scaffold chain github.com/robert-trifffin/uniswap --address-prefix uni
cd uniswap

starport s single Pool address:string denom1:string denom2:string amount1:uint amount2:uint total:uint
starport s list User amount:uint
starport s message AddLiqudity denom1:string denom2:string amount1:uint amount2:uint
starport s message RemoveLiqudity amount:uint

##adding some functions for swap in (msg_server_{msg}.go)

starport chain serve


//check alice & bob address
uniswapd keys list
uniswapd q bank balances {address}

//sending tokens
uniswapd tx bank send {addr} {addr} 100token --from alice

//create pool
uniswapd tx uniswap create-pool 0 stake token 0 0 0 --from alice
uniswapd q uniswap show-pool

uniswapd tx uniswap add-liqudity stake token 100 100 --from alice -b block
uniswapd tx uniswap add-liqudity stake token 100 100 --from bob -b block

//check pool status
uniswapd q uniswap show-pool

//check user's lp token count
starport s list User amount:uint

```





## Get started

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/robert-trifffin/uniswap@latest! | sudo bash
```
`robert-trifffin/uniswap` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)
