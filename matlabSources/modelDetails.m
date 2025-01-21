% Denormalize output
denormalized_output = mapminmax('reverse', output_normalized, output_ps);

% Display the denormalized output
disp('Denormalized Output:');
disp(denormalized_output);
