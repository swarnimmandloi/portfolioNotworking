//scripts
// Script
//------------------------------------------------------------------------------


$(document).ready(function() {
    // console.log('ready!');



     


    // Reset the window scroll position to top on every page load and re-load
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }

    // Fix touch device touch events
    $('body *').on('touchstart', function() {});

    // Set the copyright to the current year in local time
    var currentYear = new Date().getFullYear();
    $('.copyright .year').html(currentYear);
    // console.log('Current year is ' + currentYear);
    // console.log('Setting copyright accordingly');

    // Detect if user prefers dark mode and make it dark
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if ($('body').hasClass('theme--16')) {
            appThemeRemoveAll();
            $('body').addClass('theme--00');
            $('.app-aside .slider').val(0);
        }
    }

    // Auto hide app cover on load
    function hideAppCoverDelay() {
        // window.setTimeout(hideAppCover, 1500);
        window.setTimeout(hideAppCover, 1750);
    }

    function hideAppCover() {
        $('body').removeClass('cover--is--visible');
    }
    hideAppCoverDelay();

    // Auto remove body loading class to have a hook to prevent UI bugs
    function removeLoadingClassDelay() {
        window.setTimeout(removeLoadingClass, 3250);
    }

    function removeLoadingClass() {
        $('body').removeClass('is--loading');
    }
    removeLoadingClassDelay();

    // Scroll to Contact from app header
    $('.app-header .contact').click(function() {
        scrollToContact();
    });

    // Scroll to Intro from app nav
    $('.app-nav .item.intro').click(function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            function scrollDelay() {
                window.setTimeout(scrollToIntro, 300);
            }
            scrollDelay();
        } else {
            scrollToIntro();
        }
    });

    // Scroll to Values from app nav
    $('.app-nav .item.values').click(function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            function scrollDelay() {
                window.setTimeout(scrollToValues, 300);
            }
            scrollDelay();
        } else {
            scrollToValues();
        }
    });

    // Scroll to Background from app nav
    $('.app-nav .item.background').click(function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            function scrollDelay() {
                window.setTimeout(scrollToBackground, 300);
            }
            scrollDelay();
        } else {
            scrollToBackground();
        }
    });

    // Scroll to References from app nav
    $('.app-nav .item.references').click(function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            function scrollDelay() {
                window.setTimeout(scrollToReferences, 300);
            }
            scrollDelay();
        } else {
            scrollToReferences();
        }
    });

    // // Scroll to Work from app nav
    // $('.app-nav .item.work').click(function() {
    //     if ($('body').hasClass('mobile-nav--is--visible')) {
    //         function scrollDelay() {
    //             window.setTimeout(scrollToWork, 300);
    //         }
    //         scrollDelay();
    //     } else {
    //         scrollToWork();
    //     }
    // });

    // Scroll to About from app nav
    $('.app-nav .item.about').click(function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            function scrollDelay() {
                window.setTimeout(scrollToAbout, 300);
            }
            scrollDelay();
        } else {
            scrollToAbout();
        }
    });

    // Scroll to Contact from app nav
    $('.app-nav .item.contact').click(function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            function scrollDelay() {
                window.setTimeout(scrollToContact, 300);
            }
            scrollDelay();
        } else {
            scrollToContact();
        }
    });

    // Mobile nav trigger
    $('.app-header .navigation').click(function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    // Close mobile nav from app nav item
    $('.app-nav .item').click(function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            closeMobileNav();
        }
    });

    // Auto hide app nav on window resize to prevent visibility bugs
    $(window).on('resize', function() {
        if ($('body').hasClass('mobile-nav--is--visible')) {
            closeMobileNav();
        }
    });

    // Make theme slider visible on hover on no touch devices
    $('html.no-touchevents .option.theme').mouseenter(function() {
        $('body').addClass('theme-slider--is--visible');
    });
    $('html.no-touchevents .option.theme').mouseleave(function() {
        $('body').removeClass('theme-slider--is--visible');
    });

    // Make theme slider visible on tap on touch devices
    $('html.touchevents .option.theme').click(function() {
        $('body').addClass('theme-slider--is--visible');
        // alert('option tapped');
    });
    // Make theme slider invisible if anything besides the slider is tapped
    $('html.touchevents').click(function(event) {
        if (!$(event.target).closest('.option.theme').length) {
            $('body').removeClass('theme-slider--is--visible');
        }
    });

    // Theme slider
    $('.app-aside .slider').on('input', function() {
        var sliderValue = $(this).val();

        // put in a leading zero
        if (sliderValue < 10) {
            sliderValue = 0 + sliderValue;
        }
        // console.log(sliderValue);

        // detect and remove class names that start with 'theme--'
        appThemeRemoveAll();

        // add new class name
        $('body').addClass('theme--' + sliderValue);
    });

    // Grid overlay
    $('.option.grid').click(function() {
        appGridOverlay();
    });

    // Intro section options
    $('.section.intro .options').scroll(function() {
        var introOptionsScrollLeft = $('.section.intro .options').scrollLeft();
        if (introOptionsScrollLeft > 0) {
            $('.section.intro .gradient-mask.left').addClass('is--visible');
        } else {
            $('.section.intro .gradient-mask.left').removeClass('is--visible');
        }
    });
    $('.section.intro .option').click(function() {
        $('.section.intro .option').removeClass('is--active');
        $('.section.intro .text').removeClass('is--visible');
    });
    $('.section.intro .option.anyone').click(function() {
        $('.section.intro .option.anyone').addClass('is--active');
        $('.section.intro .text.anyone').addClass('is--visible');
    });
    $('.section.intro .option.recruiters').click(function() {
        $('.section.intro .option.recruiters').addClass('is--active');
        $('.section.intro .text.recruiters').addClass('is--visible');
    });
    $('.section.intro .option.design-directors').click(function() {
        $('.section.intro .option.design-directors').addClass('is--active');
        $('.section.intro .text.design-directors').addClass('is--visible');
    });
    $('.section.intro .option.product-designers').click(function() {
        $('.section.intro .option.product-designers').addClass('is--active');
        $('.section.intro .text.product-designers').addClass('is--visible');
    });
    $('.section.intro .option.product-managers').click(function() {
        $('.section.intro .option.product-managers').addClass('is--active');
        $('.section.intro .text.product-managers').addClass('is--visible');
    });
    $('.section.intro .option.engineers').click(function() {
        $('.section.intro .option.engineers').addClass('is--active');
        $('.section.intro .text.engineers').addClass('is--visible');
    });
    $('.section.intro .option.dyslexic').click(function() {
        $('.section.intro .option.dyslexic').addClass('is--active');
        $('.section.intro .text.dyslexic').addClass('is--visible');
    });

    // Scroll to Contact from text links in sections
    $('.section a.contact').click(function() {
        scrollToContact();
    });


    // Intro section options
    $('.section.intro .option').click(function() {
        var $this = $(this);
        var optionClass = $this.attr('class').split(' ')[1];

        // Only proceed if clicking on an inactive option
        if (!$this.hasClass('is--active')) {
            $('.section.intro .option').removeClass('is--active');
            $('.section.intro .text').removeClass('is--visible');
            
            $this.addClass('is--active');
            $('.section.intro .text.' + optionClass).addClass('is--visible');
            
            // Change the image based on the selected option
            changeIntroImage(optionClass);
        }
    });

  

   

}); // End document ready

