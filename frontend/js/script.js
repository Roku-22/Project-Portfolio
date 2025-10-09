// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const navMenu = document.getElementById("navMenu")

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    const icon = mobileMenuToggle.querySelector("i")
    if (navMenu.classList.contains("active")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-times")
    } else {
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  })
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all fade-in elements
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
  fadeElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    observer.observe(el)
  })
})

// Portfolio Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")

if (filterButtons.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      button.classList.add("active")

      const filterValue = button.getAttribute("data-filter")

      portfolioItems.forEach((item) => {
        if (filterValue === "all") {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 10)
        } else {
          const category = item.getAttribute("data-category")
          if (category === filterValue) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "scale(1)"
            }, 10)
          } else {
            item.style.opacity = "0"
            item.style.transform = "scale(0.8)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        }
      })
    })
  })
}

// Skill Bar Animation
const skillBars = document.querySelectorAll(".skill-bar")
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target
        const width = bar.style.width
        bar.style.width = "0"
        setTimeout(() => {
          bar.style.width = width
        }, 100)
        skillObserver.unobserve(bar)
      }
    })
  },
  { threshold: 0.5 },
)

skillBars.forEach((bar) => {
  skillObserver.observe(bar)
})

// Active Navigation Link
const currentPage = window.location.pathname.split("/").pop() || "index.html"
const navLinks = document.querySelectorAll(".nav-menu a")

navLinks.forEach((link) => {
  const href = link.getAttribute("href")
  if (href === currentPage) {
    link.classList.add("active")
  }
})

// Scroll to Top Button (Optional Enhancement)
const scrollToTopBtn = document.createElement("button")
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
scrollToTopBtn.className = "scroll-to-top"
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-green);
    color: var(--black);
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    font-size: 1.2rem;
    box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);
`

document.body.appendChild(scrollToTopBtn)

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.opacity = "1"
    scrollToTopBtn.style.visibility = "visible"
  } else {
    scrollToTopBtn.style.opacity = "0"
    scrollToTopBtn.style.visibility = "hidden"
  }
})

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Parallax Effect for Hero Section
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero")
  if (hero) {
    const scrolled = window.pageYOffset
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})


