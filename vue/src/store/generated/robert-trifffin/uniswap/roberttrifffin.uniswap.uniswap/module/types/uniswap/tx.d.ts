import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "roberttrifffin.uniswap.uniswap";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateUser {
    creator: string;
    amount: number;
}
export interface MsgCreateUserResponse {
    id: number;
}
export interface MsgUpdateUser {
    creator: string;
    id: number;
    amount: number;
}
export interface MsgUpdateUserResponse {
}
export interface MsgDeleteUser {
    creator: string;
    id: number;
}
export interface MsgDeleteUserResponse {
}
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
export declare const MsgCreateUser: {
    encode(message: MsgCreateUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUser;
    fromJSON(object: any): MsgCreateUser;
    toJSON(message: MsgCreateUser): unknown;
    fromPartial(object: DeepPartial<MsgCreateUser>): MsgCreateUser;
};
export declare const MsgCreateUserResponse: {
    encode(message: MsgCreateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse;
    fromJSON(object: any): MsgCreateUserResponse;
    toJSON(message: MsgCreateUserResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateUserResponse>): MsgCreateUserResponse;
};
export declare const MsgUpdateUser: {
    encode(message: MsgUpdateUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUser;
    fromJSON(object: any): MsgUpdateUser;
    toJSON(message: MsgUpdateUser): unknown;
    fromPartial(object: DeepPartial<MsgUpdateUser>): MsgUpdateUser;
};
export declare const MsgUpdateUserResponse: {
    encode(_: MsgUpdateUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserResponse;
    fromJSON(_: any): MsgUpdateUserResponse;
    toJSON(_: MsgUpdateUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateUserResponse>): MsgUpdateUserResponse;
};
export declare const MsgDeleteUser: {
    encode(message: MsgDeleteUser, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUser;
    fromJSON(object: any): MsgDeleteUser;
    toJSON(message: MsgDeleteUser): unknown;
    fromPartial(object: DeepPartial<MsgDeleteUser>): MsgDeleteUser;
};
export declare const MsgDeleteUserResponse: {
    encode(_: MsgDeleteUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserResponse;
    fromJSON(_: any): MsgDeleteUserResponse;
    toJSON(_: MsgDeleteUserResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteUserResponse>): MsgDeleteUserResponse;
};
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
    CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
    UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
    DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
    RemoveLiqudity(request: MsgRemoveLiqudity): Promise<MsgRemoveLiqudityResponse>;
    AddLiqudity(request: MsgAddLiqudity): Promise<MsgAddLiqudityResponse>;
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>;
    DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>;
    UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>;
    DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>;
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
