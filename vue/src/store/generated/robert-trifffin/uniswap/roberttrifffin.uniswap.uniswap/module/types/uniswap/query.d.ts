import { Reader, Writer } from 'protobufjs/minimal';
import { User } from '../uniswap/user';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Pool } from '../uniswap/pool';
export declare const protobufPackage = "roberttrifffin.uniswap.uniswap";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetUserRequest {
    id: number;
}
export interface QueryGetUserResponse {
    User: User | undefined;
}
export interface QueryAllUserRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllUserResponse {
    User: User[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPoolRequest {
}
export interface QueryGetPoolResponse {
    Pool: Pool | undefined;
}
export declare const QueryGetUserRequest: {
    encode(message: QueryGetUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUserRequest;
    fromJSON(object: any): QueryGetUserRequest;
    toJSON(message: QueryGetUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetUserRequest>): QueryGetUserRequest;
};
export declare const QueryGetUserResponse: {
    encode(message: QueryGetUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUserResponse;
    fromJSON(object: any): QueryGetUserResponse;
    toJSON(message: QueryGetUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetUserResponse>): QueryGetUserResponse;
};
export declare const QueryAllUserRequest: {
    encode(message: QueryAllUserRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUserRequest;
    fromJSON(object: any): QueryAllUserRequest;
    toJSON(message: QueryAllUserRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllUserRequest>): QueryAllUserRequest;
};
export declare const QueryAllUserResponse: {
    encode(message: QueryAllUserResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUserResponse;
    fromJSON(object: any): QueryAllUserResponse;
    toJSON(message: QueryAllUserResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllUserResponse>): QueryAllUserResponse;
};
export declare const QueryGetPoolRequest: {
    encode(_: QueryGetPoolRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPoolRequest;
    fromJSON(_: any): QueryGetPoolRequest;
    toJSON(_: QueryGetPoolRequest): unknown;
    fromPartial(_: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest;
};
export declare const QueryGetPoolResponse: {
    encode(message: QueryGetPoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPoolResponse;
    fromJSON(object: any): QueryGetPoolResponse;
    toJSON(message: QueryGetPoolResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a user by id. */
    User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    /** Queries a list of user items. */
    UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
    /** Queries a pool by index. */
    Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    User(request: QueryGetUserRequest): Promise<QueryGetUserResponse>;
    UserAll(request: QueryAllUserRequest): Promise<QueryAllUserResponse>;
    Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
