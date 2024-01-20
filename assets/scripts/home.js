const proyectsJSON = "../JSON/proyects.json"

const proyectContainer = document.getElementById("proyects-container")

function fetchProyects() {
    fetch("../JSON/proyects.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const proyects = data;
        proyects.forEach(proyect => {
            if (proyect.outstanding === true) {
                const proyectHTML = `
                <div class="col-md-6 col-lg-4 mb-4">
                  <div class="card custom-card">
                    <img
                      src=${proyect.pictures[0]}
                      class="card-img-top"
                      alt="Imagen 1"
                    />
                    <a href="#">
                      <div class="custom-card-overlay">
                        <div class="card-horizontal-text">
                          <h4 class="card-title text-uppercase">${proyect.name}</h4>
                          <p class="card-text text-uppercase">
                          ${proyect.type} <span class="text-secondary">/</span>
                          </p>
                          <p class="card-text card-text-location text-secondary text-uppercase">
                          ${proyect.location}
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
                proyectContainer.innerHTML += proyectHTML;
            }
        });
        console.log(proyects);
    })
    .catch(error => console.error("Error fetching data:", error));
}

fetchProyects()