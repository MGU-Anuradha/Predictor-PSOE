% Load the trained network
% Load the trained network
load('trained_ann.mat');

% Extract network weights and biases
weights = {net.IW{1}, net.LW{2, 1}, net.LW{3, 2}, net.LW{4, 3}}; % Adjust based on layer count
biases = net.b;  % Biases for all layers

% Save weights and biases to a .mat file
save('exported_weights.mat', 'weights', 'biases');

net.LW % Display connections between layers
net.layers{4}.transferFcn % Get activation function for the first layer






