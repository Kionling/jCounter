import axios from "axios";

export default {
    createNewUser: function(user){
        console.log("Testing location: API");
        return axios.post("/api/signup", user)
    },
    login: function(user){
        console.log("Creating in the API");
        return axios.post("/api/login", user)
    }
}
