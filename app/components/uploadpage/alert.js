import React from 'react';
import AddBotStore from '../../stores/AddBotStore'
import AddBotActions from '../../actions/AddBotActions';
import Countries from './countries';

class UploadBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddBotStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddBotStore.listen(this.onChange);
  }
  componentWillUnmount() {
    AddBotStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var botname = this.state.botname.trim();
    var companyname = this.state.companyname.trim();
    var botdescription = this.state.botdescription;
    var category = this.state.category;

    if (!botname) {
      AddBotActions.invalidName();
      this.refs.botNameTextField.getDOMNode().focus();
    }

    if (!companyname) {
      AddBotActions.invalidCompanyName();
      this.refs.companyNameTextField.getDOMNode().focus();
    }

    if (!botdescription) {
      AddBotActions.invalidBotDescription();
      this.refs.descriptionTextField.getDOMNode().focus();
    }

    if (category) {
      AddBotActions.invalidCategory();
      this.refs.categoryTextField.getDOMNode().focus();
    }

    if (botname && companyname && botdescription && category) {
      AddBotActions.addBot(botname, companyname, botdescription, category);
    }
  }
  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Upload Bot</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nameValidationState}>
                    <label className='control-label'>Bot Name</label>
                    <input type='text' className='form-control' ref='botNameTextField' value={this.state.botname}
                      onChange={AddBotActions.updateBotName} autoFocus />
                    <span className='help-block'>{this.state.botHelpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.companyNameValidationState}>
                    <label className='control-label'>Company Name</label>
                    <input type='text' className='form-control' ref='companyNameTextField' value={this.state.companyname}
                      onChange={AddBotActions.updateCompanyName} />
                    <span className='help-block'>{this.state.companyHelpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.descriptionValidationState}>
                    <label className='control-label'>Bot description</label>
                    <input type='text' className='form-control' ref='descriptionTextField' value={this.state.botdescription}
                      onChange={AddBotActions.updateBotDescription} />
                    <span className='help-block'>{this.state.categoryHelpBlock}</span>
                  </div>
                  <div className={'form-group ' + this.state.categoryValidationState}>
                    <label className='control-label'>Category</label>
                    <div className='form-control' ref='categoryTextField' value={this.state.category}
                      onChange={AddBotActions.updateCategory} >
                      <Countries />
                    </div>
                    <span className='help-block'>{this.state.categoryHelpBlock}</span>
                  </div>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                  <span className={'help-block'  + this.state.nameValidationState}>{this.state.btnHelpBlock}</span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default UploadBot;