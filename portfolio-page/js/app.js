$(document).ready(function() {
    
    // import json file
    $.getJSON("/portfolio-page/js/projects.json", function(data) {
        let projects = data.projects;  // Ensure projects is only available here
        let certificates = data.certificates;
        let youtube = data.youtube;
        
        // Now that projects is loaded, append them to the portfolio-block
        projects.forEach(project => {
            $(".portfolio-block[data-type=projects]").append(`
                <div class="card">
                    <div class="card-body">
                        <img src="${project.cover}" alt="">
                        <h5 class="card-title">${project.title}</h5>
                    </div>
                </div>
            `);
        });

        let y =0 ;
        // Now that projects is loaded, append them to the portfolio-block
        certificates.forEach(project => {
            y++;
            if(y > 8) {
                return;
            }
            $(".portfolio-block[data-type=certificates]").append(`
                <div class="card">
                    <div class="card-body">
                        <div class="certificate-div"><img src="${project.cover}" alt=""></div>
                        <h5 class="card-title">${project.title}</h5>
                    </div>
                </div>
            `);
        });

        let x = 0;
        // Now that projects is loaded, append them to the portfolio-block
        youtube.forEach(project => {
            x++;
            if(x > 4) {
                return;
            }
            let url = project.url;
            // embed url
            url = url.replace("https://www.youtube.com/watch?v=", "https://www.youtube.com/embed/");
            url = url.replace("https://youtu.be/", "https://www.youtube.com/embed/");
            $(".portfolio-block[data-type=youtube]").append(`
                <div class="card">
                    <div class="card-body">
                        <iframe src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            `);
        });
    });

    $(".portfolio-nav-item").on("click", function() {
        $(".portfolio-nav-item").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-type");  
        $(".portfolio-block").removeClass("active"); 
        $(".portfolio-block[data-type=" + selector + "]").addClass("active");
    });

    $("#contact-form").submit(function(e) {
        e.preventDefault();

        var name = $("#name").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();
        var message = $("#message").val();

        $.ajax({
            type: "POST",
            url: "https://imronit.in/portfolio-page/php/contact.php",
            data: {
                name: name,
                email: email,
                mobile: mobile,
                message: message
            },
            dataType: "json",
            encode: true
        })
        .done(function() {
            $(".form-message").text("Thank you for your message, I will get back to you soon.").addClass("success").removeClass("error");
        })
        .fail(function() {
            $(".form-message").text("Oops! Something went wrong. Please try again.").addClass("error").removeClass("success");
        }); 
    });

    // Toggle navigation menu on click of nav-toggle
$(".nav-toggle").on("click", function(e) {
    e.stopPropagation();  // Prevents the click event from bubbling up to the document
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).html("<i class='fas fa-bars'></i>");
        $(".header-ul").removeClass("active");
    } else {
        $(this).addClass("active");
        $(this).html("<i class='fa-solid fa-xmark'></i>");
        $(".header-ul").addClass("active");
    }
});

// Close the menu when a nav link is clicked
$(".header-ul li a").on("click", function() {
    if ($(".header-ul").hasClass("active")) {
        $(".nav-toggle").removeClass("active");
        $(".nav-toggle").html("<i class='fas fa-bars'></i>");
        $(".header-ul").removeClass("active");
    }
});

// Close the menu if clicked outside the header and nav-toggle
$(document).on("click", function(e) {
    // Check if the clicked element is outside the header and nav-toggle
    if (!$(e.target).closest("header").length && !$(e.target).is(".nav-toggle, .nav-toggle *")) {
        if ($(".header-ul").hasClass("active")) {
            $(".nav-toggle").removeClass("active");
            $(".nav-toggle").html("<i class='fas fa-bars'></i>");
            $(".header-ul").removeClass("active");
        }
    }
});

$("h1").on("click", function() {
//    go to home section
    $("html, body").animate({
        scrollTop: $("#home").offset().top
    }, 1);

});

  
});
