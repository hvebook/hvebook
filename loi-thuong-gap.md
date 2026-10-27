# Lỗi thường gặp (Common Faults)

## Pha kết nối vật lý (Physical connection)

| Triệu chứng | Nguyên nhân có thể | Kiểm tra |
|---|---|---|
| Xe không nhận súng | PP hở, điện trở \(R_C\) sai, inlet bẩn/ôxy hóa | Đo PP–PE ở súng; đo điện áp PP ở xe |
| CP kẹt ở 12 V | Diode/điện trở phía xe hở, dây CP đứt | Đo CP bằng oscilloscope |
| CP ở 0 V (state E) | Ngắn CP–PE, trụ mất nguồn | Đo điện trở CP–PE khi rút súng |
| Không có −12 V | Diode xe ngắn mạch | Kiểm tra mạch CP phía xe |
| Khóa súng lỗi | Actuator kẹt, cảm biến vị trí | Chẩn đoán actuator, kiểm tra cơ khí |

## Pha giao tiếp (Communication setup)

| Triệu chứng | Nguyên nhân có thể | Kiểm tra |
|---|---|---|
| SLAC thất bại / timeout | Suy hao lớn, PE kém, modem lỗi, nhiễu từ trụ bên cạnh | Đọc log suy hao (*attenuation*), đo PE, thử trụ khác |
| SDP không trả lời | Trụ không lắng nghe IPv6/UDP 15118, cấu hình TLS không khớp | Capture PLC (Wireshark) |
| TLS thất bại | Root CA thiếu, chứng chỉ hết hạn, đồng hồ xe sai | Kiểm tra chuỗi chứng chỉ, RTC |
| Không có giao thức chung | SupportedAppProtocol không khớp | So namespace/phiên bản hai phía |
| GB/T: không có CHM/BHM | CAN S+/S− đứt, terminator sai, nguồn phụ A+/A− không có | Đo CAN 60 Ω, đo A+/A− = 12 V |

## Pha trước khi cấp năng lượng (Pre-energy)

| Triệu chứng | Nguyên nhân có thể | Kiểm tra |
|---|---|---|
| CableCheck thất bại | Cách điện kém (cáp, inlet ẩm, linh kiện HV xe); điện dung Y lớn; IMD xe và trụ xung đột | Đo cách điện bằng megohmmeter (đúng quy trình an toàn), kiểm tra IMD xe tắt khi sạc DC |
| PreCharge timeout | Điện áp mục tiêu xe gửi sai; trụ không đạt điện áp; trụ 500 V với xe 800 V | So EVTargetVoltage với điện áp pack, kiểm tra dải điện áp trụ |
| Xe không đóng contactor | Chênh áp lớn, HVIL, lỗi BMS | Log BMS, điện áp hai phía contactor |
| GB/T: dừng sau BRM/BCP | Tham số ngoài dải trụ (CML), phiên bản giao thức | So BCP với CML |

## Pha đang sạc (During charging)

| Triệu chứng | Nguyên nhân có thể | Kiểm tra |
|---|---|---|
| Công suất thấp | Nhiệt độ pin thấp/cao, SOC cao, nhiệt inlet/súng cao, trụ chia công suất | Log nhiệt độ, giới hạn BMS, EVSEMaxCurrent |
| Dừng đột ngột | 12 V tụt (DC-DC), reset ECU, mất PLC, PP thay đổi (nút súng bị nhấn) | Điện áp LV, log reset, lý do dừng |
| *FAILED_ChargingCurrentdifferential* | Trụ không bám dòng mục tiêu | So EVTargetCurrent và EVSEPresentCurrent |
| Lỗi cách điện khi sạc | Rò ở xe hoặc trụ | IMD trụ, log cách điện |

## Pha kết thúc (End of session)

| Triệu chứng | Nguyên nhân có thể | Kiểm tra |
|---|---|---|
| Không nhả súng | Còn điện áp trên chân DC, actuator lỗi | Đo điện áp chân DC (an toàn!), log khóa |
| WeldingDetection báo lỗi | Contactor hàn dính | Đo điện áp sau contactor khi mở, thay contactor |
