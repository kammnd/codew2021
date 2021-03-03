import LanguageConsumer from './LanguageConsumer';

const TranslatableText = props => (
    <LanguageConsumer>
      {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);

export default TranslatableText;