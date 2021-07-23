package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/assert"

	"github.com/robert-trifffin/uniswap/x/uniswap/types"
)

func createTestPool(keeper *Keeper, ctx sdk.Context) types.Pool {
	item := types.Pool{
		Creator: "any",
	}
	keeper.SetPool(ctx, item)
	return item
}

func TestPoolGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	item := createTestPool(keeper, ctx)
	rst, found := keeper.GetPool(ctx)
	assert.True(t, found)
	assert.Equal(t, item, rst)
}
func TestPoolRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	createTestPool(keeper, ctx)
	keeper.RemovePool(ctx)
	_, found := keeper.GetPool(ctx)
	assert.False(t, found)
}
