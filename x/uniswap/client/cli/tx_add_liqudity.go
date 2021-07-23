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

func CmdAddLiqudity() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-liqudity [denom1] [denom2] [amount1] [amount2]",
		Short: "Broadcast message AddLiqudity",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsDenom1 := string(args[0])
			argsDenom2 := string(args[1])
			argsAmount1, _ := strconv.ParseUint(args[2], 10, 64)
			argsAmount2, _ := strconv.ParseUint(args[3], 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAddLiqudity(clientCtx.GetFromAddress().String(), string(argsDenom1), string(argsDenom2), uint64(argsAmount1), uint64(argsAmount2))
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
