% Load raw input and output data
load('trained_ann.mat');  % Replace with the filename

% Example input values (replace with actual values)
Vd = 1.0;
Vq = 1.0;

% Normalize the input using the mapminmax normalization
input_data = [Vd, Vq];

% Normalize input using MATLAB's mapminmax (if using the same method as TensorFlow)
[input_norm, input_settings] = mapminmax(input_data, net.inputs{1}.processSettings{1}.xmin, net.inputs{1}.processSettings{1}.xmax);

% Print the normalized input values
disp('Normalized input values (MATLAB):');
disp(input_norm);

% Perform the prediction using the neural network
prediction_norm = net(input_norm);  % Make prediction using the normalized input

% Extract the process settings for output normalization/denormalization
output_process_settings = net.outputs{4}.processSettings{1};  % Extract the first element from the processSettings cell

% Check the extracted output settings (optional)
disp('Output process settings:');
disp(output_process_settings);

% Now, extract ymin and ymax directly from the structure
ymin = output_process_settings.ymin;  % Extract ymin
ymax = output_process_settings.ymax;  % Extract ymax

% Denormalize the output using the extracted ymin and ymax
output_denorm = mapminmax('reverse', prediction_norm, ymin, ymax);

% Print the denormalized output
disp('Denormalized output (MATLAB):');
disp(output_denorm);
