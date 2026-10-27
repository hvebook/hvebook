# Công cụ (Tools)

| Công cụ | Dùng cho | Ghi chú |
|---|---|---|
| **Oscilloscope** (có probe vi sai hoặc cách ly) | CP: mức điện áp, tần số, duty cycle, nhiễu PLC | Đặt trigger theo sườn PWM |
| **Hộp đo / breakout CP-PP** (*EV simulator / adapter box*) | Giả lập trạng thái A–E, đo CP/PP không cần xe | Có loại cho Type 1, Type 2, CCS |
| **PLC sniffer** + Wireshark (bộ giải mã V2G/EXI) | Bắt gói SLAC, SDP, V2GTP, giải mã EXI | Một số công cụ thương mại và mã nguồn mở hỗ trợ giải mã DIN/ISO 15118 |
| **CAN analyzer** (250 kbit/s, 29-bit) | GB/T 27930, CHAdeMO | Dùng file DBC cho bản tin GB/T |
| **Bộ giả lập trụ / xe** (*EVSE / EV emulator*) | Kiểm thử tương thích, kiểm thử hồi quy | Có thể dùng ngăn xếp mã nguồn mở |
| **Megohmmeter** (đồng hồ đo cách điện) | Đo cách điện HV | Chỉ dùng khi hệ thống đã cô lập, đúng quy trình |
| **Đồng hồ CAT III/IV 1000 V** | Xác minh không có điện áp | Bắt buộc trước khi chạm vào hệ HV |
| **Công cụ chẩn đoán OEM** | Đọc DTC, log BMS/EVCC | Trích xuất log phiên sạc |

## Ngăn xếp mã nguồn mở (Open-source stacks – tham khảo)

- **EVerest** (Linux Foundation Energy): framework phần mềm trụ sạc, hỗ trợ ISO 15118, OCPP.
- **Josev / iso15118** (Python): triển khai ISO 15118-2/-20 cho EVCC và SECC.
- **OpenV2G**: thư viện mã hóa/giải mã EXI cho DIN 70121 / ISO 15118-2.
- **SteVe**, **CitrineOS**: hệ thống quản lý trụ (CSMS) hỗ trợ OCPP.

!!! tip "Log tối thiểu nên có trên EVCC"
    Thời điểm thay đổi trạng thái CP/PP, kết quả SLAC (suy hao), giao thức được chọn, mọi Req/Res kèm ResponseCode, giới hạn BMS theo thời gian, nhiệt độ inlet, điện áp LV, lý do dừng.
