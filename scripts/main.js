document.addEventListener("DOMContentLoaded", () => {
  const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");

  document.querySelectorAll(".reveal-stagger").forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 80}ms`;
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
});
