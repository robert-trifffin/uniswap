/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'roberttrifffin.uniswap.uniswap';
const baseMsgRemoveLiqudity = { creator: '', amount: 0 };
export const MsgRemoveLiqudity = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.amount !== 0) {
            writer.uint32(16).uint64(message.amount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRemoveLiqudity };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.amount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRemoveLiqudity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = Number(object.amount);
        }
        else {
            message.amount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRemoveLiqudity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = 0;
        }
        return message;
    }
};
const baseMsgRemoveLiqudityResponse = {};
export const MsgRemoveLiqudityResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRemoveLiqudityResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgRemoveLiqudityResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRemoveLiqudityResponse };
        return message;
    }
};
const baseMsgAddLiqudity = { creator: '', denom1: '', denom2: '', amount1: 0, amount2: 0 };
export const MsgAddLiqudity = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.denom1 !== '') {
            writer.uint32(18).string(message.denom1);
        }
        if (message.denom2 !== '') {
            writer.uint32(26).string(message.denom2);
        }
        if (message.amount1 !== 0) {
            writer.uint32(32).uint64(message.amount1);
        }
        if (message.amount2 !== 0) {
            writer.uint32(40).uint64(message.amount2);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddLiqudity };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.denom1 = reader.string();
                    break;
                case 3:
                    message.denom2 = reader.string();
                    break;
                case 4:
                    message.amount1 = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.amount2 = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgAddLiqudity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = String(object.denom1);
        }
        else {
            message.denom1 = '';
        }
        if (object.denom2 !== undefined && object.denom2 !== null) {
            message.denom2 = String(object.denom2);
        }
        else {
            message.denom2 = '';
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = Number(object.amount1);
        }
        else {
            message.amount1 = 0;
        }
        if (object.amount2 !== undefined && object.amount2 !== null) {
            message.amount2 = Number(object.amount2);
        }
        else {
            message.amount2 = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.denom1 !== undefined && (obj.denom1 = message.denom1);
        message.denom2 !== undefined && (obj.denom2 = message.denom2);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        message.amount2 !== undefined && (obj.amount2 = message.amount2);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddLiqudity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = object.denom1;
        }
        else {
            message.denom1 = '';
        }
        if (object.denom2 !== undefined && object.denom2 !== null) {
            message.denom2 = object.denom2;
        }
        else {
            message.denom2 = '';
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        else {
            message.amount1 = 0;
        }
        if (object.amount2 !== undefined && object.amount2 !== null) {
            message.amount2 = object.amount2;
        }
        else {
            message.amount2 = 0;
        }
        return message;
    }
};
const baseMsgAddLiqudityResponse = {};
export const MsgAddLiqudityResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddLiqudityResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgAddLiqudityResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAddLiqudityResponse };
        return message;
    }
};
const baseMsgCreatePool = { creator: '', address: '', denom1: '', denom2: '', amount1: 0, amount2: 0, total: 0 };
export const MsgCreatePool = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== '') {
            writer.uint32(26).string(message.address);
        }
        if (message.denom1 !== '') {
            writer.uint32(34).string(message.denom1);
        }
        if (message.denom2 !== '') {
            writer.uint32(42).string(message.denom2);
        }
        if (message.amount1 !== 0) {
            writer.uint32(48).uint64(message.amount1);
        }
        if (message.amount2 !== 0) {
            writer.uint32(56).uint64(message.amount2);
        }
        if (message.total !== 0) {
            writer.uint32(64).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePool };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.denom1 = reader.string();
                    break;
                case 5:
                    message.denom2 = reader.string();
                    break;
                case 6:
                    message.amount1 = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.amount2 = longToNumber(reader.uint64());
                    break;
                case 8:
                    message.total = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreatePool };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = String(object.denom1);
        }
        else {
            message.denom1 = '';
        }
        if (object.denom2 !== undefined && object.denom2 !== null) {
            message.denom2 = String(object.denom2);
        }
        else {
            message.denom2 = '';
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = Number(object.amount1);
        }
        else {
            message.amount1 = 0;
        }
        if (object.amount2 !== undefined && object.amount2 !== null) {
            message.amount2 = Number(object.amount2);
        }
        else {
            message.amount2 = 0;
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = Number(object.total);
        }
        else {
            message.total = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        message.denom1 !== undefined && (obj.denom1 = message.denom1);
        message.denom2 !== undefined && (obj.denom2 = message.denom2);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        message.amount2 !== undefined && (obj.amount2 = message.amount2);
        message.total !== undefined && (obj.total = message.total);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreatePool };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = object.denom1;
        }
        else {
            message.denom1 = '';
        }
        if (object.denom2 !== undefined && object.denom2 !== null) {
            message.denom2 = object.denom2;
        }
        else {
            message.denom2 = '';
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        else {
            message.amount1 = 0;
        }
        if (object.amount2 !== undefined && object.amount2 !== null) {
            message.amount2 = object.amount2;
        }
        else {
            message.amount2 = 0;
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        else {
            message.total = 0;
        }
        return message;
    }
};
const baseMsgCreatePoolResponse = {};
export const MsgCreatePoolResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreatePoolResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgCreatePoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreatePoolResponse };
        return message;
    }
};
const baseMsgUpdatePool = { creator: '', address: '', denom1: '', denom2: '', amount1: 0, amount2: 0, total: 0 };
export const MsgUpdatePool = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== '') {
            writer.uint32(26).string(message.address);
        }
        if (message.denom1 !== '') {
            writer.uint32(34).string(message.denom1);
        }
        if (message.denom2 !== '') {
            writer.uint32(42).string(message.denom2);
        }
        if (message.amount1 !== 0) {
            writer.uint32(48).uint64(message.amount1);
        }
        if (message.amount2 !== 0) {
            writer.uint32(56).uint64(message.amount2);
        }
        if (message.total !== 0) {
            writer.uint32(64).uint64(message.total);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePool };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.address = reader.string();
                    break;
                case 4:
                    message.denom1 = reader.string();
                    break;
                case 5:
                    message.denom2 = reader.string();
                    break;
                case 6:
                    message.amount1 = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.amount2 = longToNumber(reader.uint64());
                    break;
                case 8:
                    message.total = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdatePool };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = String(object.denom1);
        }
        else {
            message.denom1 = '';
        }
        if (object.denom2 !== undefined && object.denom2 !== null) {
            message.denom2 = String(object.denom2);
        }
        else {
            message.denom2 = '';
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = Number(object.amount1);
        }
        else {
            message.amount1 = 0;
        }
        if (object.amount2 !== undefined && object.amount2 !== null) {
            message.amount2 = Number(object.amount2);
        }
        else {
            message.amount2 = 0;
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = Number(object.total);
        }
        else {
            message.total = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        message.denom1 !== undefined && (obj.denom1 = message.denom1);
        message.denom2 !== undefined && (obj.denom2 = message.denom2);
        message.amount1 !== undefined && (obj.amount1 = message.amount1);
        message.amount2 !== undefined && (obj.amount2 = message.amount2);
        message.total !== undefined && (obj.total = message.total);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdatePool };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.denom1 !== undefined && object.denom1 !== null) {
            message.denom1 = object.denom1;
        }
        else {
            message.denom1 = '';
        }
        if (object.denom2 !== undefined && object.denom2 !== null) {
            message.denom2 = object.denom2;
        }
        else {
            message.denom2 = '';
        }
        if (object.amount1 !== undefined && object.amount1 !== null) {
            message.amount1 = object.amount1;
        }
        else {
            message.amount1 = 0;
        }
        if (object.amount2 !== undefined && object.amount2 !== null) {
            message.amount2 = object.amount2;
        }
        else {
            message.amount2 = 0;
        }
        if (object.total !== undefined && object.total !== null) {
            message.total = object.total;
        }
        else {
            message.total = 0;
        }
        return message;
    }
};
const baseMsgUpdatePoolResponse = {};
export const MsgUpdatePoolResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdatePoolResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdatePoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdatePoolResponse };
        return message;
    }
};
const baseMsgDeletePool = { creator: '' };
export const MsgDeletePool = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePool };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeletePool };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeletePool };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        return message;
    }
};
const baseMsgDeletePoolResponse = {};
export const MsgDeletePoolResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeletePoolResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeletePoolResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeletePoolResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    RemoveLiqudity(request) {
        const data = MsgRemoveLiqudity.encode(request).finish();
        const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'RemoveLiqudity', data);
        return promise.then((data) => MsgRemoveLiqudityResponse.decode(new Reader(data)));
    }
    AddLiqudity(request) {
        const data = MsgAddLiqudity.encode(request).finish();
        const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'AddLiqudity', data);
        return promise.then((data) => MsgAddLiqudityResponse.decode(new Reader(data)));
    }
    CreatePool(request) {
        const data = MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'CreatePool', data);
        return promise.then((data) => MsgCreatePoolResponse.decode(new Reader(data)));
    }
    UpdatePool(request) {
        const data = MsgUpdatePool.encode(request).finish();
        const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'UpdatePool', data);
        return promise.then((data) => MsgUpdatePoolResponse.decode(new Reader(data)));
    }
    DeletePool(request) {
        const data = MsgDeletePool.encode(request).finish();
        const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Msg', 'DeletePool', data);
        return promise.then((data) => MsgDeletePoolResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
