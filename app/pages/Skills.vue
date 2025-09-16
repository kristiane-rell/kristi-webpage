<template>
  <div class="skills-page">
    <div class="title">Technical Skills</div>
    <div class="skills-container">
      <div class="skills-card">
        <div class="header">
          Languages & Frameworks
        </div>
        <div class="list"> 
          <div class="text">
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>Java (Spring Boot)</li>
              <li>C</li>
              <li>Assembly (x86, MIPS, z-Arch)</li>
              <li>JavaScript (Vue.JS/Nuxt.js)</li>
              <li>SQL</li>
              <li>Z3</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="skills-card">
        <div class="header">
          Knowledge Areas
        </div>
        <div class="list"> 
          <div class="text">
            <ul>
              <li>OOP/OOD</li>
              <li>Parallel Computing<br>(MPI, PETSc/SLEPc)</li>
              <li>AI/ML Algorithms</li>
              <li>Containerization</li>
              <li>Low-Level Systems</li>
              <li>Agile Development</li>
              <li>Python Scientific Stack<br>(NumPy, pandas, Matplotlib)</li>
              <li>REST APIs</li>
              <li>Websockets</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="skills-card">
        <div class="header">
          Systems & Tools
        </div>
        <div class="list"> 
          <div class="text">
            <ul>
              <li>Linux</li>
              <li>Git</li>
              <li>GDB</li>
              <li>Kubernetes</li>
              <li>Podman</li>
              <li>Docker</li>
              <li>Docker Compose</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Skills'
  })
</script>

<style scoped>
.skills-page {
  width: 82vw;
  margin-left: 18vw;
}

.skills-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
}

.skills-card {
  background-color: #2e7075cc;
  color: var(--color-secondary);
  font-weight: bold;
  font-size: 1.1rem;
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 1.5rem 1rem;
  flex: 1;
  height: 70vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  .header {
    font-size: 1.3rem;
    margin-bottom: 1.4rem;
    text-align: center;
  }

  .list {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 1.3rem 0;
    border-top: 1px solid #84cca62c;
    margin: 0 -2rem 0 -2rem;
    width: calc(100% + 4rem);

    .text {
      ul {
        list-style-type: disc; 
        margin-left: 1.5rem;
      }

      li {
        margin-bottom: .7rem;
      }
    }
  }
}

.skills-card:first-child {
  margin-left: 3rem; /* or any value you prefer */
}

.skills-card:last-child {
  margin-right: 3rem; /* or any value you prefer */
}

.title {
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  margin-top: 1rem;
  font-weight: bold;
  color: #00423a;
}
</style>