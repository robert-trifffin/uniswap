import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRemoveLiqudity } from "./types/uniswap/tx";
import { MsgDeletePool } from "./types/uniswap/tx";
import { MsgUpdatePool } from "./types/uniswap/tx";
import { MsgAddLiqudity } from "./types/uniswap/tx";
import { MsgCreatePool } from "./types/uniswap/tx";
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
    msgRemoveLiqudity: (data: MsgRemoveLiqudity) => EncodeObject;
    msgDeletePool: (data: MsgDeletePool) => EncodeObject;
    msgUpdatePool: (data: MsgUpdatePool) => EncodeObject;
    msgAddLiqudity: (data: MsgAddLiqudity) => EncodeObject;
    msgCreatePool: (data: MsgCreatePool) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
