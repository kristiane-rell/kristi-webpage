<template>
  <div class="app-header">
    <NuxtLink class="main-row" to="/">
      <div class="main-link">Kristiane Rell</div>
    </NuxtLink>
    <div class="link-rows">
      <NuxtLink class="rows" to="/experience">
        <div class="link">
          <Icon class="icon" name="material-symbols-light:work-outline" />
          Experience
        </div>
      </NuxtLink>
      <NuxtLink class="rows" to="/projects">
        <div class="link">
          <Icon class="icon" name="solar:code-bold" />
          Projects
        </div>
      </NuxtLink>
      <NuxtLink class="rows" to="/skills">
        <div class="link">
          <Icon class="icon" name="streamline-freehand:settings-cog-double-1" />
          Skills
        </div>
      </NuxtLink>
      <NuxtLink class="rows" to="/coursework">
        <div class="link">
          <Icon class="icon" name="f7:pencil-outline" />
          Coursework
        </div>
      </NuxtLink>
      <NuxtLink class="rows" to="/extracurriculars">
        <div class="link">
          <Icon class="icon" name="material-symbols-light:star-outline-rounded" />
          Extracurriculars
        </div>
      </NuxtLink>
      <NuxtLink class="rows" to="/contact">
        <div class="link">
          <Icon class="icon" name="ph:phone-call-light" />
          Contact
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.app-header {
  background-color: var(--color-secondary);
  position: fixed;
  top: 0;
  color: var(--color-text);
  width: 18vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  box-sizing: border-box;
  box-shadow: 4px 0 8px -4px rgba(0, 0, 0, 0.2);
}

.main-row {
  text-decoration: none;
  color: var(--color-secondary);
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.2);
}

.main-link {
  font-size: 2rem;
  text-align: center;
  background-color: #a6c9fa;
  padding: 1rem;
  transition: background-color 0.3s ease;
}

.main-link:hover {
  background-color: #7d97bd;
}

.link-rows {
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 2rem;
}

.rows {
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.rows:hover {
  background-color: #d7d7d755;
}

.link {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 1.3rem;
}

.icon {
  width: 2rem;
  height: 1.5rem;
  margin-right: 0.2rem;
}
</style>
