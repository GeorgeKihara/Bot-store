import alt from '../alt';
import SearchActions from '../actions/SearchActions';

class SearchStore {
    
    constructor(){
        //defaultstate
        this.bindActions(SearchActions);
        this.search = '';
        this.searchHelpBlock = '';
        this.searchValidationState = '';
    }

    //the search is successful
    onSearchSuccess(successMessage){
        this.searchValidationState = 'has-success';
        this.searchHelpBlock = "search successful";
    }

    onSearchFail(errorMessage){
        this.searchValidationState = 'has-error';
        this.searchHelpBlock = "No results found";
    }

    onUpdateSearch(event){
        this.search = event.target.value;
        this.searchValidationState = '';
        this.searchHelpBlock = '';
    }

    onInvalidSearch() {
        this.searchValidationState = 'has-error';
        this.searchHelpBlock = 'No results found';
    }
}

export default alt.createStore(SearchStore);