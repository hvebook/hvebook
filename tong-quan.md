# Tổng quan V2X (V2X Overview)

## Các dạng (Types)

| Dạng | Tiếng Anh | Mô tả | Nối lưới? |
|---|---|---|---|
| **V2L** | Vehicle-to-Load | Xe cấp điện AC cho thiết bị qua ổ cắm/adapter | Không |
| **V2H** | Vehicle-to-Home | Xe cấp điện cho nhà (thường qua bộ chuyển mạch, có thể độc lập lưới khi mất điện) | Có thể (cần thiết bị cách ly) |
| **V2B** | Vehicle-to-Building | Như V2H, quy mô tòa nhà, giảm phụ tải đỉnh | Có |
| **V2G** | Vehicle-to-Grid | Xe phát điện ngược lên lưới, tham gia thị trường/dịch vụ lưới | Có |

## Dịch vụ lưới (Grid services)

| Dịch vụ | Mô tả | Yêu cầu thời gian |
|---|---|---|
| Cắt đỉnh (*Peak shaving*) | Xả khi phụ tải cao | Phút – giờ |
| Dịch chuyển phụ tải (*Load shifting / arbitrage*) | Sạc giá rẻ, xả giá cao | Giờ |
| Điều tần (*Frequency regulation / FCR*) | Điều chỉnh công suất theo tần số lưới | Giây |
| Hỗ trợ điện áp (*Volt/VAR*) | Phát/thu công suất phản kháng (chủ yếu AC V2G) | Giây |
| Dự phòng (*Backup*) | Cấp điện khi mất lưới (V2H ở chế độ đảo) | — |

## Thách thức (Challenges)

- **Lão hóa pin:** chu kỳ xả bổ sung; OEM thường giới hạn năng lượng/công suất xả và có thể ảnh hưởng điều khoản bảo hành.
- **Chứng nhận nối lưới:** thiết bị phát lên lưới phải tuân thủ quy chuẩn kỹ thuật (*grid code*) của khu vực.
- **Tương thích:** cần xe, trụ, backend và nhà điều hành lưới cùng hỗ trợ chuẩn.
- **Trải nghiệm người dùng:** bảo đảm mức SOC tối thiểu và thời điểm khởi hành (*departure time*).
- **Mức độ phổ biến:** tính đến 2025–2026, V2G trên CCS vẫn chủ yếu ở giai đoạn thí điểm; số xe thương mại hỗ trợ ISO 15118-20 BPT còn hạn chế.
