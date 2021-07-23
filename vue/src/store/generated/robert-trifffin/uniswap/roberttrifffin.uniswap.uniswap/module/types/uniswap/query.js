/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Pool } from '../uniswap/pool';
export const protobufPackage = 'roberttrifffin.uniswap.uniswap';
const baseQueryGetPoolRequest = {};
export const QueryGetPoolRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPoolRequest };
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
        const message = { ...baseQueryGetPoolRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryGetPoolRequest };
        return message;
    }
};
const baseQueryGetPoolResponse = {};
export const QueryGetPoolResponse = {
    encode(message, writer = Writer.create()) {
        if (message.Pool !== undefined) {
            Pool.encode(message.Pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPoolResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Pool = Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPoolResponse };
        if (object.Pool !== undefined && object.Pool !== null) {
            message.Pool = Pool.fromJSON(object.Pool);
        }
        else {
            message.Pool = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.Pool !== undefined && (obj.Pool = message.Pool ? Pool.toJSON(message.Pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPoolResponse };
        if (object.Pool !== undefined && object.Pool !== null) {
            message.Pool = Pool.fromPartial(object.Pool);
        }
        else {
            message.Pool = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Pool(request) {
        const data = QueryGetPoolRequest.encode(request).finish();
        const promise = this.rpc.request('roberttrifffin.uniswap.uniswap.Query', 'Pool', data);
        return promise.then((data) => QueryGetPoolResponse.decode(new Reader(data)));
    }
}
