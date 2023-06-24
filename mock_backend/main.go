package main

import (
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
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
	r.GET("/api/v2/files/upload", handleFileUpload)
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
	file, err := c.FormFile("file")
	if err != nil {
		log.Println("Failed to get file from request:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to get file from request"})
		return
	}

	dstPath := filepath.Join(".", file.Filename)
	dst, err := os.Create(dstPath)
	if err != nil {
		log.Println("Failed to create destination file:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create destination file"})
		return
	}
	defer dst.Close()

	src, err := file.Open()
	if err != nil {
		log.Println("Failed to open source file:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to open source file"})
		return
	}
	defer src.Close()

	_, err = io.Copy(dst, src)
	if err != nil {
		log.Println("Failed to save file:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to save file"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "File uploaded successfully"})
}
