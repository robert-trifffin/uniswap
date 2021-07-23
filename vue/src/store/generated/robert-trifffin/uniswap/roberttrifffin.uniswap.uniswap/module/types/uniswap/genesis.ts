/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { User } from '../uniswap/user'
import { Pool } from '../uniswap/pool'

export const protobufPackage = 'roberttrifffin.uniswap.uniswap'

/** GenesisState defines the uniswap module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  userList: User[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  userCount: number
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  pool: Pool | undefined
}

const baseGenesisState: object = { userCount: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.userList) {
      User.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.userCount !== 0) {
      writer.uint32(24).uint64(message.userCount)
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.userList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          message.userList.push(User.decode(reader, reader.uint32()))
          break
        case 3:
          message.userCount = longToNumber(reader.uint64() as Long)
          break
        case 1:
          message.pool = Pool.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.userList = []
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromJSON(e))
      }
    }
    if (object.userCount !== undefined && object.userCount !== null) {
      message.userCount = Number(object.userCount)
    } else {
      message.userCount = 0
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromJSON(object.pool)
    } else {
      message.pool = undefined
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.userList) {
      obj.userList = message.userList.map((e) => (e ? User.toJSON(e) : undefined))
    } else {
      obj.userList = []
    }
    message.userCount !== undefined && (obj.userCount = message.userCount)
    message.pool !== undefined && (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.userList = []
    if (object.userList !== undefined && object.userList !== null) {
      for (const e of object.userList) {
        message.userList.push(User.fromPartial(e))
      }
    }
    if (object.userCount !== undefined && object.userCount !== null) {
      message.userCount = object.userCount
    } else {
      message.userCount = 0
    }
    if (object.pool !== undefined && object.pool !== null) {
      message.pool = Pool.fromPartial(object.pool)
    } else {
      message.pool = undefined
    }
    return message
  }
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
