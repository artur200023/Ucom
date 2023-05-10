import { useState } from "react";
import "./chargingForm.css";
import { AiFillCaretRight } from "react-icons/ai";

const Charging = () => {
  const [pay, setPay] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const onChange = (e) => {
    setPay(e.target.value);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegexp = /^(\+374|374|0)?(77|93|94|95|96|97|98|99)[2-9]\d{6}$/;
    const containsZero = phoneNumber.startsWith("0");
    const numDigits = phoneNumber.replace(/\D/g,).length;
    if (phoneRegexp.test(phoneNumber)) {
      return "Please enter a valid Armenian phone number in the format (xx)123456";
    }
    if (numDigits > 8) {
      return "Phone number cannot have more than 8 digits";
    }
    if (containsZero) {
      return "Phone number cannot contain the digit 0";
    } else {
      return true;
    }
  };

  const handleKey = (e) => {
    if (e.key === "0" && phoneNumber === "") {
      e.preventDefault();
    }
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setPhoneNumberError(validatePhoneNumber(value));
  };

  return (
    <>
      <div className="charging_form">
        <div className="container">
          <div className="forms">
            <div className="chang_form">
              <div className="changForm_text">
                <span>Օնլայն Լիցքավորում Առանց պահումների</span>
                <div className="changging_img">
                  <img src={"/resources/images/image 2.png"} alt="" title="" />
                </div>
              </div>
              <form>
                <div className="changing_inps">
                  <select className="chang_option">
                    <option>Բջջային կապ</option>
                    <option>Empty</option>
                  </select>
                  <div class="field_block">
                    <label>
                      <span class="label_hidden">Հեռախոսահամար</span>
                      <span className="phone_arm">+374</span>
                      <input
                        type="text"
                        autocomplete="off"
                        placeholder="Հեռախոսահամար"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        onKeyPress={handleKey}
                      />
                    </label>
                    {phoneNumberError && <div className="error_message">{phoneNumberError}</div>}
                  </div>
                  <div class="field_block">
                    <label>
                      <span className="label_hidden"></span>
                      <span className="forward">
                        <AiFillCaretRight />
                      </span>
                      <input
                        value={pay}
                        onChange={(e) => onChange(e)}
                        autocomplete="off"
                      />
                    </label>
                  </div>
                </div>
              </form>
            </div>
            <div className="download_App">
              <div className="download_appText">
                <span>Ներբեռնիր Հավելվածը</span>
                <div className="download_appImg">
                  <img src="/resources/images/image260.png" alt="" title="" />
                  <img
                    className="logo_ucom"
                    src={"/resources/images/Vector (2).png"}
                    alt=""
                    title=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="phone_text">
        <div className="phone_title">Սմարտֆոնների համար</div>
        <div className="phone_desc">
          Անսահմանապակ ինտերնետ, րոպեներ, sms-ներ
        </div>
      </div>
    </>
  );
};

export default Charging;
