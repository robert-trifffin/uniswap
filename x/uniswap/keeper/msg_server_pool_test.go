package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/robert-trifffin/uniswap/x/uniswap/types"
)

func TestPoolMsgServerCreate(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	srv := NewMsgServerImpl(*keeper)
	wctx := sdk.WrapSDKContext(ctx)
	creator := "A"
	expected := &types.MsgCreatePool{Creator: creator}
	_, err := srv.CreatePool(wctx, expected)
	require.NoError(t, err)
	rst, found := keeper.GetPool(ctx)
	require.True(t, found)
	assert.Equal(t, expected.Creator, rst.Creator)
}

func TestPoolMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdatePool
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdatePool{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdatePool{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			keeper, ctx := setupKeeper(t)
			srv := NewMsgServerImpl(*keeper)
			wctx := sdk.WrapSDKContext(ctx)
			expected := &types.MsgCreatePool{Creator: creator}
			_, err := srv.CreatePool(wctx, expected)
			require.NoError(t, err)

			_, err = srv.UpdatePool(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				rst, found := keeper.GetPool(ctx)
				require.True(t, found)
				assert.Equal(t, expected.Creator, rst.Creator)
			}
		})
	}
}

func TestPoolMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeletePool
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeletePool{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeletePool{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			keeper, ctx := setupKeeper(t)
			srv := NewMsgServerImpl(*keeper)
			wctx := sdk.WrapSDKContext(ctx)

			_, err := srv.CreatePool(wctx, &types.MsgCreatePool{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeletePool(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				_, found := keeper.GetPool(ctx)
				require.False(t, found)
			}
		})
	}
}
