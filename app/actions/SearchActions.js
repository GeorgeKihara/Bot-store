import alt from '../alt';

class SearchActions {
    constructor() {
        this.generateActions(
            'searchSuccess',
            'searchFail',
            'updateSearch',
            'invalidSearch'
        );
    }

    performSearch(search) {
        $.ajax({
            type: 'GET',
            url: '/api/v1/search',
            data: {
                search: search,
            }
        })
            .done((data) => {
                this.actions.searchSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.searchFail(jqXhr.responseJSON.message);
            });

    }
}

export default alt.createActions(SearchActions);