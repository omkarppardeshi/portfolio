const Partners = ({ dark }) => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_partners">
        <div className="container">
          <div className="partners_inner">
            <ul>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    src={`img/partners/${dark ? "light" : "dark"}/Goji-labs.jpg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" a="" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    src={`img/partners/${dark ? "light" : "dark"}/Bilberrr.jpg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" a="" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                    src={`img/partners/${dark ? "light" : "dark"}/Essentail.jpg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" a="" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                    src={`img/partners/${dark ? "light" : "dark"}/Four-By-North.jpg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" a="" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    src={`img/partners/${dark ? "light" : "dark"}/Netgur.jpg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" a="" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                    src={`img/partners/${dark ? "light" : "dark"}/Suffescom.jpg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" a="" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.4s"
                    src={`img/partners/${dark ? "light" : "dark"}/Xeven.jpg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" a="" href="#" />
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <img
                    className="wow fadeIn"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                    src={`img/partners/${dark ? "light" : "dark"}/Zazz.jpg`}
                    alt=""
                  />
                  <a className="devman_tm_full_link" a="" href="#" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
