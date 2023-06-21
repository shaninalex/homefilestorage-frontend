from flask import Flask, jsonify, request
import simple_websocket

app = Flask(__name__)


@app.route("/api/v2/user/info", methods=["GET"])
def user_info():
    return jsonify(
        {"email": "test@test.com", "name": {"first": "Firstname", "last": "Lastname"}},
    )


@app.route("/api/v2/files/list", methods=["GET"])
def file_list():
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
                    "system_path": "/files/2023/5/16/1684220265.pdf",
                }
            ]
        },
    )


@app.route('/ws/upload', websocket=True)
def echo():
    ws = simple_websocket.Server(request.environ)
    try:
        while True:
            data = ws.receive()
            ws.send(data)
            print(data)
    except simple_websocket.ConnectionClosed:
        pass
    return ''


if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=8080)
