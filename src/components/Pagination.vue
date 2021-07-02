<template>
  <ul class="pagination">
    <li
        v-for="pageItem in paginationList"
        @click="onPageSelect(pageItem)"
        :key="pageItem"
        :class="{'current': pageItem === page}"
    >{{ pageItem + 1 }}</li>
  </ul>
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
    paginationList() {
      const paginationRange = 5;

      const result = [];
      const totalPages = Math.ceil(this.total / this.size);

      console.log(totalPages);

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
.pagination {
  list-style: none;
  display: flex;

  li {
    padding: 4px 8px;
    border: 1px solid lightgrey;

    &:not(:last-child) {
      margin-right: 6px;
    }

    &.current {
      background: lightgrey;
    }
  }
}
</style>
