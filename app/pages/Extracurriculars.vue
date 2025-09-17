<template>
  <div class="extracurriculars-page">
    <div class="title">
      Extracurriculars
    </div>

    <div class="extracurriculars-card">
      <div class="row">
        <div class="org">Girls Who Code</div>
        <div class="dates">August 2023 - Present</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Workshops, hackathons, professional speakers, early career development
        </div>
        <div class="picture">
          <img src="/images/gwc.jpg" alt="headshot" />
        </div>
      </div>
    </div>

    <div class="extracurriculars-card">
      <div class="row">
        <div class="org">Society of Women Engineers</div>
        <div class="dates">August 2022 - Present</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Networking, professional speakers and development, community outreach       
        </div>
        <div class="picture">
          <img src="/images/swe.png" alt="headshot" />
        </div>
      </div>
    </div>

    <div class="extracurriculars-card">
      <div class="row">
        <div class="org">Clarkson University Climbing Wall</div>
        <div class="dates">August 2023 - Present</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Skill development, leadership, safety management
        </div>
        <div class="picture">
          <img src="/images/wall.jpg" alt="headshot" />
        </div> 
      </div>
    </div>

    <div class="extracurriculars-card">
      <div class="row">
        <div class="org">Clarkson University Outing Club</div>
        <div class="dates">August 2022 - Present</div>
      </div>

      <div class="responsibilities">
        <div class="text">
          Outdoor skill development, leadership, community service
        </div>
        <div class="picture">
          <img src="/images/cuoc1.jpg" alt="headshot" />
        </div>
      </div>
      </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Extracurriculars'
  })
</script>

<style scoped>
.extracurriculars-page {
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
  color: #00423a;
}

.extracurriculars-card {
    background-color: #2b7e50b9;
    color: var(--color-secondary);
    border-radius: 1.5rem;
    padding: 2rem;
    margin: 1.5rem 6rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;

    .org {
        font-size: 1.3rem;
        font-weight: bold;
        margin-bottom: 1.4rem;
   }
    .dates {
        font-size: 1.1rem;
    }
    .responsibilities {
      font-size: 1.1rem;
      font-weight: 600;
      padding: 1rem 0;
      border-top: 1px solid #84cca62c;
      margin: 0 -2rem 0 -2rem;
      width: calc(100% + 4rem);
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;

      .text {
        margin: 0 2rem;

        br {
          margin-bottom: 0.3rem;
        }
      }
    }
}

.extracurriculars-card:hover {
  background-color: rgba(55, 134, 92, 0.708);
}

.picture img {
  /* padding: 2rem; */
  width: 600px;      
  height: auto;      
  max-width: 100%;
  border-radius: 1rem; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.picture {
  padding-right: 2rem;
  padding-top: 1rem;
}

</style>