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
            <div class="col-5">
              <span class="keywords-title">Keywords</span>
              <ul class="keywords">
                <li
                    v-for="(keyword, index) in packageItem.package.keywords"
                    @click.stop="onKeywordClick(keyword)"
                    :key="`kw_${index}`"
                >
                  {{keyword}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Package",
  props: {
    packageItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    onKeywordClick(keyword) {
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
}

</style>
