package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRemoveLiqudity{}

func NewMsgRemoveLiqudity(creator string, amount uint64) *MsgRemoveLiqudity {
	return &MsgRemoveLiqudity{
		Creator: creator,
		Amount:  amount,
	}
}

func (msg *MsgRemoveLiqudity) Route() string {
	return RouterKey
}

func (msg *MsgRemoveLiqudity) Type() string {
	return "RemoveLiqudity"
}

func (msg *MsgRemoveLiqudity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRemoveLiqudity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRemoveLiqudity) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
