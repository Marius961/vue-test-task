import axios from "axios";

export default {
    state: {
    },
    mutations: {
    },
    actions: {
        async searchPackages(context, { searchString, page, size }) {
            const pageNumber = page === 1 ? 1 : page * size;

            const params = {
                size,
                from: pageNumber,
                text: searchString
            }

            return axios.get("https://registry.npmjs.org/-/v1/search", { params });
        }
    }
}
