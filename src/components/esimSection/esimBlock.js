import "./esimBlock.css";

const EsimBlock = () => {
  return (
    <>
      <div className="esim_section">
        <div className="about_esim">
          <div className="container">
            <div className="about_blocks">
              <div className="esim_img">
                <img src="/resources/images/esim_Img.png" alt="" title="" />
              </div>
              <div className="esim_text">
                <div className="about_text">
                  <div className="esim_title">E-sim</div>
                  <div className="esim_desc">
                    Ucom-ում վայելեք միջազգային զանգերի բարձր որակն ու մատչելի
                    սակագներն առանց հավելյալ կոդերի։ Պարզապես հավաքեք տվյալ
                    երկրի կոդն ու հեռախեսահամարը
                  </div>
                  <button className="btn_ucom">Տեսնել ավելին</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsimBlock;
