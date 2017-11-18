import alt from '../alt';

class AddBotActions {
  constructor() {
    this.generateActions(
      'addBotSuccess',
      'addBotFail',
      'updateBotName',
      'updateCompanyName',
      'invalidName',
      'invalidCompanyName'
    );
  }

  addBot(botname, companyname) {
    $.ajax({
      type: 'POST',
      url: '/api/v1/upload',
      data: { botname: botname, companyname: companyname }
    })
      .done((data) => {
        this.actions.addBotSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addBotFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddBotActions);