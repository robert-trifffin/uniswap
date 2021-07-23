import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "roberttrifffin.uniswap.uniswap";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgRemoveLiqudity {
    creator: string;
    amount: number;
}
export interface MsgRemoveLiqudityResponse {
}
export interface MsgAddLiqudity {
    creator: string;
    denom1: string;
    denom2: string;
    amount1: number;
    amount2: number;
}
export interface MsgAddLiqudityResponse {
}
export interface MsgCreatePool {
    creator: string;
    address: string;
    denom1: string;
    denom2: string;
    amount1: number;
    amount2: number;
    total: number;
}
export interface MsgCreatePoolResponse {
}
export interface MsgUpdatePool {
    creator: string;
    address: string;
    denom1: string;
    denom2: string;
    amount1: number;
    amount2: number;
    total: number;
}
export interface MsgUpdatePoolResponse {
}
export interface MsgDeletePool {
    creator: string;
}
export interface MsgDeletePoolResponse {
}
export declare const MsgRemoveLiqudity: {
    encode(message: MsgRemoveLiqudity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRemoveLiqudity;
    fromJSON(object: any): MsgRemoveLiqudity;
    toJSON(message: MsgRemoveLiqudity): unknown;
    fromPartial(object: DeepPartial<MsgRemoveLiqudity>): MsgRemoveLiqudity;
};
export declare const MsgRemoveLiqudityResponse: {
    encode(_: MsgRemoveLiqudityResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRemoveLiqudityResponse;
    fromJSON(_: any): MsgRemoveLiqudityResponse;
    toJSON(_: MsgRemoveLiqudityResponse): unknown;
    fromPartial(_: DeepPartial<MsgRemoveLiqudityResponse>): MsgRemoveLiqudityResponse;
};
export declare const MsgAddLiqudity: {
    encode(message: MsgAddLiqudity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddLiqudity;
    fromJSON(object: any): MsgAddLiqudity;
    toJSON(message: MsgAddLiqudity): unknown;
    fromPartial(object: DeepPartial<MsgAddLiqudity>): MsgAddLiqudity;
};
export declare const MsgAddLiqudityResponse: {
    encode(_: MsgAddLiqudityResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddLiqudityResponse;
    fromJSON(_: any): MsgAddLiqudityResponse;
    toJSON(_: MsgAddLiqudityResponse): unknown;
    fromPartial(_: DeepPartial<MsgAddLiqudityResponse>): MsgAddLiqudityResponse;
};
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool;
    fromJSON(object: any): MsgCreatePool;
    toJSON(message: MsgCreatePool): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromJSON(_: any): MsgCreatePoolResponse;
    toJSON(_: MsgCreatePoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgUpdatePool: {
    encode(message: MsgUpdatePool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool;
    fromJSON(object: any): MsgUpdatePool;
    toJSON(message: MsgUpdatePool): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool;
};
export declare const MsgUpdatePoolResponse: {
    encode(_: MsgUpdatePoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePoolResponse;
    fromJSON(_: any): MsgUpdatePoolResponse;
    toJSON(_: MsgUpdatePoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse;
};
export declare const MsgDeletePool: {
    encode(message: MsgDeletePool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePool;
    fromJSON(object: any): MsgDeletePool;
    toJSON(message: MsgDeletePool): unknown;
    fromPartial(object: DeepPartial<MsgDeletePool>): MsgDeletePool;
};
export declare const MsgDeletePoolResponse: {
    encode(_: MsgDeletePoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePoolResponse;
    fromJSON(_: any): MsgDeletePoolResponse;
    toJSON(_: MsgDeletePoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePoolResponse>): MsgDeletePoolResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    RemoveLiqudity(request: MsgRemoveLiqudity): Promise<MsgRemoveLiqudityResponse>;
    AddLiqudity(request: MsgAddLiqudity): Promise<MsgAddLiqudityResponse>;
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RemoveLiqudity(request: MsgRemoveLiqudity): Promise<MsgRemoveLiqudityResponse>;
    AddLiqudity(request: MsgAddLiqudity): Promise<MsgAddLiqudityResponse>;
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
