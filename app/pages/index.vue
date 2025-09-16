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
      </div>
      <div class="picture">
        <img src="/images/headshot.jpg" alt="headshot" />
      </div>  
    </div>
    
  </div>
</template>

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
  padding: 2rem;
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
}
</style>
