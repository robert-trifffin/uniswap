package uniswap

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/robert-trifffin/uniswap/x/uniswap/keeper"
	"github.com/robert-trifffin/uniswap/x/uniswap/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set if defined
	if genState.Pool != nil {
		k.SetPool(ctx, *genState.Pool)
	}

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all pool
	pool, found := k.GetPool(ctx)
	if found {
		genesis.Pool = &pool
	}

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
