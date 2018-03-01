import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import { Image, Grid, Divider, List, Input, Dropdown, Icon } from 'semantic-ui-react';
import './style.css';

class TopMenu extends React.Component {
  render() {
    return(
        <Grid centered className={"menugrid"}>
          <Menu className="top-menu" centered borderless >
            <Menu.Item center>HOME</Menu.Item>
            <Menu.Item>ABOUT</Menu.Item>
            <Menu.Item>MENU</Menu.Item>
            <Menu.Item>BEERS</Menu.Item>
            <Menu.Item>SPIRITS</Menu.Item>
            <Menu.Item>GALLERY</Menu.Item>
            <Menu.Item>CALENDAR</Menu.Item>
            <Menu.Item>CONTACT</Menu.Item>
          </Menu>
          <Grid.Row>
            <Image className="smallpic" src="http://static1.squarespace.com/static/547d3a0fe4b009320b6915e1/t/54bc9c0be4b0b5bb4bf3c8a9/1470952468134/" />
          </Grid.Row>
          <Grid.Row><h2>DOWNTOWN-CHINATOWN'S HOME BAR</h2></Grid.Row>
          <Grid.Row><h2>HOME OF HONOLULU'S HAPPIEST HAPPY HOUR</h2></Grid.Row>
          <Grid.Row><h2>HAPPY HOUR NOW TUESDAY THROUGH FRDAY 4-9PM!</h2></Grid.Row>
        </Grid>
    );
  }
}

class Barbackground extends React.Component {
  render() {
    return (
        <Image fluid src="http://static1.squarespace.com/static/547d3a0fe4b009320b6915e1/t/54c7465be4b080f91c82df1f/1422345819989/Bar+35_hero_06+top+bar.jpg"/>
    );
  }
}


class Bar35 extends React.Component {

  render() {
    return (
        <div>
          <Barbackground/>
          <TopMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Bar35/>, document.getElementById('root'));