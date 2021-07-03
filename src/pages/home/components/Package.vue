<template>
  <div class="card" @click="onShowDetails">
    <div class="card-body">
      <div class="row">
        <div class="col-12 d-flex justify-content-between align-items-center">
          <h5 class="package-name">{{ packageItem.package.name }}</h5>
          <span class="view-details">View details></span>
        </div>
        <div class="col-12">
          <div class="row">
            <div class="col-7">
              <p>{{ packageItem.package.description }}</p>
            </div>
            <div class="col-5" v-if="packageItem.package.keywords">
              <keywords-list
                  :keywords="packageItem.package.keywords"
                  @keywordSelect="onKeywordSelect"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KeywordsList from "@/pages/home/components/KeywordsList";
export default {
  name: "Package",
  components: {KeywordsList},
  props: {
    packageItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    onKeywordSelect(keyword) {
      this.$emit("searchByKeyword", keyword);
    },
    onShowDetails() {
      this.$emit("showDetails", this.packageItem);
    }
  }
}
</script>

<style lang="scss" scoped>

.card {
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.09);
  background: #ffffff;
  margin-bottom: 16px;
  transition: all .15s;

  &:hover {
    cursor: pointer;
    background: #f6f6f6;

    .package-name {
      text-decoration: underline;
    }

    .view-details {
      opacity: 1;
    }
  }

  .view-details {
    color: #717171;
    font-weight: bold;
    transition: opacity .15s ease-in-out;
    opacity: 0;
  }
}

</style>
