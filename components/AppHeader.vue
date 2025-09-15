<template>
    <div class="app-header">
        <NuxtLink class="links" to="/">
            <div class="main-row">Kristi Rell</div>
        </NuxtLink>
        <div class="link-rows">
            <NuxtLink class="links" to="/experience">
                <div>
                    <Icon class="icon" name="material-symbols-light:work-outline" />
                    Experience
                </div>
            </NuxtLink>
            <NuxtLink class="links" to="/projects">
                <div>
                    <Icon class="icon" name="solar:code-bold" />
                    Projects
                </div>
            </NuxtLink>
            <NuxtLink class="links" to="/skills">
                <div>
                    <Icon class="icon" name="streamline-freehand:settings-cog-double-1" />
                    Skills
                </div>
            </NuxtLink>
            <NuxtLink class="links" to="/coursework">
                <div>
                    <Icon class="icon" name="f7:pencil-outline" />
                    Coursework
                </div>
            </NuxtLink>
            <NuxtLink class="links" to="/about">
                <div>
                    <Icon class="icon" name="material-symbols-light:star-outline-rounded" />
                    About me!
                </div>
            </NuxtLink>
            <NuxtLink class="links" to="/contact">
                <div>
                    <Icon class="icon" name="ph:phone-call-light" />
                    Contact
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.app-header {
    background-color: var(--color-secondary);
    color: var(--color-text);
    padding: 1rem;
    text-align: left;
    width: 15vw;
    height: 100vh;
}

.main-row {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 2rem;
    text-align: center;
}

.link-rows {
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-top: 3rem;
    margin-left: 1rem;
    text-decoration: none;

    .icon {
        width: 3rem;
        height: 3rem;
        margin-right: 0.5rem;
        vertical-align: middle;
    }
}

.links 
{
    color: var(--color-text);
    text-decoration: none;
}
</style>