// start of Claude


// Function to fetch project data from JSON file
async function fetchProjectData() {
    try {
        const response = await fetch('../data/projects.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching project data:', error);
    }
}

// Function to populate references and personal work sections
function populateProjectSections(projects) {
    populateSection(projects.work, 'references', 'work');
    populateSection(projects.experimental, 'personalwork', 'personal');
}

// Function to populate a specific section with project cards
function populateSection(projects, sectionClass, contentClass) {
    const section = document.querySelector(`.section.${sectionClass} .content.${contentClass}`);
    if (!section) return;

    // Clear existing content
    section.innerHTML = '';

    // Add project cards
    projects.forEach(project => {
        section.appendChild(createProjectCard(project));
    });
}

// Function to create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'item';
    card.innerHTML = `
        <div class="image-container">
            <img src="${project.previewImage}" alt="${project.title}" class="card-image">
        </div>
        <div class="item-content">
            <div class="text-content">
                <h2 class="quote">${project.title}</h2>
                <p class="description">${project.description}</p>
            </div>
            <div class="icon-container">
                <svg class="icon link" xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 -960 960 960" fill="currentColor">
                    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                </svg>
            </div>
        </div>
    `;

    // Add click event to navigate to project details
    card.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent any default action
        window.open(`project.html?id=${project.id}&category=${project.category.toLowerCase()}`, '_blank');
    });

    return card;
}

