import axios from "axios";

export default {
    actions: {
        async searchPackages(context, { searchString, page, size }) {
            const params = {
                size,
                from: page * size,
                text: searchString
            }

            try {
                return axios.get("https://registry.npmjs.org/-/v1/search", { params });
            } catch (e) {
                console.error("An error occurred during loading of packages", e);
            }
        },
        async getRankBadgeForPackage(context,  name) {
            try {
                return axios.get(`https://data.jsdelivr.com/v1/package/npm/${name}/badge/rank`);
            } catch (e) {
                console.error("An error occurred during loading of badge for package", e);
            }
        },
        async getPackageVersions(context, name) {
            try {
                return axios.get(`https://data.jsdelivr.com/v1/package/npm/${name}`);
            } catch (e) {
                console.error("An error occurred during loading of package versions", e);
            }
        }
    }
}
