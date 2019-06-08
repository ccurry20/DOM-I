const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav selectors
const [nav] = document.getElementsByTagName("nav");
let logo = document.getElementById("logo-img");

// cta selectors
const [cta] = document.getElementsByClassName("cta");
const [ctaH1] = cta.getElementsByTagName("h1");
const [ctaBtn] = cta.getElementsByTagName("button");
const ctaImg = document.getElementById("cta-img");

//main content selectors
const [maincontent] = document.getElementsByClassName("main-content");
const myh4 = maincontent.getElementsByTagName("h4");
const myp = maincontent.querySelectorAll("p");
const mainImg = document.getElementById("middle-img");

//contact section selectors
const [contact] = document.getElementsByClassName("contact");
const mycontacth4 = contact.getElementsByTagName("h4");
const mycontactp = contact.querySelectorAll("p");

//footer section selectors
const [footer] = document.getElementsByTagName("footer");

// update nav links
Array.from(nav.children).forEach((val, idx) => {
  val.textContent = siteContent["nav"][`nav-item-${idx + 1}`];
});

//make navigation green
const navchange = document.querySelectorAll("a");

navchange[0].style.color = "green";
navchange[1].style.color = "green";
navchange[2].style.color = "green";
navchange[3].style.color = "green";
navchange[4].style.color = "green";
navchange[5].style.color = "green";

//add to navigation
const addBlog = document.createTextNode("Blog");
const addHome = document.createTextNode("Home");

const navadd = document.querySelector("nav");
navadd.style.color = "green";

navadd.appendChild(addBlog);
navadd.prepend(addHome);

// update img src for the logo
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// update cta section
ctaH1.textContent = siteContent["cta"]["h1"];
ctaBtn.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

//update main content section
myh4[0].textContent = siteContent["main-content"]["features-h4"];
myh4[1].textContent = siteContent["main-content"]["about-h4"];
myh4[2].textContent = siteContent["main-content"]["services-h4"];
myh4[3].textContent = siteContent["main-content"]["product-h4"];
myh4[4].textContent = siteContent["main-content"]["vision-h4"];

myp[0].textContent = siteContent["main-content"]["features-content"];
myp[1].textContent = siteContent["main-content"]["about-content"];
myp[2].textContent = siteContent["main-content"]["services-content"];
myp[3].textContent = siteContent["main-content"]["product-content"];
myp[4].textContent = siteContent["main-content"]["vision-content"];

mainImg.src = siteContent["main-content"]["middle-img-src"];

//update contact section
mycontacth4[0].textContent = siteContent["contact"]["contact-h4"];
mycontactp[0].textContent = siteContent["contact"]["address"];
mycontactp[1].textContent = siteContent["contact"]["phone"];
mycontactp[2].textContent = siteContent["contact"]["email"];

//update footer section
footer.textContent = siteContent["footer"]["copyright"];
