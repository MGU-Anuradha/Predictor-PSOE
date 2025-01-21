clear all
clc

% Load input data (Vq and Vd)
data1 = load('Vq.mat');
data11=struct2cell(data1(1,1));
data111=cell2mat(data11(1,1));
Vq=data111(2,:);
 
data1 = load('Vd.mat');
data11=struct2cell(data1(1,1));
data111=cell2mat(data11(1,1));
Vd=data111(2,:);

% Combine inputs
x=[Vq;Vd];

% Load target data (PSOE)
data1 = load('psoe.mat');
data11=struct2cell(data1(1,1));
data111=cell2mat(data11(1,1));
psoe=data111(2,:);

% Assign targets
t=psoe;
 
% Create and train the ANN
net = feedforwardnet([100 50 50]);
net = train(net,x,t);

% View the network structure
view(net);

% Evaluate performance
y = net(x);
perf = perform(net,y,t);
 
gensim(net)

% Save the trained network to a .mat file
save('trained_ann.mat', 'net');

