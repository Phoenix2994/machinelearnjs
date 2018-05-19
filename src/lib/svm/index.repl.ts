/* tslint:disable */
import svmResolver from 'libsvm-js';

console.log('checking xor');
async function xor() {
  console.log('checking xor async', svmResolver)
  const SVM = await svmResolver;
  const svm = new SVM({
    kernel: SVM.KERNEL_TYPES.RBF, // The type of kernel I want to use
    type: SVM.SVM_TYPES.C_SVC, // The type of SVM I want to run
    gamma: 1, // RBF kernel gamma parameter
    cost: 1 // C_SVC cost parameter
  });

  // This is the xor problem
  //
  //  1  0
  //  0  1
  const features = [[0, 0], [1, 1]];
  const labels = [0, 1];
  svm.train(features, labels); // train the model
  const predictedLabel = svm.predictOne([2., 2.]);
  console.log('label predicted', predictedLabel); // 0
}

xor().then(() => console.log('done!'));
console.log('checking!!');