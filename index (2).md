# 4. Giao tiếp (Communication)

## Ngăn xếp giao tiếp CCS / NACS (CCS / NACS stack)

| Lớp (OSI) | Thành phần | Tiêu chuẩn |
|---|---|---|
| Ứng dụng (Application) | Bản tin sạc: SessionSetup, ChargeParameterDiscovery, CurrentDemand… | DIN SPEC 70121, ISO 15118-2, ISO 15118-20 |
| Trình bày (Presentation) | Mã hóa **EXI** (XML nhị phân) | W3C EXI, schema XSD của từng chuẩn |
| Phiên (Session) | **V2GTP** (header 8 byte) | ISO 15118-2 / DIN 70121 |
| Truyền tải (Transport) | TCP (+ **TLS** tùy chọn hoặc bắt buộc) / UDP cho SDP | ISO 15118-2/-20 |
| Mạng (Network) | **IPv6** (link-local) | RFC 8200 |
| Liên kết (Data link) | HomePlug Green PHY MAC, **SLAC** | ISO 15118-3 |
| Vật lý (Physical) | HomePlug Green PHY PLC trên **CP–PE** | ISO 15118-3, HomePlug GP |

## So sánh nhanh các giao thức (Protocols at a glance)

| | DIN SPEC 70121 | ISO 15118-2 | ISO 15118-20 | GB/T 27930 |
|---|---|---|---|---|
| Năm | 2012 / 2014 | 2014 | 2022 | 2015 / 2023 |
| Sạc AC HLC | ✗ | ✓ | ✓ | ✗ (AC dùng CP) |
| Sạc DC | ✓ | ✓ | ✓ | ✓ |
| TLS | ✗ | Tùy chọn (TLS 1.2), bắt buộc cho Plug & Charge | **Bắt buộc (TLS 1.3)** | ✗ |
| Plug & Charge | ✗ | ✓ | ✓ | ✗ |
| Truyền công suất hai chiều (BPT) | ✗ | ✗ | ✓ | Đang phát triển |
| Đường truyền | PLC | PLC | PLC (MCS: Ethernet) | CAN 250 kbit/s |

## Trang con

- [PLC & SLAC](plc-slac.md)
- [DIN SPEC 70121](din70121.md)
- [ISO 15118-2](iso15118-2.md)
- [ISO 15118-20](iso15118-20.md)
- [GB/T 27930 (CAN)](gbt27930.md)
- [Plug & Charge (PKI)](plug-and-charge.md)
