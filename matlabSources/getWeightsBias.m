% Load the trained network
load('trained_ann.mat');  % This loads the 'net' variable

% Extract weights and biases for each layer
input_weights = net.IW{1};  % Weights from input to first hidden layer (2 inputs, 100 neurons)
layer_weights_1 = net.LW{2,1};  % Weights from first hidden to second hidden layer (100 neurons, 50 neurons)
layer_weights_2 = net.LW{3,2};  % Weights from second hidden to third hidden layer (50 neurons, 50 neurons)
output_weights = net.LW{4,3};  % Weights from third hidden to output layer (50 neurons, 1 neuron)

biases_1 = net.b{1};  % Biases for the first hidden layer (100 neurons)
biases_2 = net.b{2};  % Biases for the second hidden layer (50 neurons)
biases_3 = net.b{3};  % Biases for the third hidden layer (50 neurons)
output_bias = net.b{4};  % Biases for the output layer (1 neuron)

% Check the dimensions of weights and biases
disp('Dimensions of the weights and biases:');
disp(['Input Weights: ', num2str(size(input_weights))]);
disp(['Layer 1 Weights: ', num2str(size(layer_weights_1))]);
disp(['Layer 2 Weights: ', num2str(size(layer_weights_2))]);
disp(['Output Weights: ', num2str(size(output_weights))]);

disp(['Biases 1: ', num2str(size(biases_1))]);
disp(['Biases 2: ', num2str(size(biases_2))]);
disp(['Biases 3: ', num2str(size(biases_3))]);
disp(['Output Bias: ', num2str(size(output_bias))]);

% Save weights and biases to a .mat file
%save('network_weights_biases.mat', 'input_weights', 'layer_weights_1', 'layer_weights_2', 'output_weights', ...
   % 'biases_1', 'biases_2', 'biases_3', 'output_bias');
