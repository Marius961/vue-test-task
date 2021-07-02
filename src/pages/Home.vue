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

    <pagination
        @pageChanged="onPageChange"
        :page="page"
        :size="pageSize"
        :total="totalPackages"
    />
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Pagination from "@/components/Pagination";

export default {
  name: 'Home',
  components: {Pagination},
  data: () => ({
    packages: [],
    totalPackages: 0,
    pageSize: 10,
    page: 0,
    loading: false,
    searchString: null
  }),
  methods: {
    ...mapActions({
      searchPackages: "searchPackages"
    }),
    onSearch() {
      this.page = 0;
      this.loadPackages();
    },
    onPageChange(page) {
      this.page = page;
      this.loadPackages();
    },
    async loadPackages() {
      this.loading = true;
      const response = await this.searchPackages({
        searchString: this.searchString,
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
