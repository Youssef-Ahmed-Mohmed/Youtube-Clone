document.addEventListener('DOMContentLoaded', () => {
    initShortsNav();
    initCategoryButtons();
    initMenuToggle();
    document.querySelectorAll('[data-carousel]').forEach(initInfiniteCarousel);
});

/* ---------- Shorts feed prev/next ---------- */
function initShortsNav() {
    const feed = document.querySelector('[data-shorts-feed]');
    const prevBtn = document.querySelector('[data-shorts-prev]');
    const nextBtn = document.querySelector('[data-shorts-next]');
    if (!feed) return;

    const scrollByOne = (dir) => {
        const item = feed.querySelector('.short-item');
        const step = item ? item.getBoundingClientRect().height : feed.clientHeight;
        feed.scrollBy({ top: dir * step, behavior: 'smooth' });
    };

    prevBtn && prevBtn.addEventListener('click', () => scrollByOne(-1));
    nextBtn && nextBtn.addEventListener('click', () => scrollByOne(1));
}

function initCategoryButtons() {
    document.querySelectorAll('.category').forEach((button) => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.category').forEach((item) => item.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

function initMenuToggle() {
    const toggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (!toggle || !sidebar || !mainContent) return;

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar--collapsed');
        mainContent.classList.toggle('main-content--expanded');
    });
}

/* ---------- Infinite-loop carousel ---------- */
/*
   Technique: clone a few cards from the start onto the end, and a few
   cards from the end onto the start. Scrolling can then continue
   "forever" in either direction — once the user scrolls into a cloned
   region we silently (no animation) jump back to the matching real
   position, so the loop never visibly resets.
*/
function initInfiniteCarousel(root) {
    const viewport = root.querySelector('[data-carousel-viewport]');
    const track = root.querySelector('[data-carousel-track]');
    const prevBtn = root.querySelector('[data-carousel-prev]');
    const nextBtn = root.querySelector('[data-carousel-next]');
    if (!viewport || !track) return;

    const originalCards = Array.from(track.children);
    const count = originalCards.length;
    if (count === 0) return;

    const cardWidth = originalCards[0].getBoundingClientRect().width || 180;
    const gap = parseFloat(getComputedStyle(track).gap || '32');
    const visible = Math.max(2, Math.ceil(viewport.clientWidth / (cardWidth + gap)));
    const cloneCount = Math.min(count, visible + 2);
    const step = cardWidth + gap;
    const firstRealIndex = cloneCount;
    const lastRealIndex = cloneCount + count - 1;

    const headClones = originalCards.slice(0, cloneCount).map((node) => node.cloneNode(true));
    const tailClones = originalCards.slice(-cloneCount).map((node) => node.cloneNode(true));

    const fragment = document.createDocumentFragment();
    tailClones.forEach((card) => {
        card.setAttribute('data-clone', 'true');
        fragment.appendChild(card);
    });
    track.insertBefore(fragment, track.firstChild);

    headClones.forEach((card) => {
        card.setAttribute('data-clone', 'true');
        track.appendChild(card);
    });

    let currentIndex = firstRealIndex;

    const setPosition = (index, smooth = false) => {
        currentIndex = index;
        const targetLeft = index * step;
        viewport.scrollTo({ left: targetLeft, behavior: smooth ? 'smooth' : 'auto' });
    };

    const goToCard = (dir) => {
        let nextIndex = currentIndex + dir;

        if (nextIndex < firstRealIndex) {
            nextIndex = lastRealIndex;
        } else if (nextIndex > lastRealIndex) {
            nextIndex = firstRealIndex;
        }

        setPosition(nextIndex, true);
    };

    setPosition(firstRealIndex, false);

    let ticking = false;
    viewport.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            if (viewport.scrollLeft <= step * (firstRealIndex - 1)) {
                setPosition(lastRealIndex, false);
            } else if (viewport.scrollLeft >= step * (lastRealIndex + 1)) {
                setPosition(firstRealIndex, false);
            }
            ticking = false;
        });
    });

    prevBtn && prevBtn.addEventListener('click', () => goToCard(-1));
    nextBtn && nextBtn.addEventListener('click', () => goToCard(1));

    window.addEventListener('resize', () => {
        setPosition(currentIndex, false);
    });
}