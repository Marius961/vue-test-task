<template>
  <div>
    <h1>Total packages: {{ totalPackages }}</h1>

    <form @submit.prevent="onSearch">
      <input type="search" v-model="searchString">
      <button type="submit">Search</button>
    </form>

    <div v-if="loading">Loading</div>

    <ul v-else>
      <li v-for="packageItem in packages" :key="packageItem.package.name">
        {{ packageItem.package.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'Home',
  data: () => ({
    packages: [],
    totalPackages: 0,
    pageSize: 10,
    page: 1,
    loading: false,
    searchString: null
  }),
  methods: {
    ...mapActions({
      searchPackages: "searchPackages"
    }),
    onSearch() {
      this.loadPackages(this.searchString);
    },
    async loadPackages(searchString) {
      this.loading = true;
      const response = await this.searchPackages({
        searchString,
        page: this.page,
        size: this.pageSize
      });

      this.packages = response.data.objects;
      this.totalPackages = response.data.total;
      this.loading = false;
    }
  }
}
</script>
