
// Cache DOM elements at module initialization
const tabDataScience = document.getElementById("tab-data-science");
const tabMobileWeb = document.getElementById("tab-mobile-web");
const dataScienceContent = document.getElementById("dataScience");
const mobileWebContent = document.getElementById("mobileWeb");

function disableAllTabs() {
    tabDataScience.classList.remove("active");
    tabMobileWeb.classList.remove("active");
}

function showDataScience() {
    disableAllTabs();
    mobileWebContent.classList.add("hidden"); // Ẩn nội dung tab Mobile Web
    dataScienceContent.classList.remove("hidden"); // Hiện nội dung tab Data Science
    tabDataScience.classList.add("active"); // Đánh dấu tab active
}

function showMobileWeb() {
    disableAllTabs();
    dataScienceContent.classList.add("hidden"); // Ẩn nội dung tab Data Science
    mobileWebContent.classList.remove("hidden"); // Hiện nội dung tab Mobile Web
    tabMobileWeb.classList.add("active"); // Đánh dấu tab active
}

// Gắn sự kiện click cho các tab
tabDataScience.addEventListener("click", showDataScience);
tabMobileWeb.addEventListener("click", showMobileWeb);

// Xác định tab mặc định dựa trên URL parameter
const params = new URLSearchParams(window.location.search);
const selectedTab = params.get("tab");

if (selectedTab === "mobileWeb") {
    showMobileWeb();
} else {
    showDataScience(); // Mặc định
}
