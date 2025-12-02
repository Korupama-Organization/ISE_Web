// Khởi tạo các thành phần chung (header, footer)
function initCommonElements() {
    loadHeaderAndFooter();
}

// Khởi động khi DOM đã sẵn sàng
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommonElements);
} else {
    initCommonElements(); // Chạy ngay nếu DOM đã load xong
}

// Cache slider elements at module initialization
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

// Slider navigation
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}

let refreshInterval = setInterval(()=> {next.click()}, 5000);

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})

window.onresize = function(event) {
    reloadSlider();
};

//Tab-slider - Xử lý khi click vào các ngành đào tạo
let navtabs = document.querySelectorAll('.tabs');
navtabs.forEach(item => {
    item.addEventListener('click', function(event){
        if(event.target.classList.contains('tabs-nav-item')){
            let lastActive = item.querySelector('li.active');
            let newActive = event.target;

            // Nếu click vào tab đã active, không làm gì
            if (lastActive === newActive) {
                return;
            }

            // Xóa active class khỏi tab cũ nếu có
            if (lastActive) {
                lastActive.classList.remove('active');
            }
            
            // Thêm active class cho tab mới
            newActive.classList.add('active');

            // Xóa active class khỏi content cũ nếu có
            let lastContentActive = item.querySelector('.tabs-content-items.active');
            if (lastContentActive) {
                lastContentActive.classList.remove('active');
            }
            
            // Hiển thị content mới
            let newContentActive = document.getElementById(newActive.dataset.target);
            newContentActive.classList.add('active');
            
            // Scroll xuống phần content với animation mượt
            setTimeout(() => {
                newContentActive.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest'
                });
            }, 100);
        }
    })
})