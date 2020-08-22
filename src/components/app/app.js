import React, { Component } from "react";
import AppHeader from "../app-header";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import "./app.css";

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <AppHeader />
                <div className='d-flex'>
                    <SearchPanel />
                    <PostStatusFilter/>
                </div>
                <PostList />
                <PostAddForm />
            </div>
        )
    }
}