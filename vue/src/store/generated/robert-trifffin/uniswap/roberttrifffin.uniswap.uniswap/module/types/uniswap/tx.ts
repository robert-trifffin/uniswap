/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'roberttrifffin.uniswap.uniswap'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateUser {
  creator: string
  amount: number
}

export interface MsgCreateUserResponse {
  id: number
}

export interface MsgUpdateUser {
  creator: string
  id: number
  amount: number
}

export interface MsgUpdateUserResponse {}

export interface MsgDeleteUser {
  creator: string
  id: number
}

export interface MsgDeleteUserResponse {}

export interface MsgRemoveLiqudity {
  creator: string
  amount: number
}

export interface MsgRemoveLiqudityResponse {}

export interface MsgAddLiqudity {
  creator: string
  denom1: string
  denom2: string
  amount1: number
  amount2: number
}

export interface MsgAddLiqudityResponse {}

export interface MsgCreatePool {
  creator: string
  address: string
  denom1: string
  denom2: string
  amount1: number
  amount2: number
  total: number
}

export interface MsgCreatePoolResponse {}

export interface MsgUpdatePool {
  creator: string
  address: string
  denom1: string
  denom2: string
  amount1: number
  amount2: number
  total: number
}

export interface MsgUpdatePoolResponse {}

export interface MsgDeletePool {
  creator: string
}

export interface MsgDeletePoolResponse {}

const baseMsgCreateUser: object = { creator: '', amount: 0 }

export const MsgCreateUser = {
  encode(message: MsgCreateUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUser } as MsgCreateUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.amount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateUser {
    const message = { ...baseMsgCreateUser } as MsgCreateUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount)
    } else {
      message.amount = 0
    }
    return message
  },

  toJSON(message: MsgCreateUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateUser>): MsgCreateUser {
    const message = { ...baseMsgCreateUser } as MsgCreateUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = 0
    }
    return message
  }
}

const baseMsgCreateUserResponse: object = { id: 0 }

export const MsgCreateUserResponse = {
  encode(message: MsgCreateUserResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateUserResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateUserResponse>): MsgCreateUserResponse {
    const message = { ...baseMsgCreateUserResponse } as MsgCreateUserResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateUser: object = { creator: '', id: 0, amount: 0 }

export const MsgUpdateUser = {
  encode(message: MsgUpdateUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.amount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateUser {
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount)
    } else {
      message.amount = 0
    }
    return message
  },

  toJSON(message: MsgUpdateUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateUser>): MsgUpdateUser {
    const message = { ...baseMsgUpdateUser } as MsgUpdateUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = 0
    }
    return message
  }
}

const baseMsgUpdateUserResponse: object = {}

