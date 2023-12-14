import axios from "axios";
import {USER_API_URL} from "./common";

class UsersService {
	static getUsers (){
		return axios.get(USER_API_URL)
	}
}
export default UsersService;