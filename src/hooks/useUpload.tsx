import { useRef, useState } from 'react'

export const useUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
      // 在这里可以执行上传文件的操作
      console.log(selectedFile)
    }
  }

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return {
    fileInputRef,
    handleButtonClick,
    handleFileChange
  }
}
