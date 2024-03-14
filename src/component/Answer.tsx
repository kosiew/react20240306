
interface Props {
  answer: string
}

export const Answer: React.FC<Props> = ({ answer }) => {


  return <h3>The Sage speaks: {answer}</h3>;
};