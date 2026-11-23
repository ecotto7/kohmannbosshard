(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll(".copyright-year").forEach(function (el) {
    el.textContent = year;
  });

  document.querySelectorAll(".elementskit-menu-toggler").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var nav = button.closest("nav");
      if (!nav) {
        return;
      }
      var panels = nav.querySelectorAll(".elementskit-menu-offcanvas-elements");
      var open = panels.length && panels[0].classList.contains("active");
      panels.forEach(function (panel) {
        panel.classList.toggle("active", !open);
      });
      var hamburger = nav.querySelector(".elementskit-menu-hamburger");
      if (hamburger) {
        hamburger.setAttribute("aria-expanded", open ? "false" : "true");
      }
    });
  });

  document.querySelectorAll(".ekit-accordion--toggler").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var card = button.closest(".elementskit-card");
      var group = button.closest(".elementskit-accordion");
      if (!card || !group) {
        return;
      }
      var expanded = button.getAttribute("aria-expanded") === "true";
      group.querySelectorAll(".elementskit-card").forEach(function (other) {
        var otherButton = other.querySelector(".ekit-accordion--toggler");
        var panel = other.querySelector(".collapse");
        var isThis = other === card && !expanded;
        other.classList.toggle("active", isThis);
        if (otherButton) {
          otherButton.setAttribute("aria-expanded", isThis ? "true" : "false");
        }
        if (panel) {
          panel.classList.toggle("show", isThis);
        }
      });
    });
  });

  document.querySelectorAll(".ekit-btt__button").forEach(function (button) {
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
})();
