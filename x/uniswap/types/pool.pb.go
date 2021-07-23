// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: uniswap/pool.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Pool struct {
	Creator string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Address string `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
	Denom1  string `protobuf:"bytes,3,opt,name=denom1,proto3" json:"denom1,omitempty"`
	Denom2  string `protobuf:"bytes,4,opt,name=denom2,proto3" json:"denom2,omitempty"`
	Amount1 uint64 `protobuf:"varint,5,opt,name=amount1,proto3" json:"amount1,omitempty"`
	Amount2 uint64 `protobuf:"varint,6,opt,name=amount2,proto3" json:"amount2,omitempty"`
	Total   uint64 `protobuf:"varint,7,opt,name=total,proto3" json:"total,omitempty"`
}

func (m *Pool) Reset()         { *m = Pool{} }
func (m *Pool) String() string { return proto.CompactTextString(m) }
func (*Pool) ProtoMessage()    {}
func (*Pool) Descriptor() ([]byte, []int) {
	return fileDescriptor_8f5297762cca902d, []int{0}
}
func (m *Pool) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Pool) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Pool.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Pool) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Pool.Merge(m, src)
}
func (m *Pool) XXX_Size() int {
	return m.Size()
}
func (m *Pool) XXX_DiscardUnknown() {
	xxx_messageInfo_Pool.DiscardUnknown(m)
}

var xxx_messageInfo_Pool proto.InternalMessageInfo

func (m *Pool) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Pool) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Pool) GetDenom1() string {
	if m != nil {
		return m.Denom1
	}
	return ""
}

func (m *Pool) GetDenom2() string {
	if m != nil {
		return m.Denom2
	}
	return ""
}

func (m *Pool) GetAmount1() uint64 {
	if m != nil {
		return m.Amount1
	}
	return 0
}

func (m *Pool) GetAmount2() uint64 {
	if m != nil {
		return m.Amount2
	}
	return 0
}

func (m *Pool) GetTotal() uint64 {
	if m != nil {
		return m.Total
	}
	return 0
}

func init() {
	proto.RegisterType((*Pool)(nil), "roberttrifffin.uniswap.uniswap.Pool")
}

func init() { proto.RegisterFile("uniswap/pool.proto", fileDescriptor_8f5297762cca902d) }

var fileDescriptor_8f5297762cca902d = []byte{
	// 245 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0xb1, 0x4e, 0xc3, 0x30,
	0x10, 0x86, 0x63, 0x48, 0x53, 0xe1, 0xd1, 0xaa, 0xd0, 0x89, 0xc1, 0xaa, 0x98, 0xba, 0x90, 0xa8,
	0xe6, 0x0d, 0x98, 0x19, 0x50, 0x47, 0xb6, 0xa4, 0x71, 0x42, 0xa4, 0x24, 0x17, 0x39, 0x17, 0x01,
	0x6f, 0xc1, 0xc3, 0xf0, 0x10, 0x8c, 0x1d, 0x19, 0x51, 0xf2, 0x22, 0xa8, 0x76, 0xdc, 0x76, 0xf2,
	0x7d, 0xff, 0x77, 0xbe, 0xe1, 0xe7, 0x62, 0x68, 0xab, 0xfe, 0x3d, 0xed, 0x92, 0x0e, 0xb1, 0x8e,
	0x3b, 0x83, 0x84, 0x42, 0x1a, 0xcc, 0xb4, 0x21, 0x32, 0x55, 0x51, 0x14, 0x55, 0x1b, 0xcf, 0x2b,
	0xfe, 0xbd, 0x5b, 0x95, 0x58, 0xa2, 0x5d, 0x4d, 0x8e, 0x93, 0xfb, 0x75, 0xff, 0xcd, 0x78, 0xf8,
	0x82, 0x58, 0x0b, 0xe0, 0xcb, 0xbd, 0xd1, 0x29, 0xa1, 0x01, 0xb6, 0x66, 0x9b, 0x9b, 0x9d, 0xc7,
	0xa3, 0x49, 0xf3, 0xdc, 0xe8, 0xbe, 0x87, 0x2b, 0x67, 0x66, 0x14, 0xb7, 0x3c, 0xca, 0x75, 0x8b,
	0xcd, 0x16, 0xae, 0xad, 0x98, 0xe9, 0x94, 0x2b, 0x08, 0x2f, 0x72, 0x65, 0x2f, 0x35, 0x38, 0xb4,
	0xb4, 0x85, 0xc5, 0x9a, 0x6d, 0xc2, 0x9d, 0xc7, 0xb3, 0x51, 0x10, 0x5d, 0x1a, 0x25, 0x56, 0x7c,
	0x41, 0x48, 0x69, 0x0d, 0x4b, 0x9b, 0x3b, 0x78, 0x7a, 0xfe, 0x19, 0x25, 0x3b, 0x8c, 0x92, 0xfd,
	0x8d, 0x92, 0x7d, 0x4d, 0x32, 0x38, 0x4c, 0x32, 0xf8, 0x9d, 0x64, 0xf0, 0xaa, 0xca, 0x8a, 0xde,
	0x86, 0x2c, 0xde, 0x63, 0x93, 0xb8, 0x46, 0x1e, 0x7c, 0x25, 0x89, 0x6f, 0xed, 0xe3, 0x34, 0xd1,
	0x67, 0xa7, 0xfb, 0x2c, 0xb2, 0x5d, 0x3c, 0xfe, 0x07, 0x00, 0x00, 0xff, 0xff, 0x09, 0x49, 0xbc,
	0xe4, 0x57, 0x01, 0x00, 0x00,
}

func (m *Pool) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Pool) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Pool) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Total != 0 {
		i = encodeVarintPool(dAtA, i, uint64(m.Total))
		i--
		dAtA[i] = 0x38
	}
	if m.Amount2 != 0 {
		i = encodeVarintPool(dAtA, i, uint64(m.Amount2))
		i--
		dAtA[i] = 0x30
	}
	if m.Amount1 != 0 {
		i = encodeVarintPool(dAtA, i, uint64(m.Amount1))
		i--
		dAtA[i] = 0x28
	}
	if len(m.Denom2) > 0 {
		i -= len(m.Denom2)
		copy(dAtA[i:], m.Denom2)
		i = encodeVarintPool(dAtA, i, uint64(len(m.Denom2)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Denom1) > 0 {
		i -= len(m.Denom1)
		copy(dAtA[i:], m.Denom1)
		i = encodeVarintPool(dAtA, i, uint64(len(m.Denom1)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintPool(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintPool(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPool(dAtA []byte, offset int, v uint64) int {
	offset -= sovPool(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Pool) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPool(uint64(l))
	}
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovPool(uint64(l))
	}
	l = len(m.Denom1)
	if l > 0 {
		n += 1 + l + sovPool(uint64(l))
	}
	l = len(m.Denom2)
	if l > 0 {
		n += 1 + l + sovPool(uint64(l))
	}
	if m.Amount1 != 0 {
		n += 1 + sovPool(uint64(m.Amount1))
	}
	if m.Amount2 != 0 {
		n += 1 + sovPool(uint64(m.Amount2))
	}
	if m.Total != 0 {
		n += 1 + sovPool(uint64(m.Total))
	}
	return n
}

func sovPool(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPool(x uint64) (n int) {
	return sovPool(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Pool) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPool
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Pool: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Pool: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPool
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPool
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPool
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPool
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPool
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPool
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denom1", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPool
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPool
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPool
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Denom1 = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Denom2", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPool
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPool
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPool
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Denom2 = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount1", wireType)
			}
			m.Amount1 = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPool
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Amount1 |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 6:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Amount2", wireType)
			}
			m.Amount2 = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPool
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Amount2 |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 7:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Total", wireType)
			}
			m.Total = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPool
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Total |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipPool(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPool
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPool(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPool
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPool
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPool
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPool
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPool
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPool
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPool        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPool          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPool = fmt.Errorf("proto: unexpected end of group")
)