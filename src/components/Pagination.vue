<template>
  <nav v-show="isShowPagination" aria-label="Page navigation example">
    <ul class="pagination">
      <li
          v-for="pageItem in paginationList"
          @click="onPageSelect(pageItem)"
          :key="pageItem"
          :class="{'active': pageItem === page}"
          class="page-item"
      >
        <a class="page-link" href="#">{{ pageItem + 1 }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    page: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
  },
  computed: {
    isShowPagination() {
      return this.paginationList.length > 1;
    },
    paginationList() {
      const paginationRange = 5;

      const result = [];
      const totalPages = Math.ceil(this.total / this.size);

      const start = this.page - paginationRange >= 0 ? this.page - paginationRange : 0;
      const end = this.page + paginationRange <= totalPages ? this.page + paginationRange : totalPages;

      for (let i = start; i < end; i++) {
          result.push(i);
      }

      return result;
    }
  },
  methods: {
    onPageSelect(page) {
      this.$emit("pageChanged", page);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
