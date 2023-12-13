import axios from "axios";
import {TODOS_API_URL} from "./common";

class todolistService {
	static getTodoList(){
		return axios.get(TODOS_API_URL)
	}
}
export default todolistService