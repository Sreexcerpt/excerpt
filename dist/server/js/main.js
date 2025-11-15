$(document).ready(function() {
    // ------------------Navbar--------------------

    // Open modal for navBar Search
    $("#modalRightArrowBtn").on("click", function() {
        window.location.href = "";
    });

    const input = $("#modal-input");

    // Execute a function when the user presses a key on the keyboard
    input.on("keypress", function(event) {
        window.location.href = "";
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            window.location.href = "";
            event.preventDefault();
            // Trigger the button element with a click
            $("#modalRightArrowBtn").click();
        }
    });

    // Navbar items active on hover

    // Get the current page URL
    var menuItems = $(".menu");
    var activeMenuItem = null;

    menuItems.each(function() {
        var menuItem = $(this);

        menuItem.on("mouseover", function() {
            // Remove the active class from the previously active menu item
            if (activeMenuItem) {
                activeMenuItem.removeClass("active");
            }

            // Add the active class to the currently hovered menu item
            menuItem.addClass("active");
            activeMenuItem = menuItem;
        });

        menuItem.on("mouseout", function() {
            // Remove the active class when the mouse moves out of the menu item
            menuItem.removeClass("active");
            menuItems.each(function() {
                if ($("a", this).attr("href") === window.location.href) {
                    menuItem.addClass("active");
                    activeMenuItem = menuItem;
                }
            });
        });

        menuItem.on("click", function() {
            // Add the active class to the clicked menu item and update the activeMenuItem variable
            if (activeMenuItem) {
                activeMenuItem.removeClass("active");
            }
            menuItem.addClass("active");
            activeMenuItem = menuItem;
        });

        // Check if the current page URL matches the menu item's href
        if ($("a", menuItem).attr("href") === window.location.href) {
            menuItem.addClass("active");
            activeMenuItem = menuItem;
        }
    });

    // ------------------Navbar---------------end-----

    // ------------------slick Slider Initialization-----------------
    $(".slide-wrapper").slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
    });
    // ------------------slick Slider Initialization-----------------

    // -------------Home 3-----slick Slider ----------------
    $(".left").click(function() {
        $(".slide-wrapper").slick("slickPrev");
    });

    $(".right").click(function() {
        $(".slide-wrapper").slick("slickNext");
    });
    // -------------Home 3-----slick Slider -----------------

    // ------------------Team Slider-----------------
    $(".team-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // ------------------Team Slider-----------------

    // ------------------Project Slider-----------------
    $(".project-slider").slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 200,
        // speed: 500,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // avoid to slider slick-cloned  bieng active class stylesheet start----
    var projectSlider = $(".project-slider");
    projectSlider.on("afterChange", function(event, slick, currentSlide) {
        var clonedSlides = projectSlider.find(".slick-cloned");
        clonedSlides.removeClass("active");
    });
    // avoid to slider slick-cloned  bieng active class stylesheet end-----

    // ------------------Project Slider----------end-------

    // ------------------Testimonial Slider-----------------
    $(".testimonial-slider-nav").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: ".testimonial-slider-for",
        dots: true,
        arrows: false,
        autoplay: true,
    });
    $(".testimonial-slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".testimonial-slider-nav",
        dots: true,
        focusOnSelect: true,
        autoplay: true,
        arrows: false,
    });
    // ------------------Testimonial Slider----------end-------

    // ------------------Mission Slider-----------------
    $(".mission-slide").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 50,
        speed: 5000,
        pauseOnHover: true,
        arrows: false,
        cssEase: "linear",
        dots: false,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    });
    // ------------------Mission Slider-----------------

    // ------------------Bootstrap ToolTip-----------------
    $('[data-bs-toggle="tooltip"]').tooltip();
    // ------------------Bootstrap ToolTip-----------------

    // ------------------Video Overlay Home1 technology -----------------
    $(".video_icon_wrapper").on("click", function() {
        $("#overlay-video").addClass("active");
        $("#close-video-overlay").addClass("active");
    });

    $("#close-video-overlay").on("click", function() {
        $("#overlay-video").toggleClass("active");
        $(this).toggleClass("active");
    });
    // ------------------Video Overlay Home1 technology -----------------

    // ------------------Hamburger Icon -----------------
    $("#nav-lines").on("click", function() {
        $(this).toggleClass("active");

        // ------------------Hamburger Icon -----------------
        $(".mobile-nav-overlay").toggleClass("active");
        $(".mobile-nav").toggleClass("active");
        // ------------------Hamburger Icon -----------------
    });

    $(".mobile-nav-overlay").on("click", function() {
        $(".mobile-nav-overlay").toggleClass("active");
        $(".mobile-nav").toggleClass("active");
        $("#nav-lines").toggleClass("active");
    });
    // ------------------Hamburger Icon -----------------

    // About page fan area counting  start
    // Function to start the counting animation
    function startCountingAnimation(targetElement) {
        targetElement.find(".count-card-counter").each(function() {
            var countElement = $(this);
            var targetValue = parseInt(countElement.text().trim());
            countElement.text("0");

            $({
                count: 0
            }).animate({
                count: targetValue
            }, {
                duration: 4000,
                easing: "swing",
                step: function() {
                    countElement.text(Math.ceil(this.count).toLocaleString("en"));
                },
                complete: function() {
                    countElement.text(targetValue.toLocaleString("en"));
                },
            });
        });
    }

    // Create an intersection observer
    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                // Start the counting animation when "fan-area" section is visible
                startCountingAnimation($(entry.target));
                // Stop observing once the animation is started
                observer.unobserve(entry.target);
            }
        });
    });

    // Observe the "fan-area" section
    var fanAreaSection = document.querySelector(".fan-area");
    var achievment = document.querySelector(".achievment-area");
    if (fanAreaSection) {
        observer.observe(fanAreaSection);
    } else if (achievment) {
        observer.observe(achievment);
    }

    // About page fan are counting  end

    // ------------------Mobile Nav Accordion -----------------

    $(".has-dropdown > a").on("click", function(e) {
        e.preventDefault();
        $(this).siblings(".submenu").toggleClass("active").slideToggle("400");
        $(this).toggleClass("open");
    });

    $(".close-nav").on("click", function() {
        $(".mobile-nav-overlay").toggleClass("active");
        $(".mobile-nav").toggleClass("active");
        $("#nav-lines").toggleClass("active");
    });

    // ------------------- footer------------start--
    // Get the current year
    var currentYear = new Date().getFullYear();
    // Update an element with the current year
    $("#current-year").text(currentYear);

    const socailIcons = $(".socials li");
    const quickLines = $(".wrapper ul li");
    const contactusIcon = $(".icon-wrapper");

    socailIcons.on("mouseover", function() {
        socailIcons.eq(1).removeClass("active");
    });

    quickLines.on("mouseover", function() {
        quickLines.eq(1).removeClass("active");
    });

    contactusIcon.on("mouseover", function() {
        contactusIcon.eq(1).removeClass("active");
    });

    // Scroll To Top Button
    var scrollToTopBtn = $("#scroll-to-top");

    // Show the button when user scrolls down
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            scrollToTopBtn.addClass("show");
        } else {
            scrollToTopBtn.removeClass("show");
        }
    });

    // Smooth scroll to top when the button is clicked
    scrollToTopBtn.on("click", function() {
        // Scroll to top with smooth animation
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    // ------------footer---------End---
});