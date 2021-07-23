import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePool } from "./types/uniswap/tx";
import { MsgUpdatePool } from "./types/uniswap/tx";
import { MsgDeletePool } from "./types/uniswap/tx";
import { MsgAddLiqudity } from "./types/uniswap/tx";
import { MsgCreateUser } from "./types/uniswap/tx";
import { MsgRemoveLiqudity } from "./types/uniswap/tx";
import { MsgDeleteUser } from "./types/uniswap/tx";
import { MsgUpdateUser } from "./types/uniswap/tx";
export declare const MissingWalletError: Error;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreatePool: (data: MsgCreatePool) => EncodeObject;
    msgUpdatePool: (data: MsgUpdatePool) => EncodeObject;
    msgDeletePool: (data: MsgDeletePool) => EncodeObject;
    msgAddLiqudity: (data: MsgAddLiqudity) => EncodeObject;
    msgCreateUser: (data: MsgCreateUser) => EncodeObject;
    msgRemoveLiqudity: (data: MsgRemoveLiqudity) => EncodeObject;
    msgDeleteUser: (data: MsgDeleteUser) => EncodeObject;
    msgUpdateUser: (data: MsgUpdateUser) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
