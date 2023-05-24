function showContent(contentId) {
    var sectionOrder = ['home', 'aboutUs', 'currentAffairs', 'investmentApplication', 'contactUs', 'opinion'];

    var contentSections = document.getElementsByClassName('content-section');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }

    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    var contentContainer = document.getElementById('contentContainer');
    contentContainer.insertBefore(selectedContent, contentContainer.firstChild);

    for (var i = 0; i < sectionOrder.length; i++) {
        var section = document.getElementById(sectionOrder[i]);
        contentContainer.appendChild(section);
    }
}

var investmentApplicationButton = document.getElementById('investmentApplicationButton');
investmentApplicationButton.addEventListener('click', function(event) {
    event.preventDefault();
    var contentId = investmentApplicationButton.getAttribute('data-content');
    showContent(contentId);
});

var contactUsButton = document.getElementById('contactUsButton');
contactUsButton.addEventListener('click', function(event) {
    event.preventDefault();
    var contentId = contactUsButton.getAttribute('data-content');
    showContent(contentId);
});

var opinionButton = document.getElementById('opinionButton');
opinionButton.addEventListener('click', function(event) {
    event.preventDefault();
    var contentId = opinionButton.getAttribute('data-content');
    showContent(contentId);
});

// Function to toggle the visibility of the report form
function toggleForm(formId) {
    var form = document.getElementById(formId);
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
}

// Event listener for the contact form submission
var contactForm = document.getElementById('investmentForm');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Here, you can handle the form submission logic
    // For example, you can retrieve the form data and send it to the server
});

// Event listener for the report form submission
var reportForm = document.getElementById('reportForm');
reportForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Here, you can handle the report form submission logic
    // For example, you can retrieve the form data and send it to the server
});

// Function to show the 'contact' content section
function showContact() {
    var contentSections = document.getElementsByClassName('content-section');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }
    var contactSection = document.getElementById('contact');
    contactSection.style.display = 'block';
}

// Function to show the 'corruption' content section
function showCorruption() {
    var contentSections = document.getElementsByClassName('content-section');
    for (var i = 0; i < contentSections.length; i++) {
        contentSections[i].style.display = 'none';
    }
    var corruptionSection = document.getElementById('corruption');
    corruptionSection.style.display = 'block';
}

// Event listener for the 'contact' link/button
var contactLink = document.getElementById('contactLink');
contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    showContact();
});

// Event listener for the 'corruption' link/button
var corruptionLink = document.getElementById('corruptionLink');
corruptionLink.addEventListener('click', function(event) {
    event.preventDefault();
    showCorruption();
});

// Reverse scrolling direction
window.addEventListener('wheel', function(event) {
    event.preventDefault(); // Prevent default scrolling behavior

    // Calculate the new scroll position
    var scrollAmount = event.deltaY * -1;
    var newScrollPosition = window.scrollY + scrollAmount;

    // Scroll to the new position
    window.scrollTo({
        top: newScrollPosition,
        behavior: 'smooth' // Optionally, add smooth scrolling behavior
    });
});