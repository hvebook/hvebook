# GB/T (Trung Quốc)

## Bộ tiêu chuẩn (Standard family)

| Tiêu chuẩn | Nội dung |
|---|---|
| GB/T 18487.1 | Hệ thống sạc dẫn điện – yêu cầu chung (tương ứng IEC 61851-1); bản 2015, bản **2023** |
| GB/T 20234.1 | Bộ kết nối – yêu cầu chung |
| GB/T 20234.2 | Bộ kết nối **AC** |
| GB/T 20234.3 | Bộ kết nối **DC** (đầu 9 chân) |
| GB/T 20234.4 | Bộ kết nối DC **công suất lớn** (ChaoJi) – bản 2023 |
| GB/T 27930 | Giao tiếp giữa trụ sạc DC và BMS (CAN); bản 2015, bản **2023** |

Bộ 2023 (GB/T 18487.1-2023, GB/T 27930-2023, GB/T 20234.4-2023) được phát hành tháng 9/2023 và là nền tảng cho **ChaoJi**; GB/T 27930-2023 có ngày áp dụng 01/04/2024.

## Đầu DC GB/T 20234.3 – 9 chân (DC pinout)

| Chân | Tên | Chức năng |
|---|---|---|
| DC+ | DC positive | Dương DC |
| DC− | DC negative | Âm DC |
| PE | Protective earth | Tiếp địa |
| S+ | CAN_H | Giao tiếp sạc (CAN) |
| S− | CAN_L | Giao tiếp sạc (CAN) |
| CC1 | Connection confirm 1 | Trụ đọc – xác nhận kết nối |
| CC2 | Connection confirm 2 | Xe đọc – xác nhận kết nối |
| A+ | Auxiliary power + | Nguồn phụ 12 V (một số xe buýt 24 V) từ trụ cấp cho BMS |
| A− | Auxiliary power − | Âm nguồn phụ |

**Nguồn phụ A+/A−:** cho phép sạc xe có ắc quy LV yếu, vì trụ cấp nguồn để đánh thức BMS. Đây là điểm khác biệt lớn so với CCS.

### Điện áp nhận biết (Detection voltages – tham khảo)

| Tín hiệu | Chưa cắm | Cắm chưa khóa hoàn toàn | Kết nối hoàn toàn |
|---|---|---|---|
| CC1 (phía trụ, kéo lên 12 V qua 1 kΩ) | 12 V | 6 V | **4 V** |
| CC2 (phía xe, kéo lên 12 V qua 1 kΩ) | 12 V | — | **6 V** |

Trụ chỉ khóa điện tử súng và cấp nguồn phụ khi CC1 = 4 V.

## Đầu AC GB/T 20234.2 – 7 chân (AC pinout)

L1, L2, L3, N, PE, **CC**, **CP**. Hình dáng gần giống Type 2 nhưng **giới tính chân ngược** (phía xe là chân đực) → không tương thích cơ khí với Type 2. CP dùng PWM 1 kHz tương tự IEC 61851-1; CC có điện trở mã hóa dòng cáp.

## Định mức (Ratings – tham khảo)

| Phiên bản | Điện áp DC | Dòng DC |
|---|---|---|
| GB/T 20234.3-2015 | đến 750 V / 1000 V | 80 / 125 / 200 / 250 A |
| GB/T 20234.3-2023 | đến 1000 V | nâng định mức (có làm mát), một số nguồn ghi đến 800 A – **cần đối chiếu bản gốc** |
| ChaoJi (GB/T 20234.4-2023) | hướng tới 1500 V | công suất MW-class; demo 1500 V × 800 A |

## Đặc điểm khác (Other notes)

- **Khóa điện tử ở súng** (không phải ở inlet xe như CCS).
- **Không dùng CP** trong sạc DC – toàn bộ điều khiển qua CAN và CC1/CC2.
- **Kiểm tra cách điện** do trụ thực hiện trong pha bắt tay (*handshake*), trước khi trao đổi tham số.
- Xem trình tự bản tin ở [GB/T 27930](../giao-tiep/gbt27930.md).
