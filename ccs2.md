# CCS2 (Combo 2)

## Tổng quan (Overview)

- **Tiêu chuẩn đầu nối:** IEC 62196-2 (phần AC Type 2), IEC 62196-3 (cấu hình FF).
- **Tiêu chuẩn hệ thống:** IEC 61851-1, IEC 61851-23 (trụ DC), IEC 61851-24.
- **Giao tiếp:** HomePlug Green PHY PLC trên dây CP–PE, giao thức DIN SPEC 70121, ISO 15118-2, ISO 15118-20.
- **Ý tưởng "Combo":** inlet trên xe = ổ Type 2 phía trên + 2 chân DC phía dưới. Súng AC Type 2 cắm vào phần trên; súng DC Combo 2 chiếm cả hai phần nhưng **chỉ dùng PE, CP, PP** ở phần trên.

## Sơ đồ chân (Pinout)

| Chân | Tên | Sạc AC (Type 2) | Sạc DC (Combo 2) |
|---|---|---|---|
| L1 | Line 1 | Pha 1 | Không dùng (không có trong súng DC) |
| L2 | Line 2 | Pha 2 | Không dùng |
| L3 | Line 3 | Pha 3 | Không dùng |
| N | Neutral | Trung tính | Không dùng |
| PE | Protective Earth | Tiếp địa | Tiếp địa, tham chiếu CP và PLC |
| CP | Control Pilot | PWM | PWM 5 % + PLC |
| PP | Proximity Pilot | \(R_C\) mã hóa dòng cáp | Nhận biết kết nối |
| DC+ | DC positive | — | Dương DC |
| DC− | DC negative | — | Âm DC |

## Định mức (Ratings – tham khảo)

| Thông số | Giá trị |
|---|---|
| Điện áp AC | đến 480 V 3 pha (thực tế 230/400 V) |
| Dòng AC | đến 63 A 3 pha (thực tế phổ biến 16 / 32 A) |
| Điện áp DC | đến 1000 V |
| Dòng DC (cáp không làm mát) | thường 125 – 250 A |
| Dòng DC (cáp làm mát bằng chất lỏng) | đến ~500 A (một số sản phẩm cho phép cao hơn ngắn hạn) |

!!! tip "Giám sát nhiệt"
    Cả súng (phía trụ) và inlet (phía xe) có cảm biến nhiệt (thường PT1000 hoặc NTC) gần chân DC. Đây là nguyên nhân phổ biến của **giảm công suất** (*derating*) khi sạc nhanh.

## Khóa súng (Connector locking)

- Inlet trên xe có **bộ khóa điện** (*actuator lock*) khóa súng trong suốt phiên sạc DC (và AC tùy cấu hình).
- Xe phải xác nhận khóa thành công trước khi cho phép cấp năng lượng; khóa không được nhả khi còn điện áp nguy hiểm trên chân DC.

## Trình tự sạc DC (DC sequence – rút gọn)

1. Cắm súng → PP phát hiện → xe đánh thức EVCC.
2. Trụ đặt CP ở trạng thái B với **duty cycle 5 %** → yêu cầu HLC.
3. SLAC → mạng PLC được thiết lập → SDP → kết nối TCP/TLS.
4. Phiên DIN 70121 / ISO 15118 (xem [Giao tiếp](../giao-tiep/index.md)).
5. Xe chuyển CP sang trạng thái C trước *CableCheck*.
6. CableCheck → PreCharge → PowerDelivery → CurrentDemand → dừng → WeldingDetection → SessionStop.
