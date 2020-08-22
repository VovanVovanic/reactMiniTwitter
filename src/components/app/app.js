import React, { Component } from "react";
import AppHeader from "../app-header";
import PostStatusFilter from "../post-status-filter";
import SearchPanel from "../search-panel";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import "./app.css";

export default class App extends Component {
     postData = [
         this.createItem('I wish I knew react well'),
         this.createItem('Could we have some coffee?'),
         this.createItem('Lets play that amazing game altogether!')
    ]

    createItem(label) {
        return {
            label,
            important: false,
            like: false,
            id: ((Math.random()*Math.random())*23123).toFixed()
        }
    }
    render() {
        return (
            <div className='app'>
                <AppHeader />
                <div className='d-flex'>
                    <SearchPanel />
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.postData}/>
                <PostAddForm />
            </div>
        )
    }
}