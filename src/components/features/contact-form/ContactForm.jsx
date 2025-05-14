import "./ContactForm.scss";
import CustomButton from "../../common/Button";
import { useState } from "react";

const hours = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'));
const minutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
const today = new Date().toISOString().split('T')[0];

const ContactForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const formatPhoneNumber = (value) => {
        // remove all non-digit characters
        const digits = value.replace(/\D/g, "");
        
        // if the number starts with 254, remove it to prevent duplication
        const cleanDigits = digits.startsWith('254') ? digits.slice(3) : digits;

        if (cleanDigits.length <= 3) {
            return `+254 ${cleanDigits}`;
        } else if (cleanDigits.length <= 6) {
            return `+254 ${cleanDigits.slice(0, 3)} ${cleanDigits.slice(3)}`;
        } else if (cleanDigits.length <= 9) {
            return `+254 ${cleanDigits.slice(0, 3)} ${cleanDigits.slice(3, 6)} ${cleanDigits.slice(6)}`;
        } else {
            return `+254 ${cleanDigits.slice(0, 3)} ${cleanDigits.slice(3, 6)} ${cleanDigits.slice(6, 9)}`;
        }
    };

    const handlePhoneChange = (e) => {
        const formattedNumber = formatPhoneNumber(e.target.value);
        setPhoneNumber(formattedNumber);
    };

    return (
        <form className="contact-form">
            <div className="form-section">
                <h2>YOUR CONTACT INFORMATION:</h2>
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name<span>*</span></label>
                        <input type="text" required />
                    </div>
                    <div className="form-group">
                        <label>Last Name<span>*</span></label>
                        <input type="text" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Email<span>*</span></label>
                        <input type="email" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number<span>*</span></label>
                        <input
                            type="tel"
                            required
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="+254 712 345 678"
                            pattern="^\+254\s\d{3}\s\d{3}\s\d{3}$"
                            minLength={15}
                            maxLength={17}
                        />
                    </div>
                </div>
            </div>

            <div className="form-section">
                <h2>EVENT INFORMATION:</h2>
                <div className="form-group">
                    <label>What type of function is your event?<span>*</span></label>
                    <select required>
                        <option value="">Please choose one</option>
                        <option>Wedding</option>
                        <option>Birthday</option>
                        <option>Corporate</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>No of Guests<span>*</span></label>
                    <select required>
                        <option>Less than 50</option>
                        <option>50-100</option>
                        <option>100-200</option>
                        <option>200+</option>
                    </select>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Event Date<span>*</span></label>
                        <input type="date" required min={today} />
                    </div>
                    <div className="form-group">
                        <label>Venue Name</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Start Time<span>*</span></label>
                        <div className="time-inputs">
                            <select required>
                                {hours.map(h => (
                                    <option key={h} value={h}>{h}</option>
                                ))}
                            </select>
                            <select required>
                                {minutes.map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </select>
                            <select required>
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>End Time<span>*</span></label>
                        <div className="time-inputs">
                            <select required>
                                {hours.map(h => (
                                    <option key={h} value={h}>{h}</option>
                                ))}
                            </select>
                            <select required>
                                {minutes.map(m => (
                                    <option key={m} value={m}>{m}</option>
                                ))}
                            </select>
                            <select required>
                                <option>AM</option>
                                <option>PM</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>How did you hear about me?<span>*</span></label>
                    <select required>
                        <option value="">Please choose one</option>
                        <option>Instagram</option>
                        <option>Facebook</option>
                        <option>Friend</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Please let me know if you have any additional information</label>
                    <textarea rows="4" />
                </div>
            </div>
            <CustomButton className="submit-btn" onClick={() => console.log('Book now clicked')}>
                Book now
            </CustomButton>
        </form>
    );
};

export default ContactForm;