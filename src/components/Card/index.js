import { Card as CardContainer, CardBody, CardItem, Tag, CardTitle } from "./styles";

const Card = ({ nome, tags, imagem }) => {
  return (
    <CardContainer>
      <CardBody>
        <CardTitle>{nome}</CardTitle>
        <CardItem>
          {tags.map((tag) => (
            <Tag>{tag}</Tag>
          ))}
        </CardItem>
        <CardItem>
          <img src={imagem} alt="Imagem" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
