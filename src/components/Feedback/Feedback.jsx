import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (category) => {
    // Функція для обробки відгуку та оновлення стану
    this.setState((prevState) => ({
      [category]: prevState[category] + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Збір відгуків</h1>
        <button onClick={() => this.handleFeedback('good')}>Добре</button>
        <button onClick={() => this.handleFeedback('neutral')}>Нейтрально</button>
        <button onClick={() => this.handleFeedback('bad')}>Погано</button>

        <h2>Статистика:</h2>
        <p>Добре: {this.state.good}</p>
        <p>Нейтрально: {this.state.neutral}</p>
        <p>Погано: {this.state.bad}</p>
      </div>
    );
  }
}

export default Feedback;