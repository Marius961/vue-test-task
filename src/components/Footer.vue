<template>
  <footer class="page-footer bg-dark">
    <div class="row align-items-center justify-content-between">
      <div class="col-auto">
        Created by Marius Shiman
      </div>
      <a target="_blank" :href="githubLink" class="col-auto github-link">
        <img src="@/assets/icons/github.svg">
      </a>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  data: () => ({
    githubLink: process.env.VUE_APP_GITHUB_LINK
  })
}
</script>

<style lang="scss" scoped>

.page-footer {
  padding: 30px 20px;
  color: white;

  .github-link {
    img {
      width: 32px;
      height: 32px;
    }
  }
}

</style>
