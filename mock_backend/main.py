from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/v2/login", methods=["POST"])
def login():
    return jsonify(
        {
            "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6InNpbTIifQ.eyJhdWQiOiJodHRwOi8vYXBpLmV4YW1wbGUuY29tIiwiZXhwIjoxNjg0MjE4MzAzLCJpc3MiOiJodHRwczovL2tyYWtlbmQuaW8iLCJqdGkiOiJiZDg5MzdkMTA1Y2ViNDMzNGE3ZDZhMmNkNzcxM2M4YjNkMzJkMyIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJzdWIiOiIxIn0.tHrdjSmpzz9YW1BnJMEH-NSp2b1u9WHMhzs_SBR0iDk",
            "exp": 1684218303,
        },
        200,
    )


@app.route("/api/v2/account", methods=["GET"])
def account():
    return jsonify(
        {
            "active": True,
            "created_at": "2023-05-16T06:09:59.849438Z",
            "email": "test2@test.com",
            "id": 1,
            "username": "test2",
        },
        200,
    )


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=8080)