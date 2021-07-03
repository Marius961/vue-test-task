import axios from "axios";

const npmJsUrl = process.env.VUE_APP_NPMJS_API_URL;
const jsDelivrUrl = process.env.VUE_APP_JSDELIVR_API_URL;

export default {
    actions: {
        async searchPackages(context, { searchString, page, size }) {
            const params = {
                size,
                from: page * size,
                text: searchString
            }

            try {
                return axios.get(`${npmJsUrl}/search`, { params });
            } catch (e) {
                console.error("An error occurred during loading of packages", e);
            }
        },
        async getRankBadgeForPackage(context,  name) {
            try {
                return axios.get(`${jsDelivrUrl}/package/npm/${name}/badge/rank`);
            } catch (e) {
                console.error("An error occurred during loading of badge for package", e);
            }
        },
        async getPackageVersions(context, name) {
            try {
                return axios.get(`${jsDelivrUrl}/package/npm/${name}`);
            } catch (e) {
                console.error("An error occurred during loading of package versions", e);
            }
        }
    }
}
