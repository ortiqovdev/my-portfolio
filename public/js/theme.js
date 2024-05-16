const icon = document.getElementById('icon');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.body.classList.add(currentTheme);
    if (currentTheme === "light-theme") {
        icon.src = "/icon/moon.png";
        
    } else {
        icon.src = "/icon/sun.png";
    }
}

icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    const isLightTheme = document.body.classList.contains("light-theme");

    localStorage.setItem('theme', isLightTheme ? "light-theme" : "");

    icon.src = isLightTheme ? "/icon/moon.png" : "/icon/sun.png";
}
