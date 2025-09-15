<template>
  <div class="project-page">
    <div class="title">
      Projects
    </div>

    <div class="project-card">
      <div class="row">
        <div class="project-name">Dashboard Web Application</div>
        <div class="dates">May 2025 - August 2025</div>
      </div>
      
      <div class="row">
        <div class="company">CACI International Inc.</div>
      </div>
      
      <div class="responsibilities">
        <div class="text">
          Developed a dashboard website with customizable modules (i.e. maps & tables) for users to ingest and analyze data.
          <br>
          Implemented microservices and websockets using Java Spring Boot to ingest live data to the frontend & MongoDB.
          <br>
          Designed and implemented a clean user interface with customizable drag & drop dashboards using Nuxt.js.
          <br>
          Containerized the web application using Podman, Kubernetes, and Ingress in an enterprise Linux environment.
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="row">
        <div class="project-name">Coverage Project</div>
        <div class="dates">May 2024 - August 2024</div>
      </div>
      
      <div class="row">
        <div class="company">IBM</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Decoded and parsed binary files to extract code coverage information in Python.
          <br>
          Manipulated and processed extracted information into digestible JSON dictionaries in Python.
          <br>
          Developed a web application to display and allow convenient access to the data using Vue.js and Python.
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="row">
        <div class="project-name">University Final Exam Scheduler</div>
        <div class="dates">November 2024 - May 2025</div>
      </div>

      <div class="row">
        <div class="company">Clarkson University Undergraduate Research</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Developed an AI-based exam scheduler using local search (hill climbing with random restarts). Implemented in C++.
          <br>
          Ensured no student had overlapping exams while respecting room capacity constraints.
          <br>
          Achieved efficient and complete scheduling, significantly outperforming brute-force approaches in large search spaces.
        </div>
      </div>
    </div>

    <div class="project-card">
      <div class="row">
        <div class="project-name">Climbing Website</div>
        <div class="dates">July 2025 - Present</div>
      </div>

      <div class="row">
        <div class="company">Personal</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Developing a website that allows climbers on the East Coast to easily find information on climbing areas and routes.
          <br>
          Developed backend services with Flask and MongoDB for data management and frontend templates using Django.
          <br>
          Containerized the application with Docker/Docker Compose and automated deployment through a CI/CD pipeline.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-page {
  width: 82vw;
  margin-left: 18vw;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.title {
    display: flex;
    justify-content: center;
    font-size: 1.8rem;
    margin: 1rem;
    font-weight: bold;
    color: var(--color-secondary);
}

.project-card {
    background-color: #fff8f42d;
    color: var(--color-secondary);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 1.5rem 6rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;

    .project-name {
        font-size: 1.3rem;
        font-weight: bold;
   }
    .company {
        font-size: 1.1rem;
        margin-bottom: 1.4rem;
    }
    .location {
        font-size: 1rem;
    }
    .dates {
        font-size: 1.1rem;
    }
    .responsibilities {
        font-size: 1.1rem;
        font-weight: 600;
        padding: 1.3rem 0;
        border-top: 1px solid #ffe3d52c;
        margin: 0 -2rem 0 -2rem;;
        width: calc(100% + 4rem);

        .text {
          margin: 0 2rem;

          br {
            margin-bottom: 0.3rem;
          }
        }
    }
}

.project-card:hover {
  background-color: rgba(253, 179, 150, 0.286);
}
</style>