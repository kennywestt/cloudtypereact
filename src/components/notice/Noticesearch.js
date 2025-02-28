import React from "react";
import "../../scss/notice.scss";
import Noticebtn from "./Noticebtn";
import Noticetype from "./Noticetype";

const Noticesearch = ({ Ntype, setNtype, Ntext, setNtext, handleSearch }) => {
    console.log("분류", Ntype, "검색어", Ntext);

    return (
        <div className="Nsearch-wrap">
            <form className="Nform" name="myFrm">
                <Noticetype Ntype={Ntype} setNtype={setNtype} />
                <input
                    className="search-bar"
                    type="text"
                    name="keyword" // 폼데이터키역할
                    value={Ntext} // 폼데이터값
                    placeholder="검색어를 입력해주세요."
                    onChange={e => setNtext(e.target.value)}
                />
                <Noticebtn handleSearch={handleSearch} />
            </form>
        </div>
    );
};

export default Noticesearch;
