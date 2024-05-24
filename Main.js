const tf = require("@tensorflow/tfjs-node");

class AI {
  // Compile model
  compile() {
    const model = tf.sequential();

    // Input layer
    model.add(
      tf.layers.dense({
        units: 3,
        inputShape: [3],
      })
    );

    // Output layer
    model.add(
      tf.layers.dense({
        units: 2,
      })
    );

    model.compile({
      loss: "meanSquaredError",
      optimizer: "sgd",
    });

    return model;
  }

  // Run model/predict
  run() {
    const model = this.compile();

    // xs - input layer
    const xs = tf.tensor2d([
      [0.1, 0.2, 0.3],
      [0.2, 1.0, 0.1],
      [1.0, 1.0, 1.0],
    ]);

    // ys - output layer
    const ys = tf.tensor2d([
      [1, 0],
      [0, 1],
      [1, 1],
    ]);

    model
      .fit(xs, ys, {
        epochs: 20000,
      })
      .then(() => {
        const data = tf.tensor2d([[1.0, 1.0, 1.0]]);

        const prediction = model.predict(data);

        prediction.print();
      });

    // console.log("Testing", xs);
  }
}

const ai = new AI();
ai.run();
