<template>
  <div>
    <section class="versions-section" v-if="packageVersions.tags">
      <h4>Tags</h4>
      <ul>
        <li
            class="card"
            v-for="(version, tagName) in packageVersions.tags" :key="tagName"
        >
          <div class="card-body">
            <span class="tagName">{{ tagName }}:</span>
            <span class="version">{{ version }}</span>
          </div>
        </li>
      </ul>
    </section>
    <section class="versions-section" v-if="showAllVersions && packageVersions.versions">
      <h4>All versions</h4>
      <ul>
        <li
            class="card"
            v-for="version in packageVersions.versions" :key="`v_${version}`"
        >
          <div class="card-body">
            <span class="version">{{ version }}</span>
          </div>
        </li>
      </ul>
    </section>
    <div v-if="packageVersions.versions" class="show-all-versions-btn-wrapper">
      <button @click="toggleVersionsVisibility" class="btn btn-outline-primary">
        {{ showAllVersions ? 'Hide versions' : 'Show all versions' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PackageVersions",
  props: {
    packageVersions:{
      type: Object,
      required: true
    }
  },
  data: () => ({
    showAllVersions: false
  }),
  methods: {
    toggleVersionsVisibility() {
      this.showAllVersions = !this.showAllVersions;
    }
  }
}
</script>

<style lang="scss" scoped>

.versions-section {
  margin-bottom: 20px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}

</style>