export const MsgUpdateUserResponse = {
  encode(_: MsgUpdateUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
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

  fromJSON(_: any): MsgUpdateUserResponse {
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
    return message
  },

  toJSON(_: MsgUpdateUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateUserResponse>): MsgUpdateUserResponse {
    const message = { ...baseMsgUpdateUserResponse } as MsgUpdateUserResponse
    return message
  }
}

const baseMsgDeleteUser: object = { creator: '', id: 0 }

export const MsgDeleteUser = {
  encode(message: MsgDeleteUser, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUser {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteUser {
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteUser): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteUser>): MsgDeleteUser {
    const message = { ...baseMsgDeleteUser } as MsgDeleteUser
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteUserResponse: object = {}

export const MsgDeleteUserResponse = {
  encode(_: MsgDeleteUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse
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

  fromJSON(_: any): MsgDeleteUserResponse {
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse
    return message
  },

  toJSON(_: MsgDeleteUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteUserResponse>): MsgDeleteUserResponse {
    const message = { ...baseMsgDeleteUserResponse } as MsgDeleteUserResponse
    return message
  }
}

const baseMsgRemoveLiqudity: object = { creator: '', amount: 0 }

export const MsgRemoveLiqudity = {
  encode(message: MsgRemoveLiqudity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveLiqudity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRemoveLiqudity } as MsgRemoveLiqudity
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.amount = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRemoveLiqudity {
    const message = { ...baseMsgRemoveLiqudity } as MsgRemoveLiqudity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount)
    } else {
      message.amount = 0
    }
    return message
  },

  toJSON(message: MsgRemoveLiqudity): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRemoveLiqudity>): MsgRemoveLiqudity {
    const message = { ...baseMsgRemoveLiqudity } as MsgRemoveLiqudity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = 0
    }
    return message
  }
}

const baseMsgRemoveLiqudityResponse: object = {}

export const MsgRemoveLiqudityResponse = {
  encode(_: MsgRemoveLiqudityResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveLiqudityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRemoveLiqudityResponse } as MsgRemoveLiqudityResponse
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

  fromJSON(_: any): MsgRemoveLiqudityResponse {
    const message = { ...baseMsgRemoveLiqudityResponse } as MsgRemoveLiqudityResponse
    return message
  },

  toJSON(_: MsgRemoveLiqudityResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgRemoveLiqudityResponse>): MsgRemoveLiqudityResponse {
    const message = { ...baseMsgRemoveLiqudityResponse } as MsgRemoveLiqudityResponse
    return message
  }
}

const baseMsgAddLiqudity: object = { creator: '', denom1: '', denom2: '', amount1: 0, amount2: 0 }

export const MsgAddLiqudity = {
  encode(message: MsgAddLiqudity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.denom1 !== '') {
      writer.uint32(18).string(message.denom1)
    }
    if (message.denom2 !== '') {
      writer.uint32(26).string(message.denom2)
    }
    if (message.amount1 !== 0) {
      writer.uint32(32).uint64(message.amount1)
    }
    if (message.amount2 !== 0) {
      writer.uint32(40).uint64(message.amount2)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddLiqudity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAddLiqudity } as MsgAddLiqudity
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.denom1 = reader.string()
          break
        case 3:
          message.denom2 = reader.string()
          break
        case 4:
          message.amount1 = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.amount2 = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgAddLiqudity {
    const message = { ...baseMsgAddLiqudity } as MsgAddLiqudity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = String(object.denom1)
    } else {
      message.denom1 = ''
    }
    if (object.denom2 !== undefined && object.denom2 !== null) {
      message.denom2 = String(object.denom2)
    } else {
      message.denom2 = ''
    }
    if (object.amount1 !== undefined && object.amount1 !== null) {
      message.amount1 = Number(object.amount1)
    } else {
      message.amount1 = 0
    }
    if (object.amount2 !== undefined && object.amount2 !== null) {
      message.amount2 = Number(object.amount2)
    } else {
      message.amount2 = 0
    }
    return message
  },

  toJSON(message: MsgAddLiqudity): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.denom1 !== undefined && (obj.denom1 = message.denom1)
    message.denom2 !== undefined && (obj.denom2 = message.denom2)
    message.amount1 !== undefined && (obj.amount1 = message.amount1)
    message.amount2 !== undefined && (obj.amount2 = message.amount2)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAddLiqudity>): MsgAddLiqudity {
    const message = { ...baseMsgAddLiqudity } as MsgAddLiqudity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1
    } else {
      message.denom1 = ''
    }
    if (object.denom2 !== undefined && object.denom2 !== null) {
      message.denom2 = object.denom2
    } else {
      message.denom2 = ''
    }
    if (object.amount1 !== undefined && object.amount1 !== null) {
      message.amount1 = object.amount1
    } else {
      message.amount1 = 0
    }
    if (object.amount2 !== undefined && object.amount2 !== null) {
      message.amount2 = object.amount2
    } else {
      message.amount2 = 0
    }
    return message
  }
}

const baseMsgAddLiqudityResponse: object = {}

export const MsgAddLiqudityResponse = {
  encode(_: MsgAddLiqudityResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddLiqudityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAddLiqudityResponse } as MsgAddLiqudityResponse
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

  fromJSON(_: any): MsgAddLiqudityResponse {
    const message = { ...baseMsgAddLiqudityResponse } as MsgAddLiqudityResponse
    return message
  },

  toJSON(_: MsgAddLiqudityResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgAddLiqudityResponse>): MsgAddLiqudityResponse {
    const message = { ...baseMsgAddLiqudityResponse } as MsgAddLiqudityResponse
    return message
  }
}

const baseMsgCreatePool: object = { creator: '', address: '', denom1: '', denom2: '', amount1: 0, amount2: 0, total: 0 }