// Function to load individual project details
function loadProjectDetails(projectId, category) {
    fetchProjectData().then(projects => {
        const projectArray = category === 'work' ? projects.work : projects.experimental;
        const project = projectArray.find(p => p.id === projectId);
        if (project) {
            const projectContent = document.getElementById('project-content');
            projectContent.innerHTML = `
                <h1>${project.title}</h1>
                <p>${project.fullDescription}</p>
                <div class="project-images">
                    ${project.images.map(img => `<img src="${img}" alt="Project image">`).join('')}
                </div>
            `;
        } else {
            console.error('Project not found');
        }
    });
}

// Event listener for page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.section.references') || document.querySelector('.section.personalwork')) {
        fetchProjectData().then(populateProjectSections);
    } else if (document.getElementById('project-content')) {
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get('id');
        const category = urlParams.get('category');
        if (projectId && category) {
            loadProjectDetails(projectId, category);
        }
    }
});

// end of claude

// Keyboard Shortcuts
// reference https://www.w3.org/2002/09/tests/keys.html
$(document).keydown(function(key) {

    switch (parseInt(key.which, 10)) {

        // 'g' key pressed
        case 71:
            // console.log('g key pressed');
            appGridOverlay();
            break;

            // ';' key pressed
        case 186:
            // console.log('; key pressed');
            appGridOverlay();
            break;

            // 'w' key pressed
        case 87:
            // console.log('w key pressed');
            appTheme();
            break;

            // 'b' key pressed
        case 66:
            // console.log('b key pressed');
            appTheme();
            break;

            // 's' key pressed
        case 83:
            // console.log('s key pressed');
            appThemeSpectrum();
            break;
    }
});

// Scroll to Intro
function scrollToIntro() {
    // $('html, body').animate({ scrollTop: $('.section.intro').offset().top }, 750, 'easeOutCubic');
    $('html, body').animate({
        scrollTop: 0
    }, 750, 'easeOutCubic');
}

// Scroll to Values
function scrollToValues() {
    // $('html, body').animate({ scrollTop: $('.section.values').offset().top - 90 }, 750, 'easeOutCubic');
    $('html, body').animate({
        scrollTop: $('.section.values').offset().top
    }, 750, 'easeOutCubic');
}

// Scroll to Background
function scrollToBackground() {
    $('html, body').animate({
        scrollTop: $('.section.background').offset().top
    }, 750, 'easeOutCubic');
}

// Scroll to References
function scrollToReferences() {
    $('html, body').animate({
        scrollTop: $('.section.references').offset().top
    }, 750, 'easeOutCubic');
}

// // Scroll to Work
// function scrollToWork() {
//     $('html, body').animate({
//         scrollTop: $('.section.work').offset().top
//     }, 750, 'easeOutCubic');
// }

// Scroll to About
function scrollToAbout() {
    $('html, body').animate({
        scrollTop: $('.section.personalwork').offset().top
    }, 750, 'easeOutCubic');
}

