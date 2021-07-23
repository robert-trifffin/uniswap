/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Pool } from '../uniswap/pool'

export const protobufPackage = 'roberttrifffin.uniswap.uniswap'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetPoolRequest {}

export interface QueryGetPoolResponse {
  Pool: Pool | undefined
}

const baseQueryGetPoolRequest: object = {}

export const QueryGetPoolRequest = {
  encode(_: QueryGetPoolRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryGetPoolRequest {
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest
    return message
  },

  toJSON(_: QueryGetPoolRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryGetPoolRequest>): QueryGetPoolRequest {
    const message = { ...baseQueryGetPoolRequest } as QueryGetPoolRequest
    return message
  }
}

const baseQueryGetPoolResponse: object = {}

export const QueryGetPoolResponse = {
  encode(message: QueryGetPoolResponse, writer: Writer = Writer.create()): Writer {
    if (message.Pool !== undefined) {
      Pool.encode(message.Pool, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Pool = Pool.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse
    if (object.Pool !== undefined && object.Pool !== null) {
      message.Pool = Pool.fromJSON(object.Pool)
    } else {
      message.Pool = undefined
    }
    return message
  },

  toJSON(message: QueryGetPoolResponse): unknown {
    const obj: any = {}
    message.Pool !== undefined && (obj.Pool = message.Pool ? Pool.toJSON(message.Pool) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetPoolResponse>): QueryGetPoolResponse {
    const message = { ...baseQueryGetPoolResponse } as QueryGetPoolResponse
    if (object.Pool !== undefined && object.Pool !== null) {
      message.Pool = Pool.fromPartial(object.Pool)
    } else {
      message.Pool = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a pool by index. */
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Pool(request: QueryGetPoolRequest): Promise<QueryGetPoolResponse> {
    const data = QueryGetPoolRequest.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Query', 'Pool', data)
    return promise.then((data) => QueryGetPoolResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
