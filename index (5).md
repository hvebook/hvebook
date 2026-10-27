# 2. Cơ bản về sạc (Charging Fundamentals)

Chương này trình bày các khái niệm dùng chung cho mọi chuẩn sạc dựa trên IEC 61851 / SAE J1772 (CCS1, CCS2, NACS) và phần tương ứng của GB/T.

- [Chế độ sạc](che-do-sac.md): Mode 1–4, sạc AC và DC
- [Control Pilot (CP)](control-pilot.md): mạch, trạng thái A–F, mã hóa dòng bằng duty cycle
- [Proximity Pilot (PP)](proximity-pilot.md): nhận biết súng cắm và khả năng dòng của cáp

## AC so với DC (AC vs DC charging)

| | Sạc AC | Sạc DC |
|---|---|---|
| Bộ chuyển đổi | OBC trên xe | Trong trụ sạc (*off-board*) |
| Công suất điển hình | 3,7 – 22 kW | 30 – 400 kW+ |
| Ai điều khiển dòng? | OBC (trong giới hạn trụ báo qua CP) | Trụ (theo dòng mục tiêu xe gửi) |
| Giao tiếp tối thiểu | PWM trên CP | **Giao tiếp số** bắt buộc (PLC trên CP, hoặc CAN với GB/T/CHAdeMO) |
| Tiêu chuẩn trụ | IEC 61851-1 | IEC 61851-23 (trụ), IEC 61851-24 (giao tiếp) |
