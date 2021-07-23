package cli

import (
	"crypto/sha256"
	"fmt"
	"reflect"
	"unsafe"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/robert-trifffin/uniswap/x/uniswap/types"
)

func UnsafeStrToBytes(s string) []byte {
	var buf []byte
	sHdr := (*reflect.StringHeader)(unsafe.Pointer(&s))
	bufHdr := (*reflect.SliceHeader)(unsafe.Pointer(&buf))
	bufHdr.Data = sHdr.Data
	bufHdr.Cap = sHdr.Len
	bufHdr.Len = sHdr.Len
	return buf
}

func NewPoolAddress(poolId uint64) sdk.AccAddress {
	key := append([]byte("pool"), sdk.Uint64ToBigEndian(poolId)...)
	return Module(types.ModuleName, key)[0:20]
}

func Module(moduleName string, key []byte) []byte {
	mKey := append([]byte(moduleName), 0)
	return Hash("module", append(mKey, key...))
}

func Hash(typ string, key []byte) []byte {
	hasher := sha256.New()
	_, err := hasher.Write(UnsafeStrToBytes(typ))
	if err != nil {
		panic(fmt.Errorf("logic error - this should never happen. %w", err))
	}
	th := hasher.Sum(nil)
	hasher.Reset()
	_, err = hasher.Write(th)
	if err != nil {
		panic(fmt.Errorf("logic error - this should never happen. %w", err))
	}
	_, err = hasher.Write(key)
	if err != nil {
		panic(fmt.Errorf("logic error - this should never happen. %w", err))
	}
	return hasher.Sum(nil)
}

func CmdCreatePool() *cobra.Command {
	cmd := &cobra.Command{
		//Use:   "create-pool [address] [denom1] [denom2] [amount1] [amount2] [total]",
		Use:   "create-pool [address] [denom1] [denom2] [amount1] [amount2] [total]",
		Short: "Create Pool",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			//argsAddress, err := cast.ToStringE(args[0])
			_, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsDenom1, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsDenom2, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsAmount1, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argsAmount2, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argsTotal, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			poolAddr := NewPoolAddress(0)

			poolAddr, err = sdk.AccAddressFromBech32(poolAddr.String())
			if err != nil {
				return err
			}
			//msg := types.NewMsgCreatePool(clientCtx.GetFromAddress().String(), poolAddr.String(), argsDenom1, argsDenom2, argsAmount1, argsAmount2, argsTotal)
			msg := types.NewMsgCreatePool(clientCtx.GetFromAddress().String(), poolAddr.String(), argsDenom1, argsDenom2, argsAmount1, argsAmount2, argsTotal)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdatePool() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-pool [address] [denom1] [denom2] [amount1] [amount2] [total]",
		Short: "Update Pool",
		Args:  cobra.ExactArgs(6),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAddress, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsDenom1, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsDenom2, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsAmount1, err := cast.ToUint64E(args[3])
			if err != nil {
				return err
			}
			argsAmount2, err := cast.ToUint64E(args[4])
			if err != nil {
				return err
			}
			argsTotal, err := cast.ToUint64E(args[5])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePool(clientCtx.GetFromAddress().String(), argsAddress, argsDenom1, argsDenom2, argsAmount1, argsAmount2, argsTotal)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeletePool() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-pool",
		Short: "Delete Pool",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeletePool(clientCtx.GetFromAddress().String())
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
