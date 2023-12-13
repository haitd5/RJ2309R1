import axios from "axios";
import {CLOUDINARY_API_UPLOAD} from "./common";

class fileServices {
	static upload(image) {
		const formData = new FormData();
		formData.append('file', image)
		formData.append('upload_preset','jhajqjvc')
		return axios.post(CLOUDINARY_API_UPLOAD, formData)
		
	}
}
export default fileServices