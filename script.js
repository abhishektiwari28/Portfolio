// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            if(id) {
                let activeLink = document.querySelector('header nav a[href="#'+ id +'"]');
                if(activeLink) {
                    activeLink.classList.add('active');
                }
            }
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Show More Projects functionality
let showMoreBtn = document.getElementById('showMoreBtn');
let hiddenProjects = document.querySelectorAll('.hidden-project');
let isExpanded = false;

showMoreBtn.addEventListener('click', () => {
    if (!isExpanded) {
        hiddenProjects.forEach(project => {
            project.style.display = 'block';
        });
        showMoreBtn.textContent = 'Show Less Projects';
        isExpanded = true;
    } else {
        hiddenProjects.forEach(project => {
            project.style.display = 'none';
        });
        showMoreBtn.textContent = 'Show More Projects';
        isExpanded = false;
    }
});

// Show More Certifications functionality
let showMoreCertBtn = document.getElementById('showMoreCertBtn');
let hiddenCerts = document.querySelectorAll('.hidden-cert');
let isCertExpanded = false;

showMoreCertBtn.addEventListener('click', () => {
    if (!isCertExpanded) {
        hiddenCerts.forEach(cert => {
            cert.style.display = 'block';
        });
        showMoreCertBtn.textContent = 'Show Less Certifications';
        isCertExpanded = true;
    } else {
        hiddenCerts.forEach(cert => {
            cert.style.display = 'none';
        });
        showMoreCertBtn.textContent = 'Show More Certifications';
        isCertExpanded = false;
    }
});


// Certificate Modal Functions
function openCertModal(imagePath) {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');
    modal.style.display = 'block';
    modalImg.src = imagePath;
}

function closeCertModal() {
    document.getElementById('certModal').style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    const modal = document.getElementById('certModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
