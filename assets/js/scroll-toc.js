if (document.readyState !== 'loading') {
    scrollToc();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        scrollToc();
    });
}

function scrollToc() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.intersectionRatio > 0) {
                //clearActiveStatesInTableOfContents();
                document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.add('active');
            } else {
                document.querySelector(`nav ul li a[href="#${id}"]`).parentElement.classList.remove('active');
            }
        });
    });

    // Track all sections that have an `id` applied
    document.querySelectorAll('h1[id],h2[id],h3[id]').forEach((section) => {
        observer.observe(section);
    });

    function clearActiveStatesInTableOfContents() {
        document.querySelectorAll('nav ul li').forEach((section) => {
            section.classList.remove('active');
        });
    }
};