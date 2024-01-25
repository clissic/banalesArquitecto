let projects = [];
const projectsJSON = "../JSON/projects.json";
const allProjectsContainer = document.getElementById("all-projects-container");

async function fetchAllProjects() {
    try {
        const response = await fetch("../JSON/projects.json");

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        projects = data;

        projects.forEach(project => {
            const projectHTML = `
                <div class="col-md-6 col-lg-4 mb-4 project-card">
                    <div class="card custom-card" data="${project.id}">
                        <img src="${"." + project.pictures[0]}" class="card-img-top" alt="Imagen 1" />
                        <a href="${project.url}">
                            <div class="custom-card-overlay">
                                <div class="card-horizontal-text">
                                    <h4 class="card-title text-uppercase">${project.name}</h4>
                                    <p class="card-text text-uppercase">
                                        ${project.type} <span class="text-secondary">/</span>
                                    </p>
                                    <p class="card-text card-text-location text-secondary text-uppercase">
                                        ${project.location}
                                    </p>
                                </div>
                                <div class="card-vertical-text">
                                    <p>VER MAS</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            `;
            allProjectsContainer.innerHTML += projectHTML;
        });
        console.log(projects.map(project => project.name));
        return projects;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchAllProjects()

const filterTodos = document.getElementById("filter-todos");
const filterRetail = document.getElementById("filter-retail");
const filterResidencial = document.getElementById("filter-residencial");

filterRetail.addEventListener("click", function () {
    filterProjectsByType(" Retail");

    filterTodos.classList.remove("active");
    filterResidencial.classList.remove("active");

    filterRetail.classList.add("active");
});

filterResidencial.addEventListener("click", () => {
    filterProjectsByType(" Residencial");

    filterTodos.classList.remove("active");
    filterRetail.classList.remove("active");

    filterResidencial.classList.add("active");
})

filterTodos.addEventListener("click", () => {
    filterProjectsByType(" Todos");

    filterResidencial.classList.remove("active");
    filterRetail.classList.remove("active");

    filterTodos.classList.add("active");
})

function filterProjectsByType(type) {
    const filteredProjects = type === " Todos" ? projects : projects.filter(project => project.type.includes(type));

    allProjectsContainer.innerHTML = "";

    filteredProjects.forEach(project => {
        const projectHTML = `
            <div class="col-md-6 col-lg-4 mb-4 project-card">
                <div class="card custom-card" data="${project.id}">
                    <img src="${"." + project.pictures[0]}" class="card-img-top" alt="Imagen 1" />
                    <a href="${project.url}">
                        <div class="custom-card-overlay">
                            <div class="card-horizontal-text">
                                <h4 class="card-title text-uppercase">${project.name}</h4>
                                <p class="card-text text-uppercase">
                                    ${project.type.join(", ")} <span class="text-secondary">/</span>
                                </p>
                                <p class="card-text card-text-location text-secondary text-uppercase">
                                    ${project.location}
                                </p>
                            </div>
                            <div class="card-vertical-text">
                                <p>VER MAS</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;

        allProjectsContainer.insertAdjacentHTML("beforeend", projectHTML);
    });
}
