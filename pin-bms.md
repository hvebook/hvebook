# Pin & BMS (Battery & BMS)

## Cấu trúc pack (Pack structure)

- **Cell:** NMC/NCA (~3,6 – 3,7 V danh định, 4,2 V max) hoặc LFP (~3,2 V danh định, ~3,65 V max).
- **Cấu hình nSmP:** ví dụ 96S → ~350 V (NMC); 192S hoặc ~200S → ~700 – 800 V.
- **Làm mát (Thermal management):** tấm làm mát bằng nước–glycol, có thể có heater để làm ấm pin trước khi sạc nhanh (*pre-conditioning*).

## Chức năng BMS (BMS functions)

| Chức năng | Tiếng Anh | Ghi chú |
|---|---|---|
| Đo lường | Cell voltage / temperature / pack current sensing | AFE (*Analog Front End*) trên từng module; cảm biến dòng shunt hoặc Hall |
| Ước lượng trạng thái | SOC, SOH, SOP estimation | SOP (*State of Power*) quyết định dòng sạc/xả cho phép |
| Cân bằng | Cell balancing | Thụ động (điện trở) hoặc chủ động |
| Bảo vệ | Protection | Quá áp, thấp áp, quá dòng, quá nhiệt, lỗi cách điện |
| Điều khiển contactor | Contactor control | Trình tự precharge, phát hiện hàn dính |
| Giới hạn sạc | Charge limits | Gửi dòng/áp tối đa cho EVCC hoặc OBC |

## Giới hạn sạc (Charge limits)

Dòng sạc cho phép phụ thuộc chủ yếu vào:

- **Nhiệt độ cell:** dưới ~0 – 10 °C hoặc trên ~45 – 55 °C, dòng bị giảm mạnh (nguy cơ mạ lithium – *lithium plating*).
- **SOC:** sạc theo kiểu CC-CV hoặc theo bảng nhiều bậc (*multi-step CC*); dòng giảm dần khi SOC > ~70 – 80 %.
- **Điện áp cell cao nhất:** khi cell đạt ngưỡng, BMS hạ dòng (*voltage-based derating*).
- **Nhiệt độ inlet / cáp:** cảm biến nhiệt ở chân DC của inlet; vượt ngưỡng → giảm dòng hoặc dừng.

!!! note "CC-CV"
    *Constant Current – Constant Voltage:* nạp dòng không đổi đến khi đạt điện áp mục tiêu, sau đó giữ điện áp và để dòng giảm dần.
    Trong sạc DC, xe điều khiển bằng cách gửi **dòng mục tiêu** (*EVTargetCurrent* / BCL) và **điện áp mục tiêu**; trụ là nguồn có giới hạn dòng/áp.
