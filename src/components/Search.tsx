import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import sreverUrl from "../enviornment";
import PostData from "../services/postData";
import "../assets/main.css";
import Cards from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../redux/dataSlice";

function Search() {
    const [searchType, setSearchType] = useState("users");
    const [searchBody, setSerachBody] = useState("");
    const data = useSelector((state: any) => state.data.value);
    const dispatch = useDispatch();

    useEffect(() => {
        async function makeAPIRequest() {
            const data = await PostData(sreverUrl + '/search', {searchType, searchBody});
            dispatch(setData(data));
        }
        if(searchBody.length >= 3)
            makeAPIRequest();

    }, [searchBody, searchType])

    return (
        <div className="Search">
            <div className="searchHeader">
                <div className="imgDiv">
                    <img src="https://i.ibb.co/drkb9Lr/github-icon.png" alt="Image not found"/>
                </div>
                <div className="secondDiv"> 
                    <h2>Github Searcher</h2>
                    <p>Search users or repositories below</p>
                </div>
            </div>
            <div className="clearFix"></div>
            <br />

            <div className="searchForm">
                <input type="search" placeholder="Start typing to search .."  onChange={(e) => {
                    setSerachBody(e.target.value);
                }}/>
                <div className="selectDiv">
                    <select defaultValue="Users" onChange={(e) => {
                        setSearchType(e.target.value);
                    }}>
                        <option value="users"> Users </option>
                        <option value="repositories"> Repositories </option>
                        <option value="issues"> Issues </option>
                    </select>
                </div>  
            </div>
            <div className="clearFix"></div>
            {searchBody.length >= 3 && data && <Cards data = {data}/> }
        </div>
     );
}

export default Search;