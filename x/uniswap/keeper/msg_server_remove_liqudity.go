package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/robert-trifffin/uniswap/x/uniswap/types"
)

func (k msgServer) RemoveLiqudity(goCtx context.Context, msg *types.MsgRemoveLiqudity) (*types.MsgRemoveLiqudityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRemoveLiqudityResponse{}, nil
}
