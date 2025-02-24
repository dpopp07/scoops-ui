import { ReactNode, useState } from 'react';
import {
  formatUnit,
  RecipeIngredient as IRecipeIngredient,
  Preparation,
} from '../utils';
import IngredientPreparation from './IngredientPreparation';
import Modal from './Modal';
import classes from './RecipeIngredient.module.css';

interface Props {
  ingredient: IRecipeIngredient;
}

export default function RecipeIngredient({ ingredient }: Props) {
  const { name, quantity, preparation, unit } = ingredient;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {quantity}
      {formatUnit(unit)} {getNameElement(name, preparation, openModal)}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <IngredientPreparation name={name} prep={preparation!} />
      </Modal>
    </>
  );
}

function getNameElement(
  name: string,
  preparation: Preparation | undefined,
  openModal: () => void,
): ReactNode {
  if (preparation) {
    return (
      <span className={classes.hasPrep} onClick={openModal}>
        {name}
      </span>
    );
  }

  return name;
}