// Scroll to Contact
function scrollToContact() {

    var pageHeight = $(document).height();
    var viewportHeight = $(window).height();

    var sectionContact = $('.app-main .section.contact')
    var sectionContactHeight = sectionContact.height();
    var sectionContactTop = sectionContact.offset().top;

    if (sectionContactHeight > viewportHeight) {
        $('html, body').animate({
            scrollTop: sectionContactTop
        }, 750, 'easeOutCubic');
    } else {
        $('html, body').animate({
            scrollTop: pageHeight - viewportHeight
        }, 750, 'easeOutCubic');
    }

}

// Open mobile nav
function openMobileNav() {
    $('body').addClass('mobile-nav--is--transitioning');

    function addVisibleClassDelay() {
        window.setTimeout(addVisibleClass, 1);
    }

    function addVisibleClass() {
        $('body').addClass('mobile-nav--is--visible');
    }
    addVisibleClassDelay();
}

// Close mobile nav
function closeMobileNav() {
    $('body').removeClass('mobile-nav--is--visible');

    function removeTransitioningClassDelay() {
        window.setTimeout(removeTransitioningClass, 500);
    }

    function removeTransitioningClass() {
        $('body').removeClass('mobile-nav--is--transitioning');
    }
    removeTransitioningClassDelay();
}

// detect and remove class names that start with 'theme--'
function appThemeRemoveAll() {
    $('body').removeClass(function(index, themeClassName) {
        return (themeClassName.match(/(^|\s)theme--\S+/g) || []).join(' ');
    });
}

// Toggle between black and white themes
function appTheme() {
    if ($('body').hasClass('theme--00')) {
        appThemeRemoveAll();
        $('body').addClass('theme--16');
        $('.app-aside .slider').val(16);
    } else {
        appThemeRemoveAll();
        $('body').addClass('theme--00');
        $('.app-aside .slider').val(0);
    }
}

// Cycle through all themes
function appThemeSpectrum() {
    if ($('body').hasClass('theme--16')) {
        appThemeRemoveAll();
        $('body').addClass('theme--15');
        $('.app-aside .slider').val(15);
    } else if ($('body').hasClass('theme--15')) {
        appThemeRemoveAll();
        $('body').addClass('theme--14');
        $('.app-aside .slider').val(14);
    } else if ($('body').hasClass('theme--14')) {
        appThemeRemoveAll();
        $('body').addClass('theme--13');
        $('.app-aside .slider').val(13);
    } else if ($('body').hasClass('theme--13')) {
        appThemeRemoveAll();
        $('body').addClass('theme--12');
        $('.app-aside .slider').val(12);
    } else if ($('body').hasClass('theme--12')) {
        appThemeRemoveAll();
        $('body').addClass('theme--11');
        $('.app-aside .slider').val(11);
    } else if ($('body').hasClass('theme--11')) {
        appThemeRemoveAll();
        $('body').addClass('theme--10');
        $('.app-aside .slider').val(10);
    } else if ($('body').hasClass('theme--10')) {
        appThemeRemoveAll();
        $('body').addClass('theme--09');
        $('.app-aside .slider').val(9);
    } else if ($('body').hasClass('theme--09')) {
        appThemeRemoveAll();
        $('body').addClass('theme--08');
        $('.app-aside .slider').val(8);
    } else if ($('body').hasClass('theme--08')) {
        appThemeRemoveAll();
        $('body').addClass('theme--07');
        $('.app-aside .slider').val(7);
    } else if ($('body').hasClass('theme--07')) {
        appThemeRemoveAll();
        $('body').addClass('theme--06');
        $('.app-aside .slider').val(6);
    } else if ($('body').hasClass('theme--06')) {
        appThemeRemoveAll();
        $('body').addClass('theme--05');
        $('.app-aside .slider').val(5);
    } else if ($('body').hasClass('theme--05')) {
        appThemeRemoveAll();
        $('body').addClass('theme--04');
        $('.app-aside .slider').val(4);
    } else if ($('body').hasClass('theme--04')) {
        appThemeRemoveAll();
        $('body').addClass('theme--03');
        $('.app-aside .slider').val(3);
    } else if ($('body').hasClass('theme--03')) {
        appThemeRemoveAll();
        $('body').addClass('theme--02');
        $('.app-aside .slider').val(2);
    } else if ($('body').hasClass('theme--02')) {
        appThemeRemoveAll();
        $('body').addClass('theme--01');
        $('.app-aside .slider').val(1);
    } else if ($('body').hasClass('theme--01')) {
        appThemeRemoveAll();
        $('body').addClass('theme--00');
        $('.app-aside .slider').val(0);
    } else if ($('body').hasClass('theme--00')) {
        appThemeRemoveAll();
        $('body').addClass('theme--16');
        $('.app-aside .slider').val(16);
    }
}

