<template>
  <div class="experience-page">
    <div class="title">
      Professional Experience
    </div>

    <div class="experience-card">
      <div class="row">
        <div class="role">Software Engineer Intern</div>
        <div class="dates">May 2025 - August 2025</div>
      </div>

      <div class="row">
        <div class="company">CACI International Inc.</div>
        <div class="location">Sterling, VA</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Developed full-stack services in Java Spring Boot, Python, and Nuxt.js in an enterprise Linux environment.
          <br>
          Implemented containerization using Podman (Docker CLI), Kubernetes, and Minikube (for local cluster development).
          <br>
          Participated in an Agile development environment and maintained a CI/CD pipeline using Gitlab, Jira, and SonarQube.
        </div>
      </div>
    </div>

    <div class="experience-card">
      <div class="row">
        <div class="role">Infrastructure Firmware Developer Intern</div>
        <div class="dates">May 2024 - August 2024</div>
      </div>

      <div class="row">
        <div class="company">IBM</div>
        <div class="location">Poughkeepsie, NY</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Tool development in Python and Vue.JS to automate and simplify Millicode tasks and analysis.
          <br>
          Implemented data parsing and manipulation techniques and created user-friendly interfaces to enhance data accessibility.
          <br>
          Enhanced assembler language proficiency in a System Z Millicode context.
          <br>
          Implemented containerization with Docker and Red Hat OpenShift
        </div>
      </div>
    </div>

    <div class="experience-card">
      <div class="row">
        <div class="role">Student Researcher</div>
        <div class="dates">November 2024 - May 2025</div>
      </div>
      
      <div class="row">
        <div class="company">Clarkson University Undergraduate Research</div>
        <div class="location">Potsdam, NY</div>
      </div>
      
      <div class="responsibilities">
        <div class="text">
          Researching AI-driven scheduling and timetabling optimization to find intelligent solutions to academic scheduling problems while exploring and confronting the effects of different constraints.
          <br>
          Developing and analyzing algorithms to improve scheduling efficiency and adaptability. This includes using SMT and SAT solvers combined with local search, genetic search, simulated annealing, CSPs, and other AI techniques.
          <br>
          Supervised by Professor Christopher Lynch, and collaborating with a fellow student.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-page {
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

.experience-card {
    background-color: var(--color-secondary);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 1.5rem 6rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    .role {
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
        padding: 1.3rem 0;
        border-top: 1px solid #b9a19555;
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
</style>