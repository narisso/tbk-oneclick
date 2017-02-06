'use strict';

const Document = require('./document');
const Request = require('./request');
const Client = require('./client');

const OneClick = class OneClick {

  constructor(testing) {
    this.client = new Client(testing || false);
  }

  initInscription(email, responseUrl, username) {
    const params = {email: email, username: username, responseURL: responseUrl};
    const request = new Request(params);
    const d = new Document({action: 'initInscription', params: params});
    const response = this.client.request('initInscription', d.doc);
    return response;
  }

  finishInscription(token) {
    const params = {token: token};
    const request = new Request(params);
    const d = new Document({action: 'finishInscription', params: params});
    const response = this.client.request('finishInscription', d.doc);
    return response;
  }

  authorize(amount, tbkUser, username, buyOrder) {
    const params = {
      amount: amount,
      tbkUser: tbkUser,
      username: username,
      buyOrder: buyOrder
    };
    const request = new Request(params);
    const d = new Document({action: 'authorize', params: params});
    const response = this.client.request('Authorize', d.doc);
    return response;
  }

  reverse(buyOrder) {
    const params = {'buyorder': buyOrder};
    const request = new Request(params);
    const d = new Document({action: 'codeReverseOneClick', params: params});
    const response = this.client.request('codeReverseOneClick', d.doc);
    return response;
  }

  removeUser(tbkUser, username) {
    const params = {tbkUser: tbkUser, username: username};
    const request = new Request(params);
    const d = new Document({action: 'removeUser', params: params});
    const response = this.client.request('removeUser', d.doc);
    return response;
  }
};

module.exports = {
  OneClick: OneClick
};
