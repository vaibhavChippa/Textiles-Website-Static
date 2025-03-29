// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    // Hero Towel Animation
    gsap.to(".towel-img", {
        y: -20,
        rotation: 5,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "power1.inOut"
    });

    // Product Card Hover Animation
    const productCards = document.querySelectorAll(".product-card");
    productCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });

    // Scroll Animations
    gsap.utils.toArray(".products, .about, .contact").forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
});