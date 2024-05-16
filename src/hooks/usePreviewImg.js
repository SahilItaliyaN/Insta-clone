import { useState } from 'react'
import useShowToast from './useShowToast'


const usePreviewImg = () => {
    const [selectedFile,setSelectedFile] = useState(null);
    const showToast = useShowToast();
    const maxFileSizeInByte = 2*1024*1024;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if(file && file.type.startsWith("image/")){
            if(file.size > maxFileSizeInByte){
                showToast("Error","File size must be less than 2MB","error")
                setSelectedFile(null)
                return
            }

            const reader = new FileReader();

            reader.onloadend = () => {
                setSelectedFile(reader.result)
            }

            reader.readAsDataURL(file)
        }else{
            showToast("Error",'please select an Image File',"error");
        }
    }
    return {selectedFile , handleImageChange ,setSelectedFile}
}

export default usePreviewImg
