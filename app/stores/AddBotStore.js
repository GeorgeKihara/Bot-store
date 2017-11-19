import alt from '../alt';
import AddBotActions from '../actions/AddBotActions';

class AddBotStore {
  constructor() {
      //default state
    this.bindActions(AddBotActions);
    this.botname = '';
    this.companyname = '';
    this.botdescription = '';
    this.category = '';
    this.btnHelpBlock = '';
    this.botHelpBlock = '';
    this.companyHelpBlock = '';
    this.descriptionHelpBlock = '';
    this.categoryHelpBlock = '';
    this.nameValidationState = '';
    this.companyNameValidationState = '';
    this.descriptionValidationState = '';
    this.categoryValidationState = '';
  }
//the bot has been successfully added
  onAddBotSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.btnHelpBlock = "Bot sucessfully saved";
  }

  onAddBotFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.btnHelpBlock = "Cannot save the bot";
  }

  onUpdateBotName(event) {
    this.botname = event.target.value;
    this.nameValidationState = '';
    this.botHelpBlock = '';
  }

  onUpdateCompanyName(event) {
    this.companyname = event.target.value;
    this.companyNameValidationState = '';
    this.companyHelpBlock = '';
  }

  onUpdateBotDescription(event) {
      this.botdescription = event.target.value;
      this.descriptionValidationState = '';
      this.descriptionHelpBlock = '';
  }

  onUpdateCategory(event) {
    this.category = event.target.value;
    this.categoryValidationState = '';
    this.categoryHelpBlock = '';
  }

  onInvalidName() {
    this.nameValidationState = 'has-error';
    this.botHelpBlock = "Please enter the bot's name.";
  }

  onInvalidCompanyName() {
    this.companyNameValidationState = 'has-error';
    this.companyHelpBlock = "Please enter the company's name.";
  }

  onInavlidBotDescription() {
      this.descriptionValidationState = 'has-error';
      this.descriptionHelpBlock = "Please enter the bot's description";
  }

  onInvalidCategory() {
    this.categoryValidationState = 'has-error';
    this.categoryHelpBlock = "Please choose the bot's category"
  }

}

export default alt.createStore(AddBotStore);