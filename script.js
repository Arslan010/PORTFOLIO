let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// ==============================menu========================
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('fade-slide');
        } else {
            sec.classList.remove('fade-slide');
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



// ===========================filter=========================

document.addEventListener("DOMContentLoaded", function () {
    // Filter projects based on the data-filter attribute
    var filterButtons = document.querySelectorAll(".filter-btn");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var filterValue = button.getAttribute("data-filter");

            // Show all projects if the "All" button is clicked
            if (filterValue === "all") {
                showAllProjects();
            } else {
                // Hide projects that don't match the selected filter
                hideNonMatchingProjects(filterValue);
                // Show projects that match the selected filter
                showMatchingProjects(filterValue);
            }

            // Update active class for the filter buttons
            removeActiveClassFromButtons();
            button.classList.add("active");
        });
    });

    function showAllProjects() {
        var projects = document.querySelectorAll(".project");
        projects.forEach(function (project) {
            project.style.display = "block";
        });
    }

    function hideNonMatchingProjects(filterValue) {
        var projects = document.querySelectorAll(".project");
        projects.forEach(function (project) {
            if (!project.classList.contains(filterValue)) {
                project.style.display = "none";
            }
        });
    }

    function showMatchingProjects(filterValue) {
        var projects = document.querySelectorAll(".project." + filterValue);
        projects.forEach(function (project) {
            project.style.display = "block";
        });
    }

    function removeActiveClassFromButtons() {
        filterButtons.forEach(function (button) {
            button.classList.remove("active");
        });
    }
});



