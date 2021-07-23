import { Writer, Reader } from 'protobufjs/minimal';
import { User } from '../uniswap/user';
import { Pool } from '../uniswap/pool';
export declare const protobufPackage = "roberttrifffin.uniswap.uniswap";
/** GenesisState defines the uniswap module's genesis state. */
export interface GenesisState {
    /** this line is used by starport scaffolding # genesis/proto/state */
    userList: User[];
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    userCount: number;
    /** this line is used by starport scaffolding # genesis/proto/stateField */
    pool: Pool | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: DeepPartial<GenesisState>): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
