package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/robert-trifffin/uniswap/x/uniswap/types"
)

var _ = strconv.Itoa(0)

func CmdRemoveLiqudity() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "remove-liqudity [amount]",
		Short: "Broadcast message RemoveLiqudity",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAmount, _ := strconv.ParseUint(args[0], 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgRemoveLiqudity(clientCtx.GetFromAddress().String(), uint64(argsAmount))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
