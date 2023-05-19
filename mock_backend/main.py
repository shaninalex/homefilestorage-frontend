from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/v2/login", methods=["POST"])
def login():
    return jsonify(
        {
            "access_token": "eyJhbGciOiJIUzI1NiIsImtpZCI6InNpbTIifQ.eyJhdWQiOiJodHRwOi8vYXBpLmV4YW1wbGUuY29tIiwiZXhwIjoxNjg0MjE4MzAzLCJpc3MiOiJodHRwczovL2tyYWtlbmQuaW8iLCJqdGkiOiJiZDg5MzdkMTA1Y2ViNDMzNGE3ZDZhMmNkNzcxM2M4YjNkMzJkMyIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJzdWIiOiIxIn0.tHrdjSmpzz9YW1BnJMEH-NSp2b1u9WHMhzs_SBR0iDk",
            "exp": 1684218303,
        }
    )


@app.route("/api/v2/account", methods=["GET", "PATCH"])
def account():
    return jsonify(
        {
            "active": True,
            "created_at": "2023-05-16T06:09:59.849438Z",
            "email": "test2@test.com",
            "id": 1,
            "username": "test2",
        },
    )


@app.route("/api/v2/files", methods=["GET"])
def files():
    return jsonify(
        {
            "files": [
                {
                    "created_at": "2023-05-16T06:57:45.112403Z",
                    "folder_id": 0,
                    "hash": "e484e51d973718766fd2aac62ca7fed7897c1718",
                    "id": 1,
                    "mime_type": "application/pdf",
                    "name": "google_privacy_policy_en.pdf",
                    "owner": 1,
                    "public": True,
                    "size": 113860,
                    "system_path": "/files/2023/5/16/1684220265.pdf"
                }
            ]
        },
    )


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=8080)
