import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/Store';
import { Provider } from 'react-redux'
window.Helper = new function () {
  this.to2Number = function (number) {
    let str = "" + number;
    if (String(number).length < 2) {
      str = "0" + number
    }
    return str;
  };
  this.has = function (str, obj) {
    try {
      let o = {};
      const a = str.split(".");
      a.map(i => {
        o = obj[i] || o[i];
        return null;
      })
      return o;
    } catch (error) {
      return "";
    }
  };
  this.formatDate = function (timestamp, strFormat) {
    var date = new Date(timestamp),
      o = {
        f: date.getFullYear(),
        n: window.Helper.to2Number(date.getMonth() + 1),
        j: window.Helper.to2Number(date.getDate())
      },
      str = "";
    if (timestamp > 0) {
      switch (strFormat) {
        case "{f}-{n}-{j}":
          str = o.f + "-" + o.n + "-" + o.j;
          return str;
      }
      return o.j + "/" + o.n + "/" + o.f;
    } else {
      return str;
    }
  };
  this.toEntity = function (data) {
    let entity = {};
    entity.id = data.idUser;
    entity.username = data.username;
    entity.password = data.password;
    entity.status = data.status ? (data.status * 1) : null;
    entity.information = {};
    entity.information.id = data.idInformation;
    entity.information.fullname = data.fullname;
    entity.information.phone = data.phone;
    entity.information.birthday = data.birthday ? (new Date(data.birthday) * 1) : null;
    entity.credentialSet = [];
    entity.exchangeItemSet = [];
    return entity;

  };
  this.toData = function (entity) {
    let data = {};
    data.idUser = window.Helper.has("id", entity);
    data.username = window.Helper.has("username", entity);
    data.password = window.Helper.has("password", entity);
    data.status = window.Helper.has("status", entity);
    data.fullname = window.Helper.has("information.fullname", entity);
    data.phone = window.Helper.has("information.phone", entity);
    data.birthday = window.Helper.has("information.birthday", entity);
    data.idInformation = window.Helper.has("information.id", entity);
    return data;
  };
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