export const MsgCreatePool = {
  encode(message: MsgCreatePool, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    if (message.denom1 !== '') {
      writer.uint32(34).string(message.denom1)
    }
    if (message.denom2 !== '') {
      writer.uint32(42).string(message.denom2)
    }
    if (message.amount1 !== 0) {
      writer.uint32(48).uint64(message.amount1)
    }
    if (message.amount2 !== 0) {
      writer.uint32(56).uint64(message.amount2)
    }
    if (message.total !== 0) {
      writer.uint32(64).uint64(message.total)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePool } as MsgCreatePool
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.address = reader.string()
          break
        case 4:
          message.denom1 = reader.string()
          break
        case 5:
          message.denom2 = reader.string()
          break
        case 6:
          message.amount1 = longToNumber(reader.uint64() as Long)
          break
        case 7:
          message.amount2 = longToNumber(reader.uint64() as Long)
          break
        case 8:
          message.total = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = String(object.denom1)
    } else {
      message.denom1 = ''
    }
    if (object.denom2 !== undefined && object.denom2 !== null) {
      message.denom2 = String(object.denom2)
    } else {
      message.denom2 = ''
    }
    if (object.amount1 !== undefined && object.amount1 !== null) {
      message.amount1 = Number(object.amount1)
    } else {
      message.amount1 = 0
    }
    if (object.amount2 !== undefined && object.amount2 !== null) {
      message.amount2 = Number(object.amount2)
    } else {
      message.amount2 = 0
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total)
    } else {
      message.total = 0
    }
    return message
  },

  toJSON(message: MsgCreatePool): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.address !== undefined && (obj.address = message.address)
    message.denom1 !== undefined && (obj.denom1 = message.denom1)
    message.denom2 !== undefined && (obj.denom2 = message.denom2)
    message.amount1 !== undefined && (obj.amount1 = message.amount1)
    message.amount2 !== undefined && (obj.amount2 = message.amount2)
    message.total !== undefined && (obj.total = message.total)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool {
    const message = { ...baseMsgCreatePool } as MsgCreatePool
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1
    } else {
      message.denom1 = ''
    }
    if (object.denom2 !== undefined && object.denom2 !== null) {
      message.denom2 = object.denom2
    } else {
      message.denom2 = ''
    }
    if (object.amount1 !== undefined && object.amount1 !== null) {
      message.amount1 = object.amount1
    } else {
      message.amount1 = 0
    }
    if (object.amount2 !== undefined && object.amount2 !== null) {
      message.amount2 = object.amount2
    } else {
      message.amount2 = 0
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total
    } else {
      message.total = 0
    }
    return message
  }
}

const baseMsgCreatePoolResponse: object = {}

export const MsgCreatePoolResponse = {
  encode(_: MsgCreatePoolResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse
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

  fromJSON(_: any): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse
    return message
  },

  toJSON(_: MsgCreatePoolResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse {
    const message = { ...baseMsgCreatePoolResponse } as MsgCreatePoolResponse
    return message
  }
}

const baseMsgUpdatePool: object = { creator: '', address: '', denom1: '', denom2: '', amount1: 0, amount2: 0, total: 0 }

export const MsgUpdatePool = {
  encode(message: MsgUpdatePool, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.address !== '') {
      writer.uint32(26).string(message.address)
    }
    if (message.denom1 !== '') {
      writer.uint32(34).string(message.denom1)
    }
    if (message.denom2 !== '') {
      writer.uint32(42).string(message.denom2)
    }
    if (message.amount1 !== 0) {
      writer.uint32(48).uint64(message.amount1)
    }
    if (message.amount2 !== 0) {
      writer.uint32(56).uint64(message.amount2)
    }
    if (message.total !== 0) {
      writer.uint32(64).uint64(message.total)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 3:
          message.address = reader.string()
          break
        case 4:
          message.denom1 = reader.string()
          break
        case 5:
          message.denom2 = reader.string()
          break
        case 6:
          message.amount1 = longToNumber(reader.uint64() as Long)
          break
        case 7:
          message.amount2 = longToNumber(reader.uint64() as Long)
          break
        case 8:
          message.total = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdatePool {
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = String(object.denom1)
    } else {
      message.denom1 = ''
    }
    if (object.denom2 !== undefined && object.denom2 !== null) {
      message.denom2 = String(object.denom2)
    } else {
      message.denom2 = ''
    }
    if (object.amount1 !== undefined && object.amount1 !== null) {
      message.amount1 = Number(object.amount1)
    } else {
      message.amount1 = 0
    }
    if (object.amount2 !== undefined && object.amount2 !== null) {
      message.amount2 = Number(object.amount2)
    } else {
      message.amount2 = 0
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = Number(object.total)
    } else {
      message.total = 0
    }
    return message
  },

  toJSON(message: MsgUpdatePool): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.address !== undefined && (obj.address = message.address)
    message.denom1 !== undefined && (obj.denom1 = message.denom1)
    message.denom2 !== undefined && (obj.denom2 = message.denom2)
    message.amount1 !== undefined && (obj.amount1 = message.amount1)
    message.amount2 !== undefined && (obj.amount2 = message.amount2)
    message.total !== undefined && (obj.total = message.total)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdatePool>): MsgUpdatePool {
    const message = { ...baseMsgUpdatePool } as MsgUpdatePool
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.denom1 !== undefined && object.denom1 !== null) {
      message.denom1 = object.denom1
    } else {
      message.denom1 = ''
    }
    if (object.denom2 !== undefined && object.denom2 !== null) {
      message.denom2 = object.denom2
    } else {
      message.denom2 = ''
    }
    if (object.amount1 !== undefined && object.amount1 !== null) {
      message.amount1 = object.amount1
    } else {
      message.amount1 = 0
    }
    if (object.amount2 !== undefined && object.amount2 !== null) {
      message.amount2 = object.amount2
    } else {
      message.amount2 = 0
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total
    } else {
      message.total = 0
    }
    return message
  }
}

