<template>
  <div>
    <span class="keywords-title">Keywords</span>
    <ul class="keywords">
      <li
          v-for="(keyword, index) in keywords"
          @click.stop="onKeywordClick(keyword)"
          :key="`kw_${index}`"
      >
        {{keyword}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "KeywordsList",
  props: {
    keywords: {
      type: Array,
      required: true
    }
  },
  methods: {
    onKeywordClick(keyword) {
      this.$emit("keywordSelect", keyword);
    }
  }
}
</script>

<style lang="scss" scoped>
.keywords-title {
  display: block;
  font-weight: bold;
  margin-bottom: 12px;
}

.keywords {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  li {
    background: #eaeaea;
    padding: 4px 6px;
    margin-bottom: 6px;
    border-radius: 4px;
    transition: box-shadow .15s, margin-top .15s .15s;


    &:not(:last-child) {
      margin-right: 8px;
    }

    &:hover {
      margin-top: -3px;
      cursor: pointer;
      box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.16);
    }
  }
}
</style>
