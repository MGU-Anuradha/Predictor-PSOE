
load('trained_ann.mat');

% Load raw input and output data
test_input = [0.2; 0.5];  % Example input (Vd, Vq)
test_output = net(test_input);  % Forward pass to get the output
disp(test_output);
