# Bảng so sánh (Comparison)

| Tiêu chí | CCS2 | CCS1 | GB/T (2015) | NACS (J3400) |
|---|---|---|---|---|
| Khu vực | EU, VN, Úc, châu Á | Bắc Mỹ, Hàn Quốc | Trung Quốc | Bắc Mỹ |
| Đầu AC / DC | Chung inlet (Combo) | Chung inlet (Combo) | **Hai inlet riêng** | **Một đầu, chung chân** |
| Số chân DC dùng | 5 (DC+, DC−, PE, CP, PP) | 5 | 9 | 5 |
| Điện áp DC tối đa | 1000 V | 1000 V | 750 / 1000 V | 500 / 1000 V |
| AC tối đa | 3 pha, 63 A | 1 pha, 80 A | 3 pha, 63 A | 1 pha, ~80 A, 277 V |
| Đường giao tiếp DC | PLC trên CP | PLC trên CP | **CAN** (S+/S−) | PLC trên CP |
| Giao thức DC | DIN 70121, ISO 15118-2/-20 | DIN 70121, ISO 15118-2/-20 | GB/T 27930 | DIN 70121, ISO 15118-2/-20 |
| Nhận biết kết nối | PP | PP (có S3) | CC1, CC2 | PP |
| Nguồn phụ từ trụ | Không | Không | **Có (A+/A−, 12 V)** | Không |
| Khóa súng | Ở inlet xe | Ở inlet xe | Ở súng (trụ) | Ở inlet xe |
| Kiểm tra cách điện | Trụ – CableCheck | Trụ – CableCheck | Trụ – trong handshake | Trụ – CableCheck |
| Plug & Charge | ISO 15118 | ISO 15118 | Không có trong GB/T 27930-2015 | ISO 15118 |
| V2G chuẩn hóa | ISO 15118-20 | ISO 15118-20 | Đang phát triển | ISO 15118-20 |

## Bảng tra nhanh trình tự (Sequence mapping)

| Giai đoạn | CCS / NACS (ISO 15118-2) | GB/T 27930 |
|---|---|---|
| Nhận biết kết nối | PP, CP state B | CC1 = 4 V, CC2 = 6 V |
| Thiết lập liên kết | SLAC, SDP, TCP/TLS | Nguồn phụ ON, CAN |
| Bắt tay | SupportedAppProtocol, SessionSetup | CHM / BHM |
| Kiểm tra cách điện | CableCheck | Trong pha handshake (sau CHM/BHM) |
| Nhận dạng | SessionSetup (EVCCID) | CRM / BRM |
| Tham số | ChargeParameterDiscovery | BCP / CTS / CML |
| Sẵn sàng | PreCharge | BRO / CRO |
| Sạc | PowerDelivery + CurrentDemand | BCL / BCS / CCS / BSM |
| Kết thúc | PowerDelivery(stop), WeldingDetection, SessionStop | BST / CST, BSD / CSD |
| Lỗi | ResponseCode, EVErrorCode | BEM / CEM |
