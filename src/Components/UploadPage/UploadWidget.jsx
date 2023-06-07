import './UploadWidget.css'
import {useState, useEffect, useRef} from 'react';
const UploadWidget = () => {
    let loginname;
    if (localStorage.getItem("login"))
    loginname = localStorage.getItem("login")
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [publicPic, setPublicPic] = useState("unpublic");
    const [startButton, setStartButton] = useState(false);
    const [doneButton, setDoneButton] = useState(false);
    const [areYouDone, setAreYouDone] = useState(false);
    let localphotos;
    if (localStorage.getItem("photos"))
     localphotos = localStorage.getItem("photos")
    let photoproperties;
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: "seaface",
            uploadPreset: "default_upload",
            sources: ['local', 'camera'],
            tags: ["gallery-images", loginname, publicPic]
        }, function(error, result){
            console.log(result);
            photoproperties=result;
        });
        // localStorage.setItem("pictures", JSON.stringify([...localphotos, photoproperties]))
    }, [publicPic])

    function handlePublicClick(){
        if (publicPic=="unpublic"){
            setPublicPic("gallery-images")
        }
        else{
            setPublicPic("unpublic")
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