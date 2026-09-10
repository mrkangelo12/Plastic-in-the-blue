const information = [

    {
    icon: "images/card1-plastic.png",
    category: "PHILIPPINE CONTEXT",
    title: "Plastic in the Philippines",
    text: `
        <p>The Philippines faces a significant plastic waste problem. The World Bank reports that around 2.7 million tons of plastic waste are generated in the country each year. The widespread use of plastic products and packaging, together with challenges in waste management, makes plastic waste an important environmental concern in the Philippines.</p>

        <p>One example is the widespread use of small, single-use plastic sachets. The Philippines is often described as a “sachet economy” because sachets and other flexible plastic packaging are widely used for products such as food, personal care items, and household goods. By some estimates, the country consumes around 163 million sachets each day.</p>

        <p><h4>WHY IT MATTERS</h4></p>

        <p>The plastic problem does not end when a product is thrown away. What happens after use depends on how plastic waste is collected, managed, and disposed of. When waste is not properly managed, plastic can accumulate in communities and enter drainage systems, creeks, and other waterways.</p>
        
        <p><h4>FROM LAND TO WATER</h4></p>
        
        <p>PlasticPlastic waste can move through waterways and rivers and eventually reach coastal and marine environments. This pathway can be seen in Philippine waterways connected to Manila Bay. For example, DENR-NCR has documented large amounts of discarded plastic packaging in the Nangka River and noted that improperly disposed waste can contribute to pollution in the Marikina River and Manila Bay.</p>
        
        <p>Understanding plastic in the Philippines therefore means looking beyond the waste we see on streets and shorelines. It also means understanding how everyday plastic use, waste management, and the movement of discarded plastic are connected to wider concerns about marine pollution and environmental health.</p>
        
        <p class="source-label"><strong>Source:</strong></p>

<a
    href="https://www.worldbank.org/en/country/philippines/publication/market-study-for-philippines-plastics-circularity-opportunities-and-barriers-report-landing-page"
    target="_blank"
    rel="noopener noreferrer"
    class="source-button"
>
    <strong>World Bank ↗</strong>
</a>
        
    `
},


    {
        icon: "♻️",

        category: "ENVIRONMENT",

        title: "Plastic Pollution",

        text:
            "Plastic waste can travel through communities, waterways, rivers, and coastal areas. Understanding these pathways helps researchers study how plastic reaches marine environments."
    },


    {
        icon: "🐠",

        category: "MARINE LIFE",

        title: "Marine Ecosystems",

        text:
            "Marine ecosystems contain many organisms that interact with one another and with their surrounding environment. Changes in these systems can affect marine life."
    },


    {
        icon: "🔬",

        category: "RESEARCH",

        title: "Microplastics",

        text:
            "Microplastics are very small plastic particles studied by researchers in different environments. Scientists investigate their presence, movement, and interaction with ecosystems."
    }

];


function openCard(number) {

    const data = information[number];

    const modal =
        document.getElementById("modal");


    document.getElementById("modalIcon").innerHTML =
    `<img src="${data.icon}" alt="Plastic logo">`;


    document.getElementById("modalCategory").textContent =
        "";


    document.getElementById("modalTitle").textContent =
        data.title;


    document.getElementById("modalText").innerHTML =
        data.text;


    modal.classList.add("open");

}


function closeCard() {

    const modal =
        document.getElementById("modal");


    modal.classList.remove("open");

}


/* CLICK OUTSIDE THE BOX */

document.getElementById("modal").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {

            closeCard();

        }

    }
);


/* ESC KEY */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeCard();

        }

    }
);


/* SMOOTH NAVIGATION */

document.querySelectorAll(".quick-nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


/* MOBILE: AUTO-HIDE NAVIGATION */

let scrollTimer;

window.addEventListener("scroll", function() {

    if (window.innerWidth > 700) return;

    const nav = document.querySelector(".quick-nav");

    nav.style.opacity = "0";
    nav.style.pointerEvents = "none";

    clearTimeout(scrollTimer);

    scrollTimer = setTimeout(function() {

        nav.style.opacity = "1";
        nav.style.pointerEvents = "auto";

    }, 800);

});