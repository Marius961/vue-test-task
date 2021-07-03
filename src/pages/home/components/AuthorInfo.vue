<template>
  <ul class="author-info">
    <li v-if="isPropExist('name')">
      <label>Name: </label>
      <span>{{ authorInfo.name }}</span>
    </li>

    <li v-if="isPropExist('email')">
      <label>Email: </label>
      <span>
        <a :href="`mailto:${authorInfo.email}`">
          {{ authorInfo.email }}
        </a>
      </span>
    </li>

    <li v-if="isPropExist('username')">
      <label>Username: </label>
      <span>{{ authorInfo.username }}</span>
    </li>

    <li v-if="isPropExist('url')">
      <label>Url: </label>
      <span>
        <a :href="authorInfo.url">
          {{ authorInfo.url }}</a>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AuthorInfo",
  props: {
    authorInfo: {
      type: Object,
      required: true
    }
  },
  methods: {
    isPropExist(key) {
      return this.authorInfo && this.authorInfo[key];
    }
  }
}
</script>

<style lang="scss" scoped>

.author-info {
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    label {
      font-weight: bold;
      margin-right: 5px;
    }
  }
}

</style>
