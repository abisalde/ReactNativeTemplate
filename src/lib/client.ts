/** CORE **/
import { ApiResponse, create } from "apisauce";

/** INSTRUMENTAL */
import { storage } from "@local-storage";

// Define the type for the response transformer function
type ResponseTransformer = (response: ApiResponse<any, any>) => Promise<void>;

const $Http = create({
  baseURL: "",
  headers: {
    Accept: "application/json",
  },
  timeout: 6000,
});

// Define the async response transformation function
const asyncResponseTransform: ResponseTransformer = async response => {
  const status = response.status as number;
  if ([401, 307, 403].includes(status)) {
    storage.clearAll();
    return await Promise.reject({
      status,
      message: "Unauthorized access",
    });
  }
  // Return an empty promise (void)
  return Promise.resolve();
};

// Add the async response transformation to the $Http instance
$Http.addAsyncResponseTransform(asyncResponseTransform);

export default $Http;
