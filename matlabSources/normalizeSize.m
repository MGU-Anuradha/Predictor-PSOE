% Load raw input and output data
load('trained_ann.mat');  % Replace with the filename

disp(net.inputs{1}.processFcns);  % Check input preprocessing functions --- 'mapminmax'
disp(net.outputs{4}.processFcns); % Check output postprocessing functions --- 'mapminmax'

input_normalization_params = net.inputs{1}.processSettings{1};  % Get input normalization settings
disp(input_normalization_params);
output_normalization_params = net.outputs{4}.processSettings{1};  % Get output normalization settings
disp(output_normalization_params);



