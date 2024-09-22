import React from "react";
import { Link } from "react-router-dom";
// import { useStore } from '../store'
import { featured } from "../DataSub.js";
const Events = () => {
  // console.log(featured)
  // const history = useHistory();
  // const currentName = useStore((state) => state.currentName);
  return (
    <>
      <section className="work" id="work">
        <div>
          <h2 className="heading" style={{ margin: "5% 0" }}>
            <i className="fas fa-laptop-code"></i> EVENTS <span></span>
          </h2>
        </div>

        <div className="page-content">
          {featured.map((item) => {
            return (
              // <AnimationOnScroll animateIn="animate__fadeInRight">
              <div className="card1">
                <div className="content">
                  <h2 className="heade" style={{ color: "white" }}>
                    {item.eventName}
                  </h2>
                  <p className="description" style={{ color: "white" }}>
                    {item.eventDescription.slice(0, 100)}
                  </p>

                  <Link to={`/EventDetail/${item.id}`}>
                    <button className="btnsign" id={item.id}>
                      Register
                    </button>
                  </Link>
                </div>
              </div>
              // </AnimationOnScroll>
            );
          })}
        </div>

        <div className="viewall">
          <Link to="/AllEvent" class="btn10">
            <span>View All</span>

            <i
              className="fas fa-arrow-right"
              style={{
                padding: "3px",
              }}
            ></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Events;
