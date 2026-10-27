"""Ẩn mục lục bên phải (TOC) trên mọi trang.
Hide the right-hand table of contents on every page.
Muốn hiện lại TOC cho một trang, thêm vào đầu file .md:
---
show_toc: true
---
"""


def on_page_markdown(markdown, page, **kwargs):
    if page.meta.get("show_toc"):
        return markdown
    hide = page.meta.get("hide") or []
    if "toc" not in hide:
        hide = list(hide) + ["toc"]
    page.meta["hide"] = hide
    return markdown
