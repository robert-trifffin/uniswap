package keeper

import (
	"context"
	"fmt"
	"math"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/robert-trifffin/uniswap/x/uniswap/types"
)

func (k msgServer) AddLiqudity(goCtx context.Context, msg *types.MsgAddLiqudity) (*types.MsgAddLiqudityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	//_ = ctx
	pool, isFound := k.GetPool(ctx)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "no pool")
	}

	var liquidity uint64
	_amount0 := msg.Amount1
	_amount1 := msg.Amount2
	reserve0 := pool.Amount1
	reserve1 := pool.Amount2
	totalSupply := pool.Total

	if pool.Total == 0 {
		liquidity = uint64(math.Sqrt(float64(msg.Amount1 * msg.Amount2)))
	} else {
		liquidity = uint64(math.Min(float64(_amount0*totalSupply/reserve0), float64(_amount1*totalSupply/reserve1)))
	}

	_ = liquidity
	newAmount1 := pool.Amount1 + _amount0
	newAmount2 := pool.Amount1 + _amount1

	amount1 := sdk.NewInt(int64(msg.Amount1))
	amount2 := sdk.NewInt(int64(msg.Amount2))
	sender, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	coin1 := k.bankKeeper.GetBalance(ctx, sender, msg.Denom1)
	coin2 := k.bankKeeper.GetBalance(ctx, sender, msg.Denom2)

	err = k.bankKeeper.SendCoins(ctx, sender, sdk.AccAddress(pool.Address),
		sdk.Coins{
			sdk.Coin{Denom: msg.Denom1, Amount: amount1},
			sdk.Coin{Denom: msg.Denom2, Amount: amount2},
		}.Sort(),
	)

	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("amounts %s %s %d %s %d", msg.Creator, coin1.Denom, coin1.Amount.Int64(), coin2.Denom, coin2.Amount.Int64()))
		//return nil, err
	}

	//move token msg.Creator to pool.Address
	var newpool = types.Pool{
		Address: pool.Address,
		Creator: pool.Creator,
		Denom1:  msg.Denom1,
		Denom2:  msg.Denom2,
		Amount1: newAmount1,
		Amount2: newAmount2,
		Total:   totalSupply,
	}

	k.SetPool(
		ctx,
		newpool,
	)
	return &types.MsgAddLiqudityResponse{}, nil
}
