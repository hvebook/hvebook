# NACS (SAE J3400)

## Tổng quan (Overview)

- **Nguồn gốc:** đầu sạc Tesla, được Tesla công bố thiết kế năm 2022 và SAE chuẩn hóa thành **SAE J3400**.
- **Lịch sử văn bản:** bản đầu tiên (12/2023) là *Technical Information Report*; bản **J3400_202409** (9/2024) nâng lên *Recommended Practice*.
- **SAE J3400/1:** yêu cầu cho **bộ chuyển đổi** (*adapter*) giữa J3400 và J1772/CCS1 (vật lý, điện, chức năng, hiệu năng).
- **Thị trường:** phần lớn OEM tại Bắc Mỹ đã chuyển hoặc cam kết chuyển cổng sạc sang NACS từ khoảng 2025.

## Sơ đồ chân (Pinout) – 5 chân

| Chân | Sạc AC | Sạc DC |
|---|---|---|
| Power 1 | L1 | DC+ |
| Power 2 | L2 / N | DC− |
| PE | Tiếp địa | Tiếp địa |
| CP | PWM (giống J1772) | PWM 5 % + PLC |
| PP | Nhận biết kết nối (tương thích mạch J1772) | Nhận biết kết nối |

**Điểm khác biệt chính:** **dùng chung 2 chân công suất cho AC và DC**, nên đầu nhỏ gọn hơn nhiều so với CCS1. Xe phải có mạch chuyển mạch (*AC/DC switching*) phía sau inlet: AC → OBC, DC → contactor sạc DC.

## Định mức (Ratings – tham khảo)

| Thông số | Giá trị |
|---|---|
| AC | đến 277 V, dòng đến ~80 A |
| DC | biến thể 500 V và **1000 V** |
| Dòng DC | tùy cáp; sản phẩm thương mại có làm mát đến ~500 A |

## Giao tiếp (Communication)

- **Lớp vật lý và giao thức giống CCS1:** HomePlug Green PHY PLC trên CP, DIN SPEC 70121 / ISO 15118-2 / ISO 15118-20.
- Phần mềm EVCC của xe CCS1 có thể tái sử dụng phần lớn khi chuyển sang NACS; khác biệt chủ yếu ở inlet, mạch chuyển AC/DC và hiệu chuẩn nhiệt.
- Các thế hệ xe Tesla đời đầu dùng giao thức riêng; NACS chuẩn hóa theo SAE J3400 dùng PLC/ISO 15118.

## Ghi chú kỹ thuật (Engineering notes)

- **Tương thích ngược:** xe NACS dùng adapter để sạc ở trụ CCS1 và ngược lại; adapter phải đáp ứng J3400/1 (giới hạn dòng/nhiệt, khóa cơ khí).
- **Xe 800 V trên trụ 500 V cũ:** cần boost phía xe (xem [Kiến trúc HV](../hv/kien-truc.md)).
- **Mở nắp cổng sạc:** súng Tesla có nút gửi tín hiệu RF để mở nắp cổng sạc; đây là tính năng tiện ích, không thuộc phần bắt buộc an toàn của sạc.
