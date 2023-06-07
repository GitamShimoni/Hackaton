import './UploadWidget.css'
import {useState, useEffect, useRef} from 'react';
const UploadWidget = () => {
    const username = "gitam"
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [publicPic, setPublicPic] = useState("unpublic");
    const [startButton, setStartButton] = useState(false);
    const [doneButton, setDoneButton] = useState(false);
    const [areYouDone, setAreYouDone] = useState(false);
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "seaface",
            uploadPreset: "default_upload",
            sources: ['local', 'camera'],
            tags: ["gallery-images", username, publicPic]
        }, function(error, result){
            console.log(result);
        });
    }, [])

    function handlePublicClick(){
        if (publicPic=="public"){
            setPublicPic("unpublic")
        }
        else{
            setPublicPic("public")
        }
    }
    function handleStartButton(){
        setStartButton(true);
        setDoneButton(true);
    }
    function handleDoneButton(){
        setDoneButton(false);
        setAreYouDone(true);
        
    }
    console.log(publicPic);
    return (
        <div id='UploadWidget-Container'>
            {!startButton && <div id='start-cleaning-div'  className={startButton && `hidden-startbutton`}>
                <button className='Uploadpage-buttons' onClick={()=> handleStartButton()}>Start Cleaning Now!</button>
            </div>}
            {doneButton && <div id='start-cleaning-div'>
                <button className='Uploadpage-buttons' onClick={()=> handleDoneButton()}>I am DONE!</button>
            </div>}
            
            {areYouDone && <div id='readytoupload-div'>
                <div>
                    <label htmlFor="input">Do you want the picture to be public? </label>
                    <input type="checkbox" onClick={()=> handlePublicClick()}/>
                </div>
                <div id='upload-button-container'>
                    <button className='Uploadpage-buttons' onClick={() => widgetRef.current.open()}>
                        Upload
                    </button>
                </div>
            </div>}
            
        </div>
    )
}

export default UploadWidget;