# An toàn HV (HV Safety)

## Các biện pháp chính (Key measures)

| Biện pháp | Tiếng Anh | Mục đích |
|---|---|---|
| Cách điện kép / nối đất vỏ | Double insulation / equipotential bonding | Hệ HV là **IT system** (cách ly với khung xe); vỏ linh kiện nối đẳng thế với khung |
| Giám sát cách điện | Insulation monitoring (IMD) | Phát hiện rò HV ra khung xe |
| Khóa liên động | HVIL | Phát hiện đầu nối HV bị tháo/nắp mở → cắt HV |
| Xả chủ động | Active discharge | Xả tụ DC-link về < 60 V nhanh sau khi cắt |
| Xả thụ động | Passive discharge | Điện trở xả dự phòng (thường cho phép đến ~2 phút) |
| Cắt khi va chạm | Crash disconnect | Tín hiệu từ airbag ECU → mở contactor / kích pyro-fuse |
| Ký hiệu & màu | Marking | Cáp HV màu cam, nhãn cảnh báo |

## Điện trở cách điện (Isolation resistance)

Yêu cầu tối thiểu thường gặp (UN ECE R100, ISO 6469-3, GB 18384):

| Mạch | Yêu cầu tối thiểu |
|---|---|
| Mạch DC (không nối galvanic với AC) | **≥ 100 Ω/V** |
| Mạch có thành phần AC hoặc nối với AC | **≥ 500 Ω/V** |

Ví dụ: pack 800 V → tối thiểu 80 kΩ (DC); thực tế OEM đặt ngưỡng cảnh báo cao hơn nhiều (vài trăm kΩ – MΩ).

!!! note "Khi sạc DC"
    Khi contactor sạc đóng, hệ HV của xe và đầu ra trụ được **nối song song**. IMD của xe và IMD của trụ có thể ảnh hưởng nhau.
    Theo IEC 61851-23, trụ thực hiện **CableCheck** (kiểm tra cách điện cáp) trước khi cấp điện; nhiều xe tạm ngắt IMD của mình trong khi sạc DC để tránh đo sai.

### Nguyên lý đo (Measurement principle)

IMD đóng lần lượt điện trở đo đã biết giữa HV+ / khung và HV− / khung, đo điện áp và giải hệ phương trình để ra \(R_{iso+}\) và \(R_{iso-}\). Tụ Y (*Y-capacitance*) lớn làm chậm phép đo và gây sai số.

## HVIL

- Vòng dây LV đi qua tất cả đầu nối HV và nắp bảo dưỡng; một chân ngắn hơn trong đầu nối đảm bảo HVIL ngắt **trước** chân HV (*first-make-last-break*).
- Tín hiệu: dòng DC (~10 – 20 mA) hoặc PWM để phân biệt hở mạch / ngắn mạch xuống mass / ngắn mạch lên nguồn.
- Phản ứng: cấm đóng contactor; nếu đang chạy, thường chỉ cảnh báo và hạn chế, cắt khi xe dừng (tùy chiến lược OEM).

## Xả chủ động (Active discharge)

- Yêu cầu thường gặp: điện áp DC-link giảm xuống **< 60 V trong vòng vài giây** (nhiều OEM yêu cầu ≤ 2 – 5 s) sau khi cắt HV hoặc va chạm.
- Thực hiện bằng điện trở xả có điều khiển, hoặc dùng inverter đốt năng lượng vào cuộn dây động cơ.

## Quy trình làm việc an toàn (Safe work procedure)

1. Tắt xe, rút chìa khóa / thẻ, chờ theo hướng dẫn OEM.
2. Tháo **nắp bảo dưỡng** (*service disconnect / MSD*) nếu có, cất giữ.
3. Khóa và gắn thẻ (*Lock-out / Tag-out*).
4. **Kiểm tra không có điện áp** (*verify zero voltage*) bằng đồng hồ CAT III/IV đúng cấp, kiểm tra đồng hồ trước và sau khi đo.
5. Dùng găng cách điện đúng cấp, dụng cụ cách điện.
