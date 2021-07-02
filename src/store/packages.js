import axios from "axios";

export default {
    state: {
    },
    mutations: {
    },
    actions: {
        async searchPackages(context, { searchString, page, size }) {
            const params = {
                size,
                from: page * size,
                text: searchString
            }

            return axios.get("https://registry.npmjs.org/-/v1/search", { params });
        }
    }
}