// Grid overlay
function appGridOverlay() {
    $('.app-grid-overlay').toggleClass('is--visible');
}

// App main scroll ( Claude )
$(window).on('load resize scroll', function() {
    var viewportHeight = $(window).height();
    var viewportHeightHalf = viewportHeight / 2;
    var appMainScrollTop = $(window).scrollTop();
    var appMainScrollMiddle = appMainScrollTop + viewportHeightHalf;

    var appNavItem = $('.app-nav .item');
    var sectionIntro = $('.app-main .section.intro');
    var sectionReferences = $('.app-main .section.references');
    var sectionPersonalwork = $('.app-main .section.personalwork');
    var sectionContact = $('.app-main .section.contact');

    appNavItem.removeClass('is--active');

    if (appMainScrollTop < sectionIntro.height() / 2) {
        // If we're in the top half of the intro section, keep Intro active
        $('.app-nav .item.intro').addClass('is--active');
    } else if (sectionReferences.offset().top <= appMainScrollMiddle && 
               sectionReferences.offset().top + sectionReferences.height() > appMainScrollMiddle) {
        $('.app-nav .item.references').addClass('is--active');
    } else if (sectionPersonalwork.offset().top <= appMainScrollMiddle && 
               sectionPersonalwork.offset().top + sectionPersonalwork.height() > appMainScrollMiddle) {
        $('.app-nav .item.about').addClass('is--active');
    } else if (sectionContact.offset().top <= appMainScrollMiddle) {
        $('.app-nav .item.contact').addClass('is--active');
    }
}); // End app main scroll


// Intro section options iamge Claude
$(document).ready(function() {
    console.log('Document ready');

    $('.section.intro .options .option').click(function() {
        console.log('Option clicked:', this);

        var $this = $(this);
        var optionClass = $this.attr('class').split(' ')[1];
        console.log('Option class:', optionClass);

        // Update active classes
        $('.section.intro .options .option').removeClass('is--active');
        $('.section.intro .texts .text').removeClass('is--visible');
        
        $this.addClass('is--active');
        $('.section.intro .texts .text.' + optionClass).addClass('is--visible');
        
        // Change the image
        changeIntroImage(optionClass);
    });

    function changeIntroImage(option) {
        console.log('Changing image for option:', option);
        var imagePath = getImagePathForOption(option);
        console.log('Image path:', imagePath);

        var $introImage = $('.section.intro .intro-image img');
        console.log('Image element found:', $introImage.length > 0);

        $introImage.attr('src', imagePath);
    }

    function getImagePathForOption(option) {
        var imagePaths = {
            'anyone': 'assets/profile/Billy-Sweeney-1600x1600.jpg',
            'recruiters': 'assets/profile/Swarnim2k.png',
            'design-directors': 'assets/profile/Billy-Sweeney-1600x1600.jpg',
            'product-designers': 'assets/profile/Swarnim2k.png',
            'product-managers': 'assets/profile/Billy-Sweeney-1600x1600.jpg',
            'engineers': 'assets/profile/Billy-Sweeney-1600x1600.jpg',
            'dyslexic': 'assets/profile/Billy-Sweeney-1600x1600.jpg'
        };
        return imagePaths[option] || imagePaths['anyone'];
    }
});
