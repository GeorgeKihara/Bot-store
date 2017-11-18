import alt from '../alt';
import AddBotActions from '../actions/AddBotActions';

class AddBotStore {
  constructor() {
      //default state
    this.bindActions(AddBotActions);
    this.botname = '';
    this.companyname = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.companyNameValidationState = '';
  }
//the bot has been successfully added
  onAddBotSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  onAddBotFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock = errorMessage;
  }

  onUpdateBotName(event) {
    this.botname = event.target.value;
    this.nameValidationState = '';
    this.helpBlock = '';
  }

  onUpdateCompanyName(event) {
    this.companyname = event.target.value;
    this.companyNameValidationState = '';
    this.helpBlock = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.helpBlock = 'Please enter a Bot name.';
  }

  onInvalidCompanyName() {
    this.companyNameValidationState = 'has-error';
    this.helpBlock = 'Please enter a company name.';
  }
}

export default alt.createStore(AddBotStore);