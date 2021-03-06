package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/robert-trifffin/uniswap/x/uniswap/types"
	"github.com/spf13/cobra"
)

func CmdShowPool() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-pool",
		Short: "shows Pool",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetPoolRequest{}

			res, err := queryClient.Pool(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
