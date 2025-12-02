// Khởi tạo trang khi DOM đã sẵn sàng
document.addEventListener('DOMContentLoaded', function() {
    // Tải header và footer nếu hàm có sẵn
    if (typeof loadHeaderAndFooter === 'function') {
        loadHeaderAndFooter();
    }

    // Khởi tạo accordion cho các phần tử .year-toggle
    if (typeof initAccordion === 'function') {
        initAccordion('.year-toggle');
    }
});
