/* const data = [
    "Gergely Kiss",
    "Krisztián Bui",
    "Buczkó Balázs",
    "András Varga",
    "Borbála Teréz Kovács"
];
 */

const data = [
    {
        name: "Gergely Kiss",
        favouriteFood: "Csirke/Rizs"
    },
    {
        name: "András Varga",
        favouriteFood: "Brassói"
    },
    {
        name: "Buczkó Balázs",
        favouriteFood: "Kolbászos rájás pizza"
    },
    {
        name: "Krisztián Bui",
        favouriteFood: "Banán"
    },
    {
        name: "Borbála Teréz Kovács",
        favouriteFood: "Avokádó"
    },
    {
        name: "Benett Viszokai",
        favouriteFood: "Alma"
    },
    {
        name: "Krisztián Pörneczi",
        favouriteFood: "Almáspite"
    },
]
function loadEvent() {
    console.log("Az oldal betöltődött");

    const root = document.querySelector("#root")

    for (const frontendStudent of data) {
        root.insertAdjacentHTML("beforeend", `
            <section>
                <h1>${frontendStudent.name}</h1>
                <p>${frontendStudent.favouriteFood}</p>
            </section> 
        `)
    }
}
window.addEventListener("load", loadEvent);