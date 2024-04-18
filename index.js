const randomNumber = (n) => Math.floor(Math.random() * (n)) + 1;
const calculateButton = document.querySelector("#calculate-btn");

const megabytesToBytes = (megabytes) => megabytes * 1e+6;
const bytesToMegabytes = (bytes) => bytes / 1e+6;

// Tamaño de un float32 en bytes.
const FLOAT_32_SIZE = 4;

const getTensor2dByteSize = (tensor) => {
    const [x, y] = tensor.shape;
    return x * y * (FLOAT_32_SIZE);
}

const SIXTY_FOUR_MB_BYTES = megabytesToBytes(64);

calculateButton.addEventListener('click', () => {
    tf.tidy(() => {
        const arrA = Array.from({ length: 100 * 100 }).map(() => randomNumber(9));
        const arrB = Array.from({ length: 100 * 100 }).map(() => randomNumber(9));
        let tensorA = tf.tensor2d(arrA, [100, 100]);
        const tensorB = tf.tensor2d(arrB, [100, 100]);

        tensorA.print();
        tensorB.print();
        let tensorQuantity = 2;

        while (getTensor2dByteSize(tensorA) < SIXTY_FOUR_MB_BYTES) {
            const prod = tensorA.concat(tensorB);
            tensorA.dispose();
            tensorA = prod;
            tensorQuantity += 1;
            const bytes = getTensor2dByteSize(tensorA);
            console.log("Tamaño de tensorA: (bytes)", bytes);
            console.log("Tamaño de tensorA: (megabytes)", bytesToMegabytes(bytes));
        }

        console.log("Tamaño final de tensorA: ", getTensor2dByteSize(tensorA));
        console.log("Cantidad de tensores: ", tensorQuantity);
    });
    console.log("Cantidad de tensores en memoria: ", tf.memory().numTensors);
})


