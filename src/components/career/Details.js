import React,{useState} from 'react';
import './Details.css';
import CareerNavbar from './CareerNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Details() {
    const [formData,setFormData] = useState({Name:"",ContactNo:"",email:"",reason:"",file:""})
    function changeHandler(event){
        const {name,value} = event.target;
        setFormData((prevFormData)=>{
            return{
                ...prevFormData,
                [name] :  value
            }
        })
    }
    const handleFormSubmit = () => {
        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const email = document.getElementById('email').value;
        const reason = document.getElementById('reason').value;
        const fileInput = document.getElementById('upload');
        if (!name || !contact || !email || !reason) {
            toast.error('Please fill in all fields.');
            return false; 
        }
        if (!fileInput.files || fileInput.files.length === 0) {
            toast.error('Please select a file.');
            return false;
        }
        toast.success('Form submitted successfully!');
        return true;
    };
    function submitHandler(event){
            event.preventDefault();
            const formDataToSend = new FormData();
            formDataToSend.append("Name", formData.Name);
            formDataToSend.append("ContactNo", formData.ContactNo);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("reason",formData.reason);
            formDataToSend.append("fileInput", formData.file);
    }
    return (
        <div className='details'>
            <CareerNavbar />
            <div className='mainbox'>
                <div className='credentials'>
                    <div className='leftbar'>
                        <p>Apply Here</p>
                    </div>
                    <form className='rightbar' onSubmit={submitHandler}>
                        <input type='text' onChange={changeHandler} id='name' placeholder='Name' className='child' name='Name' value={formData.Name} />
                        <input type='tel' onChange={changeHandler} id='contact' placeholder='Contact No' className='child' name='ContactNo' value={formData.ContactNo} />
                        <input type='email' onChange={changeHandler} id='email' placeholder='Email-Id' className='child' name='email' vlaue={formData.email} />
                        <input type='text' onChange={changeHandler} id='reason' placeholder='Reason To Apply' className='child' name='reason' value={formData.reason} />
                        <div className='containerresume'>
                            <div className='resume-wrap'>
                                <label className='resume' htmlFor='upload'>
                                    Upload Resume
                                </label>
                                <input id='upload' type='file' onChange={changeHandler} name='file' value={formData.file}/>
                            </div>
                        </div>
                        <button onClick={handleFormSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer position='top-right' autoClose={3000} /> {/* Configure toast position and duration */}
        </div>
    );
}

export default Details;
