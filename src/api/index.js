import axios from "axios";


export const api = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    headers: {
      'Accept': 'application/vnd.GitHub.v3+json',
      //'Authorization': 'token <your-token-here> -- https://docs.GitHub.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token'
    }
})