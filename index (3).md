# 1. Hệ thống cao áp (High-Voltage System)

Chương này mô tả các thành phần HV trên xe điện và cách chúng tham gia vào quá trình sạc.

- [Kiến trúc HV](kien-truc.md): sơ đồ khối, nền tảng 400 V và 800 V
- [Pin & BMS](pin-bms.md): cấu trúc pack, chức năng BMS, giới hạn sạc
- [Contactor & Precharge](contactor-precharge.md): BDU/PDU, trình tự đóng cắt, phát hiện hàn dính
- [An toàn HV](an-toan.md): cấp điện áp, HVIL, giám sát cách điện, xả chủ động
- [OBC & DC-DC](obc-dcdc.md): bộ sạc AC trên xe, bộ chuyển đổi HV→LV

!!! info "Phạm vi điện áp / Voltage classes (ISO 6469-3, UN ECE R100)"
    | Cấp (Class) | DC | AC (rms) |
    |---|---|---|
    | A (an toàn chạm) | 0 – 60 V | 0 – 30 V |
    | B (cao áp, cần bảo vệ) | > 60 V – 1500 V | > 30 V – 1000 V |
