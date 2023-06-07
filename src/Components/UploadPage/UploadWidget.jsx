import {useEffect, useRef} from 'react';
const UploadWidget = () => {
    const username = "gitam"
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "seaface",
            uploadPreset: "default_upload",
            sources: ['local', 'camera'],
            tags: ["gallery-images", username]
        }, function(error, result){
            console.log(result);
        });
    }, [])
    return (
        <button onClick={() => widgetRef.current.open()}>
            Upload
        </button>
    )
}

export default UploadWidget;