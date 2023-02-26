import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Form = () => {
    const [validate, setValidate] = useState({
        name: '',
        contact: '',
        birthDate: '',
        email: '',
        about: '',
        error: {
            nameError: '',
            contactError: '',
            birthDateError: '',
            emailError:''

        },
        formValid: false
    });

    const handleChange = (e) => {
        if (e.target.id === "name") {
            validateName(e.target.value);
        }
        //console.log(e);
        if (e.target.id === "contact") {
            validateContact(e.target.value);
        }
        if (e.target.id === "birthDate") {
            validateBirthDate(e.target.value);
        }
        if (e.target.id === "email") {
            validateEmail(e.target.value);
        }
        if (e.target.id === "about") {
            validateAbout(e.target.value);
        }
    };
    const validateName = (name) =>{
        
        let formValid = validate.formValid;
        let nameError = validate.error.nameError;

        let pattern = /^[a-zA-Z ]*$/;

        if (name.trim() === "") {
            formValid = false;
            nameError = "This is required";

        } else if (name.trim().length < 3) {
            formValid = false;
            nameError = "Minimum of 3 characters";

        } else if (!pattern.test(name)) {
            formValid = false;

        }
        else {
            formValid = true;
            nameError = "";
        }

        setValidate({
            ...validate,
            formValid : formValid,
            name: name,
            error: {...validate.error, nameError :  nameError }
        })

        return formValid;
    };

    const  validateContact = (contact) => {
        let formValid = validate.formValid;
        let contactError = validate.error.contactError;

        const pattern = /^[0-9]{10}$/;

        if(contact.trim() === ""){
            formValid = false;
            contactError = "This is Required";
        }else if(!pattern.test(contact)) {
            formValid = false;
            contactError = "Invalid Contact Number";
        }
        else {
            formValid = true;
            contactError = "";
        }

        setValidate({
            ...validate,
            formValid : formValid,
            contact: contact,
            error: {...validate.error, contactError :  contactError }
        })

        return formValid;
    };

    const  validateEmail = (email) => {
        let formValid = validate.formValid;
        let emailError = validate.error.emailError;

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!pattern.test(email)) {
            emailError = "Invalid Email Address";
            formValid = false;
        } else {
            emailError = "";
            formValid = true;
        }

        setValidate({
            ...validate,
            formValid : formValid,
            email: email,
            error: {...validate.error, emailError :  emailError }
        })

        return formValid;
    };

    const validateBirthDate = (birthDate) => {
        //console.log(birthDate);
        let formValid = validate.formValid;
        let birthDateError = validate.error.birthDateError;

        let newDate = new Date();

        let birth = new Date(birthDate);

        let value = newDate >= birth;
        if (value == false) {
            birthDateError = "Invalid Birth Date";
            formValid = false;
        } else {
            birthDateError = "";
            formValid = true;
        }

        setValidate({
            ...validate,
            formValid : formValid,
            birthDate: birthDate,
            error: {...validate.error, birthDateError :  birthDateError }
        })
        

        return formValid;
    };

    const validateAbout = (about) => {

        setValidate({
            ...validate,
            about : about,
            formValid : false,
            error: {...validate.error}
        })

    };
    return (
        //onSubmit={handleSubmit}
        
        <form>
        {/* {this.state.Alertvisible ? <Alert color={this.state.alertColor}> {this.state.message} </Alert> : <></>} */}
        <div className="container" style={{ width: '60%' }}>
            <h2>Form in Function base Component</h2>
            <div className="row">
                <div className="col-lg-4">
                    <label className="form-label">Name</label>
                    <div className="form-group">
                        <input
                            required
                            id="name"
                            placeholder="Please Enter Name"
                            sx={{ width: '100%' }}
                            onChange={handleChange}
                        />
                        <p style={{color:'red'}}>{validate.error.nameError}</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <label className="form-label">Date of Birth</label>
                    <div className="form-group">
                        <Stack spacing={3}>
                            <input
                                id="birthDate"
                                type="date"
                                sx={{ width: '100%' }}
                                onChange={handleChange}
                            />
                            <p style={{color:'red'}}>{validate.error.birthDateError}</p>
                        </Stack>
                    </div>
                </div>
                <div className="col-lg-4">
                    <label className="form-label">Contact #</label>
                    <div className="form-group">
                        <input
                            required
                            id="contact"
                            placeholder="Please Enter Contact Number"
                            sx={{ width: '100%' }}
                            onChange={handleChange}
                        />
                        <p style={{color:'red'}}>{validate.error.contactError}</p>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-lg-12">
                    <label className="form-label">Email</label>
                    <div className="form-group">
                        <input
                            required
                            id="email"
                            placeholder="Please Enter Email Address"
                            sx={{ width: '100%' }}
                            onChange={handleChange}
                        />
                        <p style={{color:'red'}}>{validate.error.emailError}</p>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-lg-12">
                    <input
                        id="about"
                        placeholder="Tell me about your self"
                        sx={{ width: '100%' }}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <br></br>
            <Button type="submit" variant="outlined" sx={{ float: 'right', color: 'black', borderColor: 'black' }}>Submit</Button>
        </div>
    </form>
    );
};

export default Form;