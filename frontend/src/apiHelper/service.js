import axios from "axios";

// Set the base URL for your API
const environment = "http://127.0.0.1:8000";

// Example: Function to call your ANN prediction API
export const getPrediction = async (inputData) => {
  try {
    const response = await axios.post(`${environment}/predict`, inputData);
    return response.data; 
  } catch (error) {
    console.error("Error fetching prediction:", error);
    throw error;
  }
};
