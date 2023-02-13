import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Footer, Button, Input } from "../component/CommonComponent";
import { getLocalStorageItem } from "../utils/helper";
import { getScoreboard } from "../redux/action";
import Header from "../component/layout/Header";

const Dashboard = () => {
  const location = useLocation();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const get_scoreboard = useSelector((state) => state?.GetScoreBoard?.scoreboardData);
  const loader = useSelector((state) => state?.GetScoreBoard?.loading);

  console.log("get_scoreboard", get_scoreboard)
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    let queryParams = {
      seven_day: 0,
      one_day: 0,
      one_hour: 0,
      start_date: null,
      end_date: null
    }
    dispatch(getScoreboard({ queryParams }))
    if (getLocalStorageItem("token") && getLocalStorageItem("userData")) {
      history.push("/dashboard");
    } else {
      history.push("/");
    }
    return () => {
    }
  }, []);

  const filterByDate = (e, date) => {
    e.preventDefault();
    let queryParams = {
      seven_day: 0,
      one_day: 0,
      one_hour: 0,
      start_date: null,
      end_date: null
    }
    if (date === "seven_day") {
      queryParams = {
        ...queryParams,
        seven_day: 1,
      }
    } else if (date === "one_day") {
      queryParams = {
        ...queryParams,
        one_day: 1,
      }
    } else if (date === "one_hour") {
      queryParams = {
        ...queryParams,
        one_hour: 1,
      }
    } else if (date === "reset") {
      queryParams = {
        ...queryParams
      }
    }

    dispatch(getScoreboard({ queryParams }))
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    console.log("start",start)

    if(start != null && end != null){
      let queryParams = {
        seven_day: 0,
        one_day: 0,
        one_hour: 0,
        start_date: start,
        end_date: end
      }
      dispatch(getScoreboard({ queryParams }))
    }
    console.log("end",end)
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <>
      <section className="dashboard-main-one position-relative file-set">
        <Header />
        <div className="content dashboard-background">
          <div className="cards-section dashboard-sec intro-card">
            <div className="row m-0">
              <div className=" p-0 intro-card-left">
                <div className="row m-0">
                  <div className="row m-0">
                    <Button
                      onClick={(e) => {
                        filterByDate(e, "seven_day")
                      }}
                      text="Past 7 Day"
                      type="button"
                      className={` login-btn`}
                    />
                    <Button
                      text="Past 1 Day"
                      onClick={(e) => {
                        filterByDate(e, "one_day")
                      }}
                      type="button"
                      className={` login-btn`}
                    />
                    <Button
                      onClick={(e) => {
                        filterByDate(e, "one_hour")
                      }}
                      text="Past 1 Hour"
                      type="button"
                      className={` login-btn`}
                    />
                    <Button
                      onClick={(e) => {
                        filterByDate(e, "reset")
                      }}
                      text="Reset"
                      type="button"
                      className={` login-btn`}
                    />
                    <DatePicker
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                    />
                  </div>
                  <div className="col-md-12 p-0">
                    <div className="justify-content-center w-100 h-100">
                      <div className="card border-0 bg-lightwhite p-4 mb-0 font-Circular border-14px w-100 text-center position-relative h-100">
                        <div className="table-responsive job_cards_table">
                          <table className="table-width m-0 p-0">
                            <tbody className="position-relative">
                              <tr className="border-0">
                                <th

                                  width="189px"
                                  className="font-cabin font-10 text-gray cursor-pointer"
                                >
                                  Batsman
                                </th>
                                <th

                                  width="187px"
                                  className="font-cabin font-10 text-gray cursor-pointer"
                                >
                                  Run
                                </th>
                                <th

                                  width="187px"
                                  className={`font-cabin font-10 text-gray cursor-pointer`}
                                >
                                  {" "}
                                  Total Score
                                </th>
                                <th

                                  width="210px"
                                  className="font-cabin font-10 text-gray cursor-pointer"
                                >
                                  Wicket
                                </th>
                                <th

                                  width="210px"
                                  className="font-cabin font-10 text-gray cursor-pointer"
                                >
                                  Over
                                </th>
                              </tr>
                              {loader ? (
                                <tr className="spin-parent">
                                  <td className="spin-child">
                                    <span
                                      className="spinner-border text-dark"
                                      role="status"
                                    >
                                      <span className="sr-only">
                                        Loading...
                                      </span>
                                    </span>
                                  </td>
                                </tr>
                              ) : get_scoreboard?.length > 0 ? (
                                get_scoreboard?.map((score_board, index) => {
                                  return (
                                    <tr
                                      key={index}
                                      className="table_row_card border-0"
                                    >
                                      <td className="cursor-pointer">
                                        {score_board?.batsman}
                                      </td>
                                      <td className="cursor-pointer">
                                        {score_board?.run}
                                      </td>
                                      <td className="cursor-pointer">
                                        {score_board?.score}
                                      </td>
                                      <td className="cursor-pointer">
                                        {score_board?.wicket}
                                      </td>
                                      <td className="cursor-pointer">
                                        {score_board?.over}
                                      </td>
                                    </tr>
                                  );
                                })
                              ) : (
                                <tr className="job-dashboard-table-raw">
                                  <td colSpan="6">no score board found</td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
