package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	// this line is used by starport scaffolding # 2
	cdc.RegisterConcrete(&MsgRemoveLiqudity{}, "uniswap/RemoveLiqudity", nil)

	cdc.RegisterConcrete(&MsgAddLiqudity{}, "uniswap/AddLiqudity", nil)

	cdc.RegisterConcrete(&MsgCreatePool{}, "uniswap/CreatePool", nil)
	cdc.RegisterConcrete(&MsgUpdatePool{}, "uniswap/UpdatePool", nil)
	cdc.RegisterConcrete(&MsgDeletePool{}, "uniswap/DeletePool", nil)

}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRemoveLiqudity{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddLiqudity{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreatePool{},
		&MsgUpdatePool{},
		&MsgDeletePool{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
