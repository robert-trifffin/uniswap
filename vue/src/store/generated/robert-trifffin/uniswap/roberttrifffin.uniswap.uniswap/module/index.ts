// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRemoveLiqudity } from "./types/uniswap/tx";
import { MsgDeletePool } from "./types/uniswap/tx";
import { MsgUpdatePool } from "./types/uniswap/tx";
import { MsgAddLiqudity } from "./types/uniswap/tx";
import { MsgCreatePool } from "./types/uniswap/tx";


const types = [
  ["/roberttrifffin.uniswap.uniswap.MsgRemoveLiqudity", MsgRemoveLiqudity],
  ["/roberttrifffin.uniswap.uniswap.MsgDeletePool", MsgDeletePool],
  ["/roberttrifffin.uniswap.uniswap.MsgUpdatePool", MsgUpdatePool],
  ["/roberttrifffin.uniswap.uniswap.MsgAddLiqudity", MsgAddLiqudity],
  ["/roberttrifffin.uniswap.uniswap.MsgCreatePool", MsgCreatePool],
  
];
export const MissingWalletError = new Error("wallet is required");

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgRemoveLiqudity: (data: MsgRemoveLiqudity): EncodeObject => ({ typeUrl: "/roberttrifffin.uniswap.uniswap.MsgRemoveLiqudity", value: data }),
    msgDeletePool: (data: MsgDeletePool): EncodeObject => ({ typeUrl: "/roberttrifffin.uniswap.uniswap.MsgDeletePool", value: data }),
    msgUpdatePool: (data: MsgUpdatePool): EncodeObject => ({ typeUrl: "/roberttrifffin.uniswap.uniswap.MsgUpdatePool", value: data }),
    msgAddLiqudity: (data: MsgAddLiqudity): EncodeObject => ({ typeUrl: "/roberttrifffin.uniswap.uniswap.MsgAddLiqudity", value: data }),
    msgCreatePool: (data: MsgCreatePool): EncodeObject => ({ typeUrl: "/roberttrifffin.uniswap.uniswap.MsgCreatePool", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
