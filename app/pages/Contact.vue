<template>
  <div class="contact-page">
    <div class="contact-card">
      <div class="text">
        <div class="first-line">Contact Me</div>
        <div class="line">
          <Icon class="icon" name="mdi-light:email" />
          kristiane.rell@gmail.com
        </div>
        <div class="line">
          <Icon class="icon" name="ph:phone-call-light" />
          (845) 681-9616
        </div>
        <div class="line">
          <Icon class="icon" name="arcticons:linkedin" />
          linkedin.com/in/kristiane-rell
        </div>
      </div>
      <div class="picture">
        <img src="/images/gunks.jpg" alt="cliff" />
      </div>  
    </div>
  </div>
</template>

<script setup>
  useHead({
    title: 'Contact'
  })
</script>

<style scoped>
.contact-page {
  width: 82vw;
  margin-left: 18vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

.picture img {
  width: 500px;      
  height: auto;      
  max-width: 100%;
  border-radius: 4rem; 
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

  .first-line {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    /* color: #feeeff; */
  }

  .line {
    margin-left: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
}

.contact-card {
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

.contact-card:hover {
  background-color: #00504795;
}

.icon {
  width: 2rem;
  height: 2rem;
  margin-right: 0.75rem;
}
</style>