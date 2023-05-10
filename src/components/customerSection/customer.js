import { useState } from "react";
import "./customer.css";
const Customer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegexp = /^(\+374|374|0)?(77|93|94|95|96|97|98|99)[2-9]\d{6}$/;
    const containsZero = phoneNumber.startsWith("0");
    const numDigits = phoneNumber.replace(/\D/g, ).length;
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
      <div className="customer_section">
        <div className="top_section">
          <div className="custForm_img">
            <img src="/resources/images/Rectangle 32.png" alt="" title="" />
          </div>
          <div className="customer_text">
            <div className="container">
              <div className="title_section">
                Դառնալ UCOM բաժանորդ Ձեր հեռախոսահամարով{" "}
              </div>
              <div className="customer_info">
                <div className="step_block">
                  <div className="step_number">1</div>
                  <div className="step_title">
                    ձևակերպեք անվճար առաքում կամ չգիտեմ ինչ{" "}
                  </div>
                </div>
                <div className="step_block">
                  <div className="step_number">2</div>
                  <div className="step_title">
                    7 աշխատանքային օրվա ընտացքում կդառնաք UCOM բաժանորդ
                  </div>
                </div>
                <div className="step_block">
                  <div className="step_number">3</div>
                  <div className="step_title">
                    Տեղադրեք քարտը հեռախոսի մեջ և վայելեք շփումը
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customer_form">
          <div className="form_title">UCOM Բաժանորդ դառնալու Հայտադիմում</div>
          <div className="to_register">
            <label>
              <span>Հեռախոսահամար, որով անցում եք կատարում UCOM</span>
              <input
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                onKeyPress={handleKey}
                type="tel"
                name="name"
                placeholder="+374(91) 00-21-21"
              />
            </label>
            {phoneNumberError && <div className="error_message">{phoneNumberError}</div>}
          </div>
          <div className="match">
            <label>
              <input type="checkbox" />
              <span>Համընկնում է կոնտակտային համարի հետ</span>
            </label>
          </div>
          <div className="transition">
            <button className="trnasition_btn">Սկսել անցումը</button>
            <div className="start_transition">
              <label>
                <input type="checkbox" />
                <span>
                  Ցանկանում եմ ստանալ խորհրդատվություն հեռախոսահամարի անցման
                  վերաբերյալ
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
