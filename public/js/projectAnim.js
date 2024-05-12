const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElems = document.querySelectorAll('.hiddenRight');
const hiddenLeftElems = document.querySelectorAll('.hiddenLeft');
const hiddenTopElems = document.querySelectorAll('.hiddenTop');
const hiddenBottomElems = document.querySelectorAll('.hiddenBottom');
hiddenElems.forEach((el) => observer.observe(el));
hiddenLeftElems.forEach((el) => observer.observe(el));
hiddenTopElems.forEach((el) => observer.observe(el));
hiddenBottomElems.forEach((el) => observer.observe(el));
