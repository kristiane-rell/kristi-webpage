<template>
  <div class="experience-page">
    <div class="title">
      Professional Experience
    </div>
    <div class="experience-card">
      <div class="role">Software Engineer Intern</div>
      <div class="company">CACI International Inc.</div>
      <div class="location">Sterling, VA</div>
      <div class="dates">May 2025 - August 2025</div>
      <div class="responsibilities">
        Developed full-stack services in Java Spring Boot, Python, and Nuxt.js in an enterprise Linux environment.
        Implemented containerization using Podman (Docker CLI), Kubernetes, and Minikube (for local cluster development).
        Participated in an Agile development environment and maintained a CI/CD pipeline using Gitlab, Jira, and SonarQube.
      </div>
    </div>
    <div class="experience-card">
      <div class="role">Infrastructure Firmware Developer Intern</div>
      <div class="company">IBM</div>
      <div class="location">Poughkeepsie, NY</div>
      <div class="dates">May 2024 - August 2024</div>
      <div class="responsibilities">
        Researching AI-driven scheduling and timetabling optimization to find intelligent solutions to academic scheduling problems while exploring and confronting the effects of different constraints.
        Developing and analyzing algorithms to improve scheduling efficiency and adaptability. This includes using SMT and SAT solvers combined with local search, genetic search, simulated annealing, CSPs, and other AI techniques.
        Supervised by Professor Christopher Lynch, and collaborating with a fellow student.
      </div>
    </div>
    <div class="experience-card">
      <div class="role">Student Researcher</div>
      <div class="company">Clarkson University Undergraduate Research</div>
      <div class="location">Potsdam, NY</div>
      <div class="dates">November 2024 - May 2025</div>
      <div class="responsibilities">
        <div>Developed full-stack services in Java Spring Boot, Python, and Nuxt.js in an enterprise Linux environment.</div>
        <div>Implemented containerization using Podman (Docker CLI), Kubernetes, and Minikube (for local cluster development).</div>
        <div>Participated in an Agile development environment and maintained a CI/CD pipeline using Gitlab, Jira, and SonarQube.</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-page {
  width: 82vw;
  margin-left: 18vw;
}

.title {
    display: flex;
    justify-content: center;
    font-size: 3rem;
    margin: 2rem;
    font-weight: bold;
    color: var(--color-secondary);
}

.experience-card {
    background-color: var(--color-secondary);
    border-radius: 12px;
    padding: 3rem;
    margin: 2rem 4rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    .role {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
    .company {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    .location {
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }
    .dates {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }
    .responsibilities {
        font-size: 1.52rem;
        margin-bottom: 0.5rem;

        div {
            margin-bottom: 0.5rem;
        }
    }
}

</style>