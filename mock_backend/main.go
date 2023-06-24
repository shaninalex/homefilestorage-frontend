package main

import (
	"io/ioutil"
	"log"
	"mime"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type IdTraits struct {
	First string `json:"first"`
	Last  string `json:"last"`
}

type Identity struct {
	Email string   `json:"email"`
	Name  IdTraits `json:"name"`
}

type FileObject struct {
	CreatedAt  *time.Time `json:"created_at"`
	FolderId   uint64     `json:"folder_id"`
	Hash       string     `json:"hash"`
	Id         uint64     `json:"id"`
	MimeType   string     `json:"mime_type"`
	Name       string     `json:"name"`
	Owner      uint64     `json:"owner"`
	Public     bool       `json:"public"`
	Size       uint64     `json:"size"`
	SystemPath string     `json:"system_path"`
}

type FileList struct {
	Files []FileObject `json:"files"`
}

func main() {
	r := gin.Default()
	r.GET("/api/v2/user/info", handleUserInfo)
	r.GET("/api/v2/files/list", handleFileList)
	r.POST("/api/v2/files/upload", handleFileUpload)
	r.Run(":8080")
}

func handleFileList(c *gin.Context) {
	now := time.Now()
	fileslist := &FileList{
		Files: []FileObject{
			{
				CreatedAt:  &now,
				FolderId:   0,
				Hash:       "e484e51d973718766fd2aac62ca7fed7897c1718",
				Id:         1,
				MimeType:   "application/pdf",
				Name:       "google_privacy_policy_en.pdf",
				Owner:      1,
				Public:     true,
				Size:       113860,
				SystemPath: "/files/2023/5/16/1684220265.pdf",
			},
		},
	}
	c.JSON(http.StatusOK, &fileslist)
}

func handleUserInfo(c *gin.Context) {
	identity := &Identity{
		Email: "test@test.com",
		Name: IdTraits{
			First: "Firstname",
			Last:  "Lastname",
		},
	}
	c.JSON(http.StatusOK, &identity)
}

func handleFileUpload(c *gin.Context) {
	d, err := ioutil.ReadAll(c.Request.Body)
	filename := handleMediaType(c.Request.Header.Get("Content-Disposition"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error reading input data"})
	}
	tmpfile, err := os.Create("./" + filename)
	defer tmpfile.Close()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "error writing file"})
	}
	tmpfile.Write(d)

	c.JSON(http.StatusOK, gin.H{"success": "file saved"})
}

func handleMediaType(header_media_type string) string {
	_, params, err := mime.ParseMediaType(header_media_type)
	if err != nil {
		log.Println(err)
	}
	return params["filename"]
}
