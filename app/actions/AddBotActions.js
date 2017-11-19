import alt from '../alt';

class AddBotActions {
    constructor() {
        this.generateActions(
            'addBotSuccess',
            'addBotFail',
            'updateBotName',
            'updateCompanyName',
            'updateBotDescription',
            'updateCategory',
            'invalidName',
            'invalidCompanyName',
            'invalidBotDescription',
            'invalidCategory'
        );
    }

    addBot(botname, companyname, botdescription, category) {
        $.ajax({
            type: 'POST',
            url: '/api/v1/upload',
            data: {
                botname: botname,
                companyname: companyname,
                botdescription: botdescription,
                category: category
            }
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