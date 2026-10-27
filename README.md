# Sổ tay HV & Sạc xe điện (MkDocs)

## Chạy thử trên máy (Local preview)

```bash
pip install -r requirements.txt
mkdocs serve          # mở http://127.0.0.1:8000
```

## Xuất bản (Build)

```bash
mkdocs build          # tạo thư mục site/ (web tĩnh, có thể host nội bộ)
```

Thư mục `site/` có thể đặt trên bất kỳ web server nào (Nginx, IIS, GitLab Pages, GitHub Pages…).

## Thêm / sửa nội dung

- Mỗi trang là một file Markdown trong `docs/`.
- Thêm trang mới: tạo file `.md` rồi khai báo trong mục `nav:` của `mkdocs.yml`.
- Viết tắt dùng chung (hiện chú thích khi rê chuột): `includes/abbreviations.md`.
- Sơ đồ: dùng khối ```` ```mermaid ````.
- Công thức: `\( ... \)` (trong dòng) hoặc `\[ ... \]` (khối riêng).

## Xuất PDF (tùy chọn)

Cài thêm plugin `mkdocs-with-pdf` hoặc in từ trình duyệt (Ctrl+P) trang đã build.
