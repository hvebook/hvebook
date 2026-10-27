// Cây thư mục bên trái: nút Mở tất cả / Thu gọn tất cả + ghi nhớ trạng thái
// Left tree: Expand all / Collapse all buttons + remember open folders
(function () {
  var STORE_KEY = "ev-ebook-tree-open";

  function toggles() {
    return Array.prototype.slice.call(
      document.querySelectorAll('.md-nav--primary input.md-nav__toggle[id^="__nav_"]')
    );
  }

  function save() {
    try {
      var open = toggles().filter(function (t) { return t.checked; }).map(function (t) { return t.id; });
      localStorage.setItem(STORE_KEY, JSON.stringify(open));
    } catch (e) { /* storage không khả dụng – bỏ qua */ }
  }

  function restore() {
    var saved = null;
    try { saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null"); } catch (e) { saved = null; }
    if (!saved) return;
    toggles().forEach(function (t) {
      var isActive = t.parentElement && t.parentElement.classList.contains("md-nav__item--active");
      if (saved.indexOf(t.id) !== -1 || isActive) {
        t.checked = true;
      } else {
        t.checked = false;
      }
      syncAria(t);
    });
  }

  function syncAria(t) {
    var nav = t.parentElement && t.parentElement.querySelector(":scope > nav.md-nav");
    if (nav) nav.setAttribute("aria-expanded", t.checked ? "true" : "false");
  }

  function setAll(state) {
    toggles().forEach(function (t) { t.checked = state; syncAria(t); });
    save();
  }

  function addToolbar() {
    var wrap = document.querySelector(".md-sidebar--primary .md-sidebar__inner");
    if (!wrap || wrap.querySelector(".tree-toolbar")) return;
    var bar = document.createElement("div");
    bar.className = "tree-toolbar";
    bar.innerHTML =
      '<button type="button" data-act="open" title="Expand all">⊞ Mở tất cả</button>' +
      '<button type="button" data-act="close" title="Collapse all">⊟ Thu gọn</button>';
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button");
      if (!btn) return;
      setAll(btn.getAttribute("data-act") === "open");
    });
    wrap.insertBefore(bar, wrap.firstChild);
  }

  // Hiện 2 nút chuyển trang nhỏ khi người dùng đã cuộn xuống
  function initPager() {
    var pager = document.querySelector(".mini-pager");
    if (!pager) return;
    function update() {
      var scrolled = window.scrollY > 240;
      var shortPage = document.documentElement.scrollHeight <= window.innerHeight + 40;
      pager.classList.toggle("is-visible", scrolled || shortPage);
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  function init() {
    initPager();
    addToolbar();
    restore();
    toggles().forEach(function (t) {
      t.addEventListener("change", function () { syncAria(t); save(); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
