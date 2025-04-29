from flask import Flask, render_template
import qrcode

app = Flask(__name__)

# Generar código QR con la URL del catálogo
def generar_qr():
    qr = qrcode.make("https://ignaciosineiro.github.io/web/")
    qr.save("static/qrcode.png")

@app.route("/")
def index():
    return render_template("index2.html")

if __name__ == "__main__":
    generar_qr()
    app.run(debug=True)