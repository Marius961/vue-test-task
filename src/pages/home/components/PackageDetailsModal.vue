<template>
  <Modal
      @close="onClose"
      :loading="loading"
      :title="packageItem.package.name"
  >
    <template v-slot:content>
      <div class="row p-3">
        <div class="col">
          <div class="row mb-4" v-if="rankBadge">
            <div class="col-12 h5">Badges</div>
            <div class="col-auto" v-html="rankBadge" />
          </div>
          <div class="row mb-4" v-if="isPackagePropExist('description')">
            <div class="col-12 h5">Description</div>
            <p class="col-12">
              {{ packageItem.package.description }}
            </p>
          </div>
          <div class="row mb-4" v-if="isPackagePropExist('author')">
            <div class="col-12 h5">Author</div>
            <div class="col-12">
              <AuthorInfo :author-info="packageItem.package.author"/>
            </div>
          </div>
          <div class="row" v-if="packageVersions">
            <div class="col-12 h5">Versions</div>
            <div class="col-12">
              <PackageVersions :package-versions="packageVersions"/>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="row mb-4" v-if="isPackagePropExist('keyword')">
            <keywords-list
                :keywords="packageItem.package.keywords"
                @keywordSelect="onKeywordSelect"
            />
          </div>
          <div class="row" v-if="isPackagePropExist('links')">
            <div class="col-12 h5">Links</div>
            <div class="col-12">
              <ul>
                <li v-for="( url, name )  in packageItem.package.links" :key="name">
                  <a target="_blank" :href="url">{{ name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";
import AuthorInfo from "@/pages/home/components/AuthorInfo";
import KeywordsList from "@/pages/home/components/KeywordsList";
import {mapActions} from "vuex";
import PackageVersions from "@/pages/home/components/PackageVersions";

export default {
  name: "PackageDetailsModal",
  components: {PackageVersions, AuthorInfo, Modal, KeywordsList},
  data: () => ({
    rankBadge: null,
    packageVersions: null,
    loading: true
  }),
  props: {
    packageItem: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions({
      getRankBadgeForPackage: "getRankBadgeForPackage",
      getPackageVersions: "getPackageVersions"
    }),
    onClose() {
      this.$emit("close");
    },
    onKeywordSelect(keyword) {
      this.$emit("searchByKeyword", keyword);
      this.onClose();
    },
    isPackagePropExist(prop) {
      return !!this.packageItem?.package[prop];
    }
  },
  async mounted() {
    const badgeResponse = await this.getRankBadgeForPackage(this.packageItem.package.name);
    this.rankBadge = badgeResponse.data;

    const packageVersionsResponse = await this.getPackageVersions(this.packageItem.package.name);
    this.packageVersions = packageVersionsResponse.data;

    this.loading = false;
  }
}
</script>

<style scoped>

</style>
