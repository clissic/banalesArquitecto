/* const projectsJSON = "../../JSON/projects.json"; */
const projectContainer = document.getElementById("projects-container");

/* async function fetchProjects(URL) {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const projects = data;

    projects.forEach((project) => {
      if (project.outstanding === true) {
        const projectHTML = `
                  <div class="col-md-6 col-lg-4 mb-4">
                      <div class="card custom-card">
                          <img src="${project.pictures[0]}" class="card-img-top" alt="Imagen 1" />
                          <a href="./pages/${project.url}">
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
        projectContainer.innerHTML += projectHTML;
      }
    });

    console.log(projects);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchProjects(projectsJSON); */

/* const jsonFilePath = "../JSON/projects.json"; */

document.addEventListener("DOMContentLoaded", async () => {
  // Realiza la solicitud fetch
  await fetch("../assets/JSON/projects.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const projects = data;

      projects.forEach((project) => {
        if (project.outstanding === true) {
          const projectHTML = `
                  <div class="col-md-6 col-lg-4 mb-4">
                      <div class="card custom-card">
                          <img src="${project.pictures[0]}" class="card-img-top" alt="Imagen 1" />
                          <a href="./pages/${project.url}">
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
          projectContainer.innerHTML += projectHTML;
        }
      });
      console.log(data);
    })
    .catch((error) => {
      console.error("Error en la solicitud fetch:", error);
    });
});
