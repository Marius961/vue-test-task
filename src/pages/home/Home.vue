<template>
  <div>
    <Header
        :searchValue="searchString"
        @search="onSearch"
    />

    <main>
      <div class="container mt-5">
        <section v-if="isShowSearchAlert" class="alert alert-info" role="alert">
          Please type something in search field.
        </section>
        <section v-if="isShowNoResultsAlert" class="alert alert-info" role="alert">
          No results.
        </section>

        <section v-if="!loading" class="row">
          <div class="col-12">
            <div class="row justify-content-between mb-2 align-items-center">
              <div class="col-auto">
                <span v-show="totalPackages">
                  Results:
                  <span class="text-primary">{{ totalPackages }}</span>
                </span>
              </div>
              <div class="col-auto">
                <pagination
                    @pageChanged="onPageChange"
                    :page="page"
                    :size="pageSize"
                    :total="totalPackages"
                />
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div
                  v-for="packageItem in packages" :key="packageItem.package.name"
                  class="col-12"
              >
                <Package
                    :packageItem="packageItem"
                    @showDetails="openDetailsModal(packageItem)"
                    @searchByKeyword="onSearch"
                />
              </div>
            </div>
          </div>
          <div class="col-12 justify-content-center d-flex mt-5">
            <pagination
                @pageChanged="onPageChange"
                :page="page"
                :size="pageSize"
                :total="totalPackages"
            />
          </div>
        </section>

        <section class="row" v-else>
          <div class="col-12">
            <Loader/>
          </div>
        </section>
      </div>
    </main>

    <PackageDetailsModal
        v-if="showDetailsModal"
        @close="closeDetailsModal"
        @searchByKeyword="onSearch"
        :package-item="modalPackage"
    />
  </div>
</template>

<script>
import {mapActions} from "vuex";
import Pagination from "@/components/Pagination";
import Header from "@/components/Header";
import Package from "@/pages/home/components/Package";
import Loader from "@/components/Loader";
import PackageDetailsModal from "@/pages/home/components/PackageDetailsModal";

export default {
  name: 'Home',
  components: {PackageDetailsModal, Loader, Package, Header, Pagination},
  data: () => ({
    packages: [],
    totalPackages: 0,
    pageSize: 10,
    page: 0,
    loading: false,
    searchString: '',
    isSearchDirty: false,
    modalPackage: null,
    showDetailsModal: false
  }),
  computed: {
    isShowSearchAlert() {
      return !this.isSearchDirty && !this.loading;
    },
    isShowNoResultsAlert() {
      return !this.packages.length && this.isSearchDirty && !this.loading;
    }
  },
  methods: {
    ...mapActions({
      searchPackages: "searchPackages"
    }),
    onSearch(searchString) {
      this.page = 0;
      this.isSearchDirty = true;
      this.searchString = searchString;
      this.loadPackages();
    },
    onPageChange(page) {
      this.page = page;
      this.loadPackages();
    },
    openDetailsModal(packageItem) {
      this.modalPackage = packageItem;
      this.showDetailsModal = true;
    },
    closeDetailsModal() {
      this.showDetailsModal = false;
      this.modalPackage = null;
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
