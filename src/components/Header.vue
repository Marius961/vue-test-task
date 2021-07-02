<template>
  <header>
    <nav class="navbar bg-dark navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <div class="row justify-content-center w-100">
          <form @submit.prevent="onSearchSubmit" class="col-4 d-flex">
            <input v-model.trim="searchString" class="form-control me-2" type="search" placeholder="Search package" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    searchValue: String
  },
  data: () => ({
    searchString: ''
  }),
  methods: {
    onSearchSubmit() {
      this.$emit("search", this.searchString)
    }
  },
  watch: {
    searchValue(value) {
      this.searchString = value;
    }
  }
}
</script>

<style scoped>

</style>
