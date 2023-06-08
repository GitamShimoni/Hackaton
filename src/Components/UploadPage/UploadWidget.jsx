import './UploadWidget.css'
import emailjs from "emailjs-com";
import {useState, useEffect, useRef} from 'react';
const UploadWidget = () => {
    let loginname;
    if (localStorage.getItem("login"))
    loginname = localStorage.getItem("login")
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const form = useRef();
    const [publicPic, setPublicPic] = useState("unpublic");
    const [startButton, setStartButton] = useState(false);
    const [doneButton, setDoneButton] = useState(false);
    const [areYouDone, setAreYouDone] = useState(false);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");


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

    function handleSubmit(e){
        e.preventDefault();
        console.log(form.current);
    emailjs
      .sendForm(
        "service_ibr8r2v",
        "template_udbzlbj",
        form.current,
        "RcApGEp-Su9_KGK4V"
      )
      .then((result) => {
        console.log(result.text);
        alert("Message has been sent.")
        setName("");
        setEmail("");

      })
      .catch((error) => {
        console.log(error.text);
        alert("Something went wrong.")
      });
    }


    return (
        <div id='UploadWidget-Container'>

            {!startButton && <div id='start-cleaning-div'  className={startButton && `hidden-startbutton`}>
                <form ref={form} onSubmit={(e) => handleSubmit(e)}>
                    <div id='enter-email-div'>
                        <label htmlFor="text">Enter Your Email</label>
                        <input type="text" style={{display: 'none'}} name='user_name' value={loginname}/>
                        <input value={email} type="text" name='user_email' onChange={(e) => setEmail(e.target.value)}/>
                        <button type='submit'>Submit</button>
                    </div>
                </form>

                <button className='Uploadpage-buttons' onClick={()=> handleStartButton()}>Start Cleaning Now!</button>
            </div>}
            {doneButton && <div id='start-cleaning-div'>
                <button className='Uploadpage-buttons' onClick={()=> handleDoneButton()}>I am DONE!</button>
            </div>}
            
            {areYouDone && <div id='readytoupload-div'>
                <div className='readytoupload-div-inner' >
                    <label className='public'  htmlFor="input">Do you want the picture to be public? </label>
                    <input type="checkbox" onClick={()=> handlePublicClick()}/>
                </div>
                <div id='upload-button-container'>
                    <div id='enter-email-container'>
                    </div>
                    <button className='Uploadpage-buttons' onClick={() => widgetRef.current.open()}>
                        Upload
                    </button>
                </div>
            </div>}
           
            
        </div>
    )
}

export default UploadWidget;