import tensorflow as tf
import numpy as np
from scipy.io import loadmat
from flask import Flask, request, jsonify

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
    tf.keras.layers.Dense(100, activation='relu', input_shape=(2,), weights=[input_weights.T, biases_1]),  # Input -> Hidden Layer 1
    tf.keras.layers.Dense(50, activation='relu', weights=[layer_weights_1.T, biases_2]),  # Hidden Layer 1 -> Hidden Layer 2
    tf.keras.layers.Dense(50, activation='relu', weights=[layer_weights_2.T, biases_3]),  # Hidden Layer 2 -> Hidden Layer 3
    tf.keras.layers.Dense(1, activation='linear', weights=[output_weights.T, output_bias])  # Hidden Layer 3 -> Output
])

# Compile the model
model.compile(optimizer='adam', loss='mean_squared_error')

# Initialize Flask app
app = Flask(__name__)

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

        # Predict using the model
        prediction = model.predict(x_input)

        # Convert prediction to a regular Python float
        prediction_value = float(prediction[0][0])

        # Return the prediction as a JSON response
        return jsonify({'prediction': prediction_value})

    except Exception as e:
        return jsonify({'error': str(e)}), 400


# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
