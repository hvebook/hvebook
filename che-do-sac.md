# Chế độ sạc (Charging Modes – IEC 61851-1)

| Mode | Mô tả | Nguồn | Bảo vệ / giao tiếp | Ghi chú |
|---|---|---|---|---|
| **Mode 1** | Cắm trực tiếp ổ dân dụng | AC ≤ 16 A | Không có CP, phụ thuộc RCD của nhà | Bị cấm hoặc hạn chế ở nhiều nước |
| **Mode 2** | Cáp có hộp điều khiển (*IC-CPD*) | AC ổ dân dụng/công nghiệp, ≤ 32 A | IC-CPD tạo CP, có RCD | "Sạc di động" kèm xe |
| **Mode 3** | Trụ AC chuyên dụng (*wallbox*) | AC 1/3 pha, đến 63 A (Type 2) | CP + PP đầy đủ | Phổ biến cho sạc tại nhà và nơi làm việc |
| **Mode 4** | Trụ DC | DC | CP + giao tiếp số | Sạc nhanh |

## Cách nối cáp (Connection cases)

| Case | Mô tả |
|---|---|
| **A** | Cáp gắn cố định vào xe |
| **B** | Cáp rời, hai đầu cắm (xe và trụ) – trụ có ổ cắm (*socket outlet*) |
| **C** | Cáp gắn cố định vào trụ (*tethered*) – bắt buộc với Mode 4 |

## Thuật ngữ AC theo khu vực (Regional AC naming)

| Khu vực | AC | DC kết hợp |
|---|---|---|
| Châu Âu, Việt Nam, Úc, nhiều nước châu Á | Type 2 (IEC 62196-2, "Mennekes") | CCS2 / Combo 2 |
| Bắc Mỹ (cũ), Hàn Quốc (cũ) | Type 1 (SAE J1772) | CCS1 / Combo 1 |
| Bắc Mỹ (mới) | NACS / SAE J3400 | NACS (cùng một đầu) |
| Trung Quốc | GB/T 20234.2 | GB/T 20234.3 (đầu DC riêng) |
| Nhật Bản | Type 1 | CHAdeMO (đầu DC riêng) |
