import { Reader, Writer } from 'protobufjs/minimal';
import { Pool } from '../uniswap/pool';
export declare const protobufPackage = "roberttrifffin.uniswap.uniswap";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetPoolRequest {
}
export interface QueryGetPoolResponse {
    Pool: Pool | undefined;
}
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
    /** Queries a pool by index. */
    Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
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
