const projectsJSON = "../banalesArquitecto/assets/JSON/projects.json";
const projectContainer = document.getElementById("projects-container");

async function fetchProjects(URL) {
  try {
      const response = await fetch(URL);

      if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      const projects = data;

      projects.forEach(project => {
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

document.addEventListener("DOMContentLoaded", async () => {
    await fetchProjects(projectsJSON)
})