const baseMsgUpdatePoolResponse: object = {}

export const MsgUpdatePoolResponse = {
  encode(_: MsgUpdatePoolResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse
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

  fromJSON(_: any): MsgUpdatePoolResponse {
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse
    return message
  },

  toJSON(_: MsgUpdatePoolResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdatePoolResponse>): MsgUpdatePoolResponse {
    const message = { ...baseMsgUpdatePoolResponse } as MsgUpdatePoolResponse
    return message
  }
}

const baseMsgDeletePool: object = { creator: '' }

export const MsgDeletePool = {
  encode(message: MsgDeletePool, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePool } as MsgDeletePool
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeletePool {
    const message = { ...baseMsgDeletePool } as MsgDeletePool
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: MsgDeletePool): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeletePool>): MsgDeletePool {
    const message = { ...baseMsgDeletePool } as MsgDeletePool
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseMsgDeletePoolResponse: object = {}

export const MsgDeletePoolResponse = {
  encode(_: MsgDeletePoolResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeletePoolResponse } as MsgDeletePoolResponse
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

  fromJSON(_: any): MsgDeletePoolResponse {
    const message = { ...baseMsgDeletePoolResponse } as MsgDeletePoolResponse
    return message
  },

  toJSON(_: MsgDeletePoolResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeletePoolResponse>): MsgDeletePoolResponse {
    const message = { ...baseMsgDeletePoolResponse } as MsgDeletePoolResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse>
  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse>
  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse>
  RemoveLiqudity(request: MsgRemoveLiqudity): Promise<MsgRemoveLiqudityResponse>
  AddLiqudity(request: MsgAddLiqudity): Promise<MsgAddLiqudityResponse>
  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>
  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse>
  DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateUser(request: MsgCreateUser): Promise<MsgCreateUserResponse> {
    const data = MsgCreateUser.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'CreateUser', data)
    return promise.then((data) => MsgCreateUserResponse.decode(new Reader(data)))
  }

  UpdateUser(request: MsgUpdateUser): Promise<MsgUpdateUserResponse> {
    const data = MsgUpdateUser.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'UpdateUser', data)
    return promise.then((data) => MsgUpdateUserResponse.decode(new Reader(data)))
  }

  DeleteUser(request: MsgDeleteUser): Promise<MsgDeleteUserResponse> {
    const data = MsgDeleteUser.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'DeleteUser', data)
    return promise.then((data) => MsgDeleteUserResponse.decode(new Reader(data)))
  }

  RemoveLiqudity(request: MsgRemoveLiqudity): Promise<MsgRemoveLiqudityResponse> {
    const data = MsgRemoveLiqudity.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'RemoveLiqudity', data)
    return promise.then((data) => MsgRemoveLiqudityResponse.decode(new Reader(data)))
  }

  AddLiqudity(request: MsgAddLiqudity): Promise<MsgAddLiqudityResponse> {
    const data = MsgAddLiqudity.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'AddLiqudity', data)
    return promise.then((data) => MsgAddLiqudityResponse.decode(new Reader(data)))
  }

  CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse> {
    const data = MsgCreatePool.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'CreatePool', data)
    return promise.then((data) => MsgCreatePoolResponse.decode(new Reader(data)))
  }

  UpdatePool(request: MsgUpdatePool): Promise<MsgUpdatePoolResponse> {
    const data = MsgUpdatePool.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'UpdatePool', data)
    return promise.then((data) => MsgUpdatePoolResponse.decode(new Reader(data)))
  }

  DeletePool(request: MsgDeletePool): Promise<MsgDeletePoolResponse> {
    const data = MsgDeletePool.encode(request).finish()
    const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'DeletePool', data)
    return promise.then((data) => MsgDeletePoolResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
