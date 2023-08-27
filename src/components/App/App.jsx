import { useState } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section/Section';
import { Wrapper } from './App.styled';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (good === 0) {
      return 0;
    }

    return Math.round((good / total) * 100);
  };

  return (
    <Wrapper>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onClickBtnFeedback={handleChange}
        />
      </Section>
      <Section title={'Statictics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Wrapper>
  );
};

export default App;
