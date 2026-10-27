# CCS1 (Combo 1)

## Tổng quan (Overview)

- **Tiêu chuẩn đầu nối:** SAE J1772 (Type 1 AC và Combo DC), IEC 62196-3 cấu hình EE.
- **Giao tiếp:** giống hệt CCS2 – PLC trên CP, DIN SPEC 70121 / ISO 15118. Phần mềm EVCC thường dùng chung cho CCS1 và CCS2.
- **Khác biệt chính so với CCS2:** phần AC là Type 1 (1 pha), mạch PP dùng công tắc chốt S3.
- **Xu hướng:** tại Bắc Mỹ, nhiều hãng chuyển sang NACS (SAE J3400) từ khoảng 2025; CCS1 vẫn còn trên nhiều trụ và xe hiện hữu.

## Sơ đồ chân (Pinout)

| Chân | Tên | Sạc AC (Type 1) | Sạc DC (Combo 1) |
|---|---|---|---|
| L1 | Line 1 | Pha / L1 | Không dùng |
| L2/N | Line 2 / Neutral | L2 (split-phase 240 V) hoặc N (120 V) | Không dùng |
| PE | Ground | Tiếp địa | Tiếp địa |
| CP | Control Pilot | PWM | PWM 5 % + PLC |
| PP | Proximity | Mạch S3 (150 Ω / 480 Ω) | Mạch S3 |
| DC+ | DC positive | — | Dương DC |
| DC− | DC negative | — | Âm DC |

## Định mức (Ratings – tham khảo)

| Thông số | Giá trị |
|---|---|
| AC Level 1 | 120 V, đến 16 A |
| AC Level 2 | 208 – 240 V, đến 80 A |
| DC | đến 1000 V; dòng tùy cáp (thường 200 A không làm mát, đến ~500 A có làm mát) |

## Lưu ý khi phát triển (Engineering notes)

- **Lưới 208 V** (3 pha, đo giữa 2 pha) ở toà nhà thương mại Mỹ cho công suất thấp hơn 240 V ~13 %.
- **Proximity S3:** khi người dùng nhấn nút trên súng, xe phải ngắt dòng; trên CCS1 DC cũng nên dừng phiên một cách có kiểm soát.
- Hệ thống tiếp địa và nhiễu PLC trên trụ Mỹ có thể khác châu Âu; nên kiểm thử SLAC trên nhiều mẫu trụ.
