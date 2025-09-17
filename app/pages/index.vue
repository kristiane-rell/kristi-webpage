<template>
  <div class="home-page">
    <div class="bio-card">
      <div class="text">
        <div class="first-line">Hi!</div>
        I'm a senior Computer Science major at Clarkson University.
        <br>
        <br>
        I'm graduating in December 2025 with a B.S. in Computer Science and a minor in Mathematics.
        <br >
        <br>
        I'm currently seeking full-time opportunities in software or firmware engineering & development.
        <br>
        <a href="/files/resume.pdf" download>
          <button class="download-btn">Download Resume</button>
        </a>
      </div>
      <div class="picture">
        <img src="/images/headshot.jpg" alt="headshot" />
      </div>  
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Home'
  })
</script>

<style scoped>
.home-page {
  width: 82vw;
  margin-left: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture img {
  /* padding: 2rem; */
  width: 400px;      
  height: auto;      
  max-width: 100%;
  border-radius: 6rem; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.picture {
  padding: 2rem;
}


.text {
  padding: 2.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-secondary);
  width: 50%;

  .first-line {
    font-size: 2.5rem;
  }
}

.bio-card {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  background-color:  #00423a95;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.bio-card:hover {
  background-color: #00504795;
}

.download-btn {
  background-color: #84cca6;
  color: var(--color-secondary);
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  border-radius: 2rem;
  padding: 0.8rem 1.5rem;
  margin: 1rem 10rem;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.download-btn:hover {
  background-color: #9ad7b6;
}
</style>
