import axiosInstance from "../config/axios.config"

class HttpService {
    config = null;
    setConfig = (reqConfig) => {
        this.config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log(reqConfig)
        if(reqConfig.file || reqConfig.files) {
            this.config = {
                ...this.config,
                headers: {
                    ...this.config.headers,
                    "Content-Type": "multipart/form-data"
                }
            }
        }

        if(reqConfig.auth) {
        
            this.config = {
                ...this.config,
                headers: {
                    ...this.config.headers,
                    "Authorization": "",            // TODO: Add keys
                }
            }
        }

        if(reqConfig.params) {
            this.config = {
                ...this.config,
                params: {
                    ...this.config, 
                    ...reqConfig.params
                }
            }
        }
    }

    getRequest = async(url, config=null) => {
        try{
            if(config) {
                this.setConfig(config)
            }
            const response = await axiosInstance.get(url, this.config)
            return response // undefined
        } catch(exception) {
            console.log("postRequest", exception)
            throw exception
        }
    }

    postRequest = async(url, data ={}, config=null) => {
        try{
            if(config) {
                this.setConfig(config)
            }
            const response = await axiosInstance.post(url, data, this.config)
            return response // undefined
        } catch(exception) {
            console.log("postRequest", exception)
            throw exception
        }
    }

    putRequest = async (url, data={}, config=null) => {
        try {

            if(config) {
                this.setConfig(config)
            }
            const response = await axiosInstance.put(url, data, this.config)
            return response;
        } catch(exception) {
            console.log("putRequest", exception)
            throw exception;
        }
    }

    patchRequest = () => {
        
    }

    deleteRequest = () => {
        
    }
}

export default HttpService;