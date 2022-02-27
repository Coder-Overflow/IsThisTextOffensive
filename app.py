from statistics import mode
from urllib import response
from wsgiref.validate import ErrorWrapper
from flask import Flask, render_template
import tensorflow as tf
import tensorflow_hub as hub

model = tf.keras.models.load_model('Cyberbullying Classification\cyberbullyingClassificationModel.h5', custom_objects={'KerasLayer':hub.KerasLayer})

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route("/classifytext/<text>", methods=['POST'])
def classify(text):
    prediction = model.predict([text])
    print(prediction[0][0])

    if prediction[0][0] <= 0.4:
        return "-1"
    elif prediction[0][0] <= 0.6:
        return "0"
    else:
        return "1"

if "__main__" == __name__:
    app.run(debug=True)
