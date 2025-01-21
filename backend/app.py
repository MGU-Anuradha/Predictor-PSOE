import tensorflow as tf
import numpy as np
from scipy.io import loadmat
from flask import Flask, request, jsonify
from flask_cors import CORS

# Load the saved weights and biases from the .mat file
mat = loadmat('network_weights_biases.mat')

# Extract the weights and biases from the loaded .mat file
input_weights = mat['input_weights']
layer_weights_1 = mat['layer_weights_1']
layer_weights_2 = mat['layer_weights_2']
output_weights = mat['output_weights']
biases_1 = mat['biases_1']
biases_2 = mat['biases_2']
biases_3 = mat['biases_3']
output_bias = mat['output_bias']

# Reshape the biases to match the expected shape (units,)
biases_1 = biases_1.flatten()
biases_2 = biases_2.flatten()
biases_3 = biases_3.flatten()
output_bias = output_bias.flatten()

# Build the TensorFlow model with the same architecture
model = tf.keras.Sequential([
    tf.keras.layers.Dense(100, activation='tanh', input_shape=(2,), weights=[input_weights.T, biases_1]),  # Input -> Hidden Layer 1
    tf.keras.layers.Dense(50, activation='tanh', weights=[layer_weights_1.T, biases_2]),  # Hidden Layer 1 -> Hidden Layer 2
    tf.keras.layers.Dense(50, activation='tanh', weights=[layer_weights_2.T, biases_3]),  # Hidden Layer 2 -> Hidden Layer 3
    tf.keras.layers.Dense(1, activation='linear', weights=[output_weights.T, output_bias])  # Hidden Layer 3 -> Output
])

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Normalize input and output based on mapminmax
def normalize_input(input_data):
    # Apply the normalization formula based on the 'mapminmax' parameters
    xmin = np.array([0, 0])
    xmax = np.array([1.5, 1.5])
    ymin = -1
    ymax = 1
    gain = np.array([1.3333, 1.3333])
    offset = np.array([0, 0])

    normalized_input = gain * (input_data - xmin) / (xmax - xmin) + offset
    return normalized_input

def normalize_output(output_data):
    # Apply the normalization formula based on the 'mapminmax' parameters
    xmin = 0
    xmax = 1.5
    ymin = -1
    ymax = 1
    gain = 1.3333
    offset = 0

    normalized_output = gain * (output_data - xmin) / (xmax - xmin) + offset
    return normalized_output

def denormalize_output(normalized_output):
    # Reverse the normalization process
    xmin = 0
    xmax = 1.5
    ymin = -1
    ymax = 1
    gain = 1.3333
    offset = 0

    denormalized_output = (normalized_output - offset) * (xmax - xmin) / gain + xmin
    return denormalized_output

# Initialize Flask app
app = Flask(__name__)

CORS(app, origins=["http://localhost:3000"])
# Define the prediction endpoint
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the data from the POST request
        data = request.get_json()

        # Extract Vd and Vq from the JSON data
        Vd = data['Vd']
        Vq = data['Vq']

        # Prepare the input array (Vq, Vd)
        x_input = np.array([[Vq, Vd]])  # The model expects the input shape (1, 2)

        # Normalize the input using the mapminmax scaling
        x_input_normalized = normalize_input(x_input)

        # Predict using the model
        prediction = model.predict(x_input_normalized)

        # Denormalize the prediction to match the MATLAB output range
        prediction_value = denormalize_output(prediction[0][0])
        print(prediction_value)
        # Return the prediction as a JSON response
        return jsonify({'prediction': prediction_value})

    except Exception as e:
        return jsonify({'error': str(e)}), 400


# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
