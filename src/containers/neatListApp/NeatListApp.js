import React from 'react';

import Header from '../../containers/Header/Header';
import Action from '../../components/Action/Action';
import AddOption from '../../components/AddOption/AddOption';
import Options from '../../components/Options/Options';
import OptionModal from '../../components/OptionModal/OptionModal';

class NeatListApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
    isModalOpen: false
  }
  handleCloseModal = () => {
    this.setState((prevState) => ({
      isModalOpen: false
    }));
  }
  handleDeleteOptions = () => {
    this.setState(() => ({
      options: []
    }) );
  }
  handleDeleteOption = (optionText) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionText)
    }) );
  }
  handlePickOption = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex]

    this.setState((prevState) => ({
      selectedOption: option,
      isModalOpen: true
    }) );
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Come on! Throw some ideas in :)';
    }
    if (this.state.options.includes(option)) {
      return 'We have already such stuff. Think out another idea to submit';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat([option])    // Nie modyfikujemy bezpośrendio stanu. Uzywamy technik które nie wpływają bezpośrednio na obiekt stanu, tylko tworzą coś nowego na bazie dostarczonego stanu wyjściowego
    }) );
  }
  componentWillMount() {
    console.log('component will be mounted');
  }
  componentDidMount(prevState) {
    const localStorageData = localStorage.getItem('appStateOptions');

    if (localStorageData !== null) {
      this.setState((prevState) => ({
        options: JSON.parse(localStorageData)
      }) )
    }

    console.log('component did mount');
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('component will be updated');
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('appStateOptions', JSON.stringify(this.state.options))
      console.log('component did update');
    }
  }
  render() {
    const subtitle = "Sad peon ;("

    return (
      <div className="neatlist--wrapper">
      <Header subtitle={subtitle} />
      <Action 
          hasOptions={ this.state.options.length > 0 } 
          handlePickOption={ this.handlePickOption }
      />
      <Options 
          options={ this.state.options } 
          handleDeleteOptions={ this.handleDeleteOptions }
          handleDeleteOption={ this.handleDeleteOption } 
      />
      <AddOption
          handleAddOption={ this.handleAddOption }
      />
      <OptionModal
        selectedOption = {this.state.selectedOption}
        isModalOpen = {this.state.isModalOpen}
        handleCloseModal = {this.handleCloseModal}
       />
      </div>
    )
  }
}

export default NeatListApp;