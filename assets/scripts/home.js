const projectsJSON = "../JSON/projects.json";
const projectContainer = document.getElementById("projects-container");

async function fetchProjects() {
  try {
    const response = await fetch(projectsJSON);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    const projects = data;

    projects.forEach((project) => {
      if (project.outstanding === true) {
        const projectHTML = `
          <!-- Your existing HTML template here -->
        `;
        projectContainer.innerHTML += projectHTML;
      }
    });

    console.log("Projects:", projects);
  } catch (error) {
    console.error("Error fetching data:", error);
    console.error("Response details:", response); // Add this line for more details
  }
}

fetchProjects